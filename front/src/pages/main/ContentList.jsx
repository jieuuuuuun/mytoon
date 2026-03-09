import React from 'react';
import { Link, useParams } from 'react-router-dom';
import S from './style';

const ContentList = ({contentCardFilter, subTitle, mainTitle}) => {
  const {main: currentMain, sub: currentSub} = useParams()

  const mainPageContentList = contentCardFilter.map(
    ({ title, thumbnail, views, main, id }) => {
      return <div key={id} value={main}>
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
    },
  );

  const contentList = contentCardFilter.map(
    ({ title, thumbnail, views, main, id }) => (
      <div key={id}>
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
    ),
  );
  return (
    <>
      { !currentMain ? mainPageContentList:contentList}
    </>
  );
};

export default ContentList;