import React from "react";
import { useParams } from "react-router-dom";
import S from "./style";

const SubCategory = ({ mainCategories, handleSubCategoryOnClick}) => {
  const { main, sub: currentSubSlug} = useParams();
  const currentCategory = mainCategories.find((c) => c.slug === main);
  
  const subCategoryList = currentCategory.sub.map(({name, slug}, i) =>{
  const isActived = currentSubSlug === slug;

    return <li key={i}>
      <S.SubCategory to={`/${main}/${slug}`}
        $isActive={isActived}
        onClick={() => handleSubCategoryOnClick(name)}
      >{name}
      </S.SubCategory>
    </li>
  })
  
  return (
    <S.SubCategoryWrapper>
      {subCategoryList}
    </S.SubCategoryWrapper>
  );
};

export default SubCategory;
