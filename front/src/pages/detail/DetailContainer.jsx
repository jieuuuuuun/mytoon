import React from "react";
import { contents } from "../../data/contentData";
import { Link, useParams, useSearchParams } from "react-router-dom";
import S from "./style";
import DAY from "../../data/day";
import MAIN_SECTIONS from "../../data/category";
import ContentImage from "./detailLeft/ContentImage";
import ContentInfo from "./detailLeft/ContentInfo";
import { type } from "@testing-library/user-event/dist/type";

const DetailContainer = () => {
  const { id: currentId } = useParams();
  const [searchParams] = useSearchParams();
  const currentTap = searchParams.get("tap_type");

  const datas = contents;
  const selectedData = datas.find((data) => data.id === Number(currentId));

  const dayData = DAY;
  const categoryData = MAIN_SECTIONS;
  const selectMainCategory = categoryData.find(
    (section) => section.main === selectedData.main,
  )?.label;

  const selectSubCategory = categoryData
    .find((section) => section.main === selectedData.main)
    .sub.find((sub) => sub.key === selectedData.sub)?.label;

  const authorFilter = datas.filter(
    (data) =>
      data.id !== selectedData.id &&
      data.author.some((author) => selectedData.author.includes(author)),
  );

  console.log(authorFilter);

  const otherWorksByauthor = authorFilter.map(
    ({ id, title, main, views, thumbnail }, i) => (
      <li key={i}>
        <div>
          <Link to={`/content/${id}`}>
            <S.AuthorImgWrapper>
              <S.AuthorImg
                src={`${process.env.PUBLIC_URL}/assets/content/${main}/img/${thumbnail}`}
                alt=""
              />
            </S.AuthorImgWrapper>
            <div>{title}</div>
            <div>
              <div>{main}</div>
              <div>{views}</div>
            </div>
          </Link>
        </div>
      </li>
    ),
  );

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
          <S.TapWrapper>
            <S.TapBtn>
              <Link to={`/content/${currentId}?tab_type=overview`}>홈</Link>
            </S.TapBtn>
            <S.TapBtn>
              <Link to={`/content/${currentId}?tab_type=about`}>정보</Link>
            </S.TapBtn>
          </S.TapWrapper>

          <S.TapContainer>

            <S.TapContentWrapper>
              <S.ContentTitleWrapper>
                <S.ContentTitle>줄거리</S.ContentTitle>
              </S.ContentTitleWrapper>
              <S.DescriptionWrapper>
                <div>{selectedData.description}</div>
              </S.DescriptionWrapper>
            </S.TapContentWrapper>

            <S.TapContentWrapper>
              <S.ContentTitleWrapper>
                <S.ContentTitle>키워드</S.ContentTitle>
              </S.ContentTitleWrapper>
              <div>{selectedData.keywords}</div>
            </S.TapContentWrapper>
            
            <S.TapContentWrapper>
              <S.ContentTitleWrapper>
                <S.ContentTitle>이 작 가의 다른 작품</S.ContentTitle>
              </S.ContentTitleWrapper>
              <div>
                <S.AuthorUl>{otherWorksByauthor}</S.AuthorUl>
              </div>
            </S.TapContentWrapper>

          </S.TapContainer>

        </S.TapBg>
      </S.Container>
    </div>
  );
};

export default DetailContainer;
