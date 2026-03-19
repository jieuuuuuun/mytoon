import React from "react";
import { contents } from "../../data/contentData";
import { Link, useParams, useSearchParams } from "react-router-dom";
import S from "./style";
import DAY from "../../data/day";
import MAIN_SECTIONS from "../../data/category";
import ContentImage from "./detailLeft/ContentImage";
import ContentInfo from "./detailLeft/ContentInfo";
import EPISODE from "../../data/episode";

const DetailContainer = () => {
  const { id: currentId } = useParams();
  const [searchParams] = useSearchParams();
  const tapButton = [
    {
      id: 1,
      title: "홈",
      tap_type: "overview"
    },
    {
      id: 2,
      title: "정보",
      tap_type: "about"
    }
     
  ];

  //홈, 정보 탭 쿼리 값
  const currentTap = searchParams.get("tap_type");
  //전체데이터
  const datas = contents;
  //에피소드 데이터
  const episodeData = EPISODE;
  //연재요일 한글 상수
  const dayData = DAY;
  //카테고리 한글 상수
  const categoryData = MAIN_SECTIONS;
  //현재 선택된 데이터
  const selectedData = datas.find((data) => data.id === Number(currentId));
  //현재 선택한 작품의 에피소드 데이터
  const selectedEpisode = episodeData.filter(
    (data) => data.content_id === Number(currentId),
  );

  //선택된 데이터의 영문 메인카테고리와 한글 상수 카테고리에서 찾기
  const selectMainCategory = categoryData.find(
    (section) => section.main === selectedData.main,
  )?.label;

  //선택된 데이터의 영문 서브카테고리와 한글 상수 카테고리에서 찾기
  const selectSubCategory = categoryData
    .find((section) => section.main === selectedData.main)
    .sub.find((sub) => sub.key === selectedData.sub)?.label;

  //tap버튼들
  const tapButtons = tapButton.map(({title, tap_type },i) => {
    const isTapActive = currentTap ? currentTap === tap_type : tap_type === "overview";
      return (
      <S.TapBtn key={i} $isActive={isTapActive}>
        <Link to={`/content/${currentId}?tap_type=${tap_type}`}>
          <div>{title}</div>
        </Link>
      </S.TapBtn>
      )
});

  //에피소드 리스트
  const episodeList = selectedEpisode.map(
    ({ content_id, date, title, thumbnail, is_public }, i) => {
      return (
        <S.EpisodeContainer key={i}>
          <div>
            <Link to={``}>
              <S.EpisodeWrapper>
                <S.EpisodeImgWrapper>
                  <S.EpisodeImg
                    src={`${process.env.PUBLIC_URL}/assets/episode/${content_id}/${thumbnail}`}
                    alt=""
                  />
                </S.EpisodeImgWrapper>
                <div>
                  <div>{`${title}`}</div>
                  <div>{date}</div>
                  <div>{is_public}</div>
                </div>
              </S.EpisodeWrapper>
            </Link>
          </div>
        </S.EpisodeContainer>
      );
    },
  );

  //키워드 모양 가공
  const keywords = selectedData.keywords.map((keyword, i) => {
    return (
      <li>
        <S.KeywordLink
          key={i}
          to={`/search/themekeyword?filterList=${keyword}`}
        >
          <div>
            <span>{`#${keyword}`}</span>
          </div>
        </S.KeywordLink>
      </li>
    );
  });

  //전체데이터에서 선택된 데이터의 작가와 같은 다른 작품 필터
  const authorFilter = datas.filter(
    (data) =>
      data.id !== selectedData.id &&
      data.author.some((author) => selectedData.author.includes(author)),
  );

  //선택된 데이터의 작가의 다른 작품데이터 가공
  const otherWorksByauthor = authorFilter.map(
    ({ id, title, main, views, thumbnail }, i) => {
      const mainKor = categoryData.find((c) => c.main === main).label;
      let formattedViews = views;
      if (views < 10000) {
        return (formattedViews = views.toLocaleString("ko-KR"));
      } else {
        formattedViews = (views / 10000).toFixed(1).replace(/\.0$/, "") + "만";
      }

      return (
        <li key={i}>
          <div>
            <Link to={`/content/${id}`}>
              <S.AuthorImgWrapper>
                <S.AuthorImg
                  src={`${process.env.PUBLIC_URL}/assets/content/${main}/img/${thumbnail}`}
                  alt=""
                />
              </S.AuthorImgWrapper>
              <S.AuthorInfoWrapper>
                <S.AuthorTitle>{title}</S.AuthorTitle>
                <S.AuthorMainEndViews>
                  <div>{mainKor}</div>
                  <div>{formattedViews}</div>
                </S.AuthorMainEndViews>
              </S.AuthorInfoWrapper>
            </Link>
          </div>
        </li>
      );
    },
  );

  console.log(episodeList);
  
  return (
    <div>
      <S.Container>
        <S.ContentWrapper>
          <ContentImage selectedData={selectedData} />
          <ContentInfo
            selectedData={selectedData}
            selectMainCategory={selectMainCategory}
            selectSubCategory={selectSubCategory}
            dayData={dayData}
          />
        </S.ContentWrapper>

        <S.TapBg>
          <S.TapWrapper>{tapButtons}</S.TapWrapper>

          <S.TapContainer>
            <div>
              {currentTap !== "about" ? (
                <ul>{episodeList.length === 0 ? (
                  <li>
                    <div>현재 등록된 에피소드가 없습니다.</div>
                  </li>
                ) : (
                  episodeList
                )}</ul>
              ) : (
                <>
                  <S.ContentTitleWrapper>
                    <S.ContentTitle>줄거리</S.ContentTitle>
                  </S.ContentTitleWrapper>
                  <S.DescriptionWrapper>
                    <div>{selectedData.description}</div>
                  </S.DescriptionWrapper>
                </>
              )}
            </div>

            <div>
              <S.ContentTitleWrapper>
                <S.ContentTitle>키워드</S.ContentTitle>
              </S.ContentTitleWrapper>
              <S.KeywordUl>{keywords}</S.KeywordUl>
            </div>

            {authorFilter.length === 0 ? (
              <></>
            ) : (
              <div>
                <S.ContentTitleWrapper>
                  <S.ContentTitle>이 작 가의 다른 작품</S.ContentTitle>
                </S.ContentTitleWrapper>
                <div>
                  <S.AuthorUl>{otherWorksByauthor}</S.AuthorUl>
                </div>
              </div>
            )}
          </S.TapContainer>
        </S.TapBg>
      </S.Container>
    </div>
  );
};

export default DetailContainer;
