import React from "react";
import { useParams } from "react-router-dom";
import S from "./style";

const SubCategory = ({ mainCategories, isActive, handleSubCategoryOnClick}) => {
  const { main, sub} = useParams();
  const currentCategory = mainCategories.find((c) => c.slug === main) || mainCategories[0];
  const subCategoryList = currentCategory.sub.map(({name, slug}, i) => (
    <li key={i}>
      <S.SubCategory to={`/${main}/${slug}`}
        $isActive={isActive === name}
        onClick={() => handleSubCategoryOnClick(name)}
      >{name}
      </S.SubCategory>
    </li>
  ))
  return (
    <S.SubCategoryWrapper>
      {subCategoryList}
    </S.SubCategoryWrapper>
  );
};

export default SubCategory;
