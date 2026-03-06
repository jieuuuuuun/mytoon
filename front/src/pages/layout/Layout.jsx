import React from "react";
import { Link, Outlet } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  return (
    <div>
      <header>
        <S.HaderWrapper>
          <S.Logo to={"/"}>JBOOK</S.Logo>
          <S.Wrapper>
            <S.SearchWrapper>
              <form>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" />
                <button></button>
              </form>
            </S.SearchWrapper>
            <S.LoginBtn to={"/login"}>로그인/회원가입</S.LoginBtn>
          </S.Wrapper>
        </S.HaderWrapper>
        <nav>
          <ul>
            <li>
              <Link>웹툰</Link>
              <Link>웹소설</Link>
              <Link>도서</Link>
              <Link>요일연재</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link>전체카테고리</Link>
        </div>
      </header>
      <main>
        {/* <Outlet /> */}
      </main>
      {/* <footer>푸터</footer> */}
    </div>
  );
};

export default Layout;
