import React from "react";
import { Link, useParams } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ContentList = ({ contentCardFilter, title, slug }) => {
  const { main: currentMain, type: searchTyp } = useParams();
  const contentTitle = currentMain || searchTyp ? (
    <></>
  ) : (
    <S.ContentTitle>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <Link to={`/${slug}`}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </S.ContentTitle>
  );

  const contentList = contentCardFilter.map(
    ({ title, thumbnail, views, main, id }) => (
      <div key={id}>
        <Link to={`/content/${id}`}>
          <S.ContentWrapper>
            <S.ImgWrapper>
              <S.CardImg
                src={`${process.env.PUBLIC_URL}/assets/content/${main}/img/${thumbnail}`}
                alt={thumbnail}
              />
            </S.ImgWrapper>
            <S.InfoWrapper>
              <span>{title}</span>
              <div>{views}</div>
            </S.InfoWrapper>
          </S.ContentWrapper>
        </Link>
      </div>
    ),
  );
  return (
    <div>
      {contentTitle}
      <S.CardWrapper>{contentList}</S.CardWrapper>
    </div>
  );
};

export default ContentList;
