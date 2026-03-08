import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import S from "./style";
import { useParams } from "react-router-dom";

const Header = ({ mainCategories, handleCategoryOnClick, isActive }) => {
  const {main} = useParams()
  const mainCategoryList = mainCategories.map(({ name, slug, sub },i) => (
    <li key={i}>
      <S.Category
        to={slug === "" ? "/" : `/${slug}`}
        onClick={() => handleCategoryOnClick(name, sub)}
        $isActive={main === slug}
      >
        {name}
      </S.Category>
    </li>
  ));
  return (
    <>
      <S.Wrapper>
        <S.Logo to={"/"}>JBOOK</S.Logo>
        <S.CategoryWrapper>{mainCategoryList}</S.CategoryWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.SearchWrapper>
          <form>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#a5a5a5" />
            <input type="text" />
            <button></button>
          </form>
        </S.SearchWrapper>
        <S.LoginBtn to={"/login"}>로그인/회원가입</S.LoginBtn>
      </S.Wrapper>
    </>
  );
};

export default Header;
