import React from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./style";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const { setIsAuthenticated, setMember } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm({ mode: "onChange" });

  //[] 바깥 ^는 문자열 처음을 의미
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const login = (async (member) => {
    const response = await fetch("http://localhost:10000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
      //쿠키를 주고받으려면 credentials 옵션이 필수
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("로그인 실패");
    }
    return response.json();
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      // 로그인 성공
      console.log("onSuccess", res);
      setIsAuthenticated(true);
      setMember(res.member);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      setIsAuthenticated(false);
    },
  });

  const onSubmit = (formData) => {
    // 데이터 요청(react query)
    loginMutation.mutate(formData);
  };

  return (
    <>
      <S.LoginWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.LoginInner>
            <div>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                {...register("memberEmail", {
                  required: true,
                  pattern: {
                    value: emailRegex,
                  },
                })}
              />
              {errors && errors?.memberEmail?.type === "required" && (
                <S.ErrorMessage>이메일을 입력하세요.</S.ErrorMessage>
              )}
              {errors && errors?.memberEmail?.type === "pattern" && (
                <S.ErrorMessage>이메일 양식에 맞게 입력하세요.</S.ErrorMessage>
              )}
              <input
                type="password"
                placeholder="비밀번호"
                {...register("memberPassword", {
                  required: true,
                  pattern: {
                    value: passwordRegex,
                  },
                })}
              />
              {errors && errors?.memberPassword?.type === "required" && (
                <S.ErrorMessage>비밀번호를 입력하세요.</S.ErrorMessage>
              )}
              {errors && errors?.memberPassword?.type === "pattern" && (
                <S.ErrorMessage>
                  소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야
                  합니다.
                </S.ErrorMessage>
              )}
            </div>
            <button disabled={isSubmitting}>로그인</button>
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
              <S.SnsLoginImg
                src={`${process.env.PUBLIC_URL}/assets/login/img/naver_login.png`}
                alt=""
              />
            </button>
            <button>
              <S.SnsLoginImg
                src={`${process.env.PUBLIC_URL}/assets/login/img/kakao_login.png`}
                alt=""
              />
            </button>
            <button>
              <S.SnsLoginImg
                src={`${process.env.PUBLIC_URL}/assets/login/img/google_login02.png`}
                alt=""
              />
            </button>
          </S.ButtonInner>
        </S.SnsButtonWrapper>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
