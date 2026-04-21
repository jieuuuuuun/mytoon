import React from "react";
import S from "./style";
import { useForm } from "react-hook-form";

const Join = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const join = handleSubmit(async (data) => {
    const { memberEmail, memberPassword, memberName } = data;
    const member = {
      email: memberEmail,
      password: memberPassword,
      name: memberName,
    };

    const response = await fetch("http://localhost:10000/members/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) {
      throw new Error("Data Fetching Error");
    } else {
      alert("회원가입 성공!");
      window.location.href = "/login";
    }
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <>
      <S.JoinWrapper>
        <form onSubmit={join}>
          <S.JoinInner>
            <div>
              <input
                type="text"
                placeholder="이메일을 입력해주세요."
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
            </div>
            <div>
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
              <input
                type="password"
                placeholder="비밀번호 학인"
                {...register("memberPasswordConfirm", {
                  required: true,
                  validate: {
                    matchPassword: (memberPasswordConfirm) => {
                      const { memberPassword } = getValues();
                      return memberPassword === memberPasswordConfirm;
                    },
                  },
                })}
              />
              {errors && errors?.memberPasswordConfirm && (
                <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="이름"
                {...register("memberName")}
              />
            </div>
            <button disabled={isSubmitting}>회원가입</button>
          </S.JoinInner>
        </form>
      </S.JoinWrapper>
    </>
  );
};

export default Join;
