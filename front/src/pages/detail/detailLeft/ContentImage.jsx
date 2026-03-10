import React from "react";
import S from "./style";

const ContentImage = ({selectedData}) => {
  return (
    <>
      <S.ContentImgWrapper>
        <S.BlurImgWrapper>
          <S.BlurImg
            src={`${process.env.PUBLIC_URL}/assets/content/${selectedData.main}/img/${selectedData.thumbnail}`}
            alt={selectedData.thumbnail}
          />
        </S.BlurImgWrapper>
        <S.ImgWrapper key={selectedData.id}>
          <S.ContentImg
            src={`${process.env.PUBLIC_URL}/assets/content/${selectedData.main}/img/${selectedData.thumbnail}`}
            alt={selectedData.thumbnail}
          />
        </S.ImgWrapper>
      </S.ContentImgWrapper>
    </>
  );
};

export default ContentImage;
