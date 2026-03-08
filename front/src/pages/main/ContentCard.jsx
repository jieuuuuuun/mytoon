import React from "react";
import { Link, useParams } from "react-router-dom";
import S from "./style";

const ContentCard = ({ contents }) => {
  const { main, sub } = useParams();
  const contentCardFilter =
    contents.filter((c) => c.main === main) ||
    contents.filter((c) => c.main === main && c.sub === sub);
  console.log("contentCard", main, sub);

  const contentList = contentCardFilter
    .slice(0, 6)
    .map(({ title, thumbnail, views, main }, i) => (
      <div key={i}>
        <Link>
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
    ));

  return <S.CardWrapper>{contentList}</S.CardWrapper>;
};

export default ContentCard;
