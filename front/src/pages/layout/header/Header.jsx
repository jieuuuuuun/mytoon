import React, { useState } from "react";
import S from "./style";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import useAuthStore from "../../../store/authStore";
import { useMutation } from '@tanstack/react-query';

const Header = ({ mainCategories, handleCategoryOnClick }) => {
  const { main: mainCategory } = useParams();
  const currentPage = useLocation().pathname;
  const { member, setIsAuthenticated, setMember } = useAuthStore();
  const [ isProfile, setIsProfile ] = useState(false);
  const navigate = useNavigate()

    const logout = async () => {
        const response = await fetch(`http://localhost:10000/auth/logout`, {
            method: "POST",
            // ※인증이 필요한 모든 요청에는 Cookie의 토큰을 같이 보내야한다.※,
            credentials: "include"
        })

        if(!response.ok) throw new Error('Logout Error')
        return await response.json()
    }

    const logoutMutation = useMutation({
        mutationFn: logout,
        onSuccess: (res) => {
            setIsAuthenticated(false)
            setIsProfile(false)
            setMember(null)
            navigate("/", { replace: true })
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const handleLogoutOnClick = () => {
        logoutMutation.mutate()
    }

  const handleUserIconOnClick = () => {
    setIsProfile(!isProfile);
  };

  const profile = isProfile && (
    <S.Profile>
      <S.ProfileWrapper>
        <S.MyPageBtn to={'/mypage'}>
          {member.name}
        </S.MyPageBtn>
      </S.ProfileWrapper>
      <button onClick={handleLogoutOnClick}>로그아웃</button>
    </S.Profile>
  );

  const mainCategoryList = mainCategories.map(
    ({ name, slug, subCategories }, i) => {
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
    },
  );

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
              <input type="text" name="keyword" />
              <button></button>
            </form>
          </S.SearchWrapper>
          {member ? (
            <>
              <button onClick={handleUserIconOnClick}>
                <FontAwesomeIcon icon={faUser} size="xl" />
              </button>
              {profile}
            </>
          ) : (
            <S.LoginBtn to={"/login"}>로그인/회원가입</S.LoginBtn>
          )}
        </S.Wrapper>
      </>
    );

  return <>{header}</>;
};

export default Header;
