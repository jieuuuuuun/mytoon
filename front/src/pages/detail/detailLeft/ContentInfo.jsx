import React from "react";
import S from "./style";

const ContentInfo = ({selectedData, selectMainCategory, selectSubCategory, dayData}) => {
  return (
    <>
      <S.ContentInfoWrapper>
        <S.ContentInfo>
          <S.Title>{selectedData.title}</S.Title>
          <div>
            <span>{selectedData.author.join(", ")}</span>
          </div>
          <S.Meta>
            <div>
              <span>{`${selectMainCategory}/${selectSubCategory}`}</span>
            </div>
            <div>
              <span>{selectedData.views}</span>
            </div>
            <div>
              <span>{selectedData.rating}</span>
            </div>
          </S.Meta>
          <span>{dayData[selectedData.day]} 연재</span>
        </S.ContentInfo>
      </S.ContentInfoWrapper>
    </>
  );
};

export default ContentInfo;
