import React from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKakaoTalk } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <S.LoginWrapper>
        <form action={""}>
          <S.LoginInner>
            <div>
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
            </div>
            <button>로그인</button>
          </S.LoginInner>
        </form>
        <S.LoginLinks>
          <Link>아이디 찾기</Link>
          <Link>비밀번호 찾기</Link>
          <Link to={"/join"}>회원가입</Link>
        </S.LoginLinks>
        <S.SnsButtonWrapper>
          <p>SNS 계정으로 로그인/가입</p>
          <S.ButtonInner>
            <button>
              <S.SnsLoginImg src={`${process.env.PUBLIC_URL}/assets/login/img/naver_login.png`} alt="" />
            </button>
            <button>
              <S.SnsLoginImg src={`${process.env.PUBLIC_URL}/assets/login/img/kakao_login.png`} alt="" />
            </button>
            <button>
              <S.SnsLoginImg src={`${process.env.PUBLIC_URL}/assets/login/img/google_login02.png`} alt="" />
            </button>
          </S.ButtonInner>
        </S.SnsButtonWrapper>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
