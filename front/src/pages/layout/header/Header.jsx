import React, { useState } from "react";
import S from "./style";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Header = ({ mainCategories, handleCategoryOnClick }) => {
  const { main: mainCategory } = useParams();
  const currentPage = useLocation().pathname;
  
  const mainCategoryList = mainCategories.map(({ name, slug, subCategories }, i) => {
    const isActiveCategory =
      (name === "추천" && !mainCategory) || mainCategory === slug;
    return (
      <li key={i}>
        <S.Category
          to={slug === "" ? "/" : `/${slug}/${subCategories?.[0]?.slug}`}
          onClick={() => handleCategoryOnClick(name, subCategories)}
          $isActive={isActiveCategory}
        >
          {name}
        </S.Category>
      </li>
    );
  });

  const header =
    currentPage === "/login" || currentPage === "/join" ? (
      <>
        <S.Logo to={"/"}>JBOOK</S.Logo>
      </>
    ) : (
      <>
        <S.Wrapper>
          <S.Logo to={"/"}>JBOOK</S.Logo>
          <S.CategoryWrapper>{mainCategoryList}</S.CategoryWrapper>
        </S.Wrapper>
        <S.Wrapper>
          <S.SearchWrapper>
            <form action={`/search/result`} method="get">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#a5a5a5" />
              <input type="text" name='keyword'/>
              <button></button>
            </form>
          </S.SearchWrapper>
          <S.LoginBtn to={"/login"}>로그인/회원가입</S.LoginBtn>
        </S.Wrapper>
      </>
    );

  return <>{header}</>;
};

export default Header;
