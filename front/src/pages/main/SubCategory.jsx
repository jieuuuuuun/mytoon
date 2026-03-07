import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const SubCategory = ({ mainCategories }) => {
  console.log(mainCategories);
  const subCategoryList = mainCategories.map(({sub}, i) => {
    <li>
      <Link>추천</Link>
    </li>;
  });
  return (
    <S.SubCategoryWrapper>
      <li>
        <Link>로맨스</Link>
      </li>
      <li>
        <Link>드라마</Link>
      </li>
      <li>
        <Link>판타지</Link>
      </li>
      <li>
        <Link>액션</Link>
      </li>
      <li>
        <Link>무협</Link>
      </li>
      <li>
        <Link>공포/추리</Link>
      </li>
    </S.SubCategoryWrapper>
  );
};

export default SubCategory;
