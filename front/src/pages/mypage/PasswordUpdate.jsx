import React from "react";
import S from "./style";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";
import { useMutation } from "@tanstack/react-query";

const PasswordUpdate = ({ memberId }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const passwordUdate = handleSubmit(async (data) => {
    console.log(data);
    const body = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };

    await fetch(
      `http://localhost:10000/members/${memberId}/password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
  });

  const passwordUpdateMutation = useMutation({
    mutationFn: passwordUdate,
    onSuccess: (res) => {
      alert("비밀번호 변경 완료하였습니다.");
    },
    onError: (error) => {
      alert("비밀번호 변경에 실패하였습니다.");
    },
  });

  const onSubmit = (fromData) => {
    passwordUpdateMutation.mutate(fromData);
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="password"
          placeholder="현재비밀번호"
          {...register("currentPassword", {
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
            소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.
          </S.ErrorMessage>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="새비밀번호"
          {...register("newPassword", {
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
            소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.
          </S.ErrorMessage>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="새비밀번호 학인"
          {...register("newPasswordConfirm", {
            required: true,
            validate: {
              matchPassword: (newPasswordConfirm) => {
                const { newPassword } = getValues();
                return newPassword === newPasswordConfirm;
              },
            },
          })}
        />
        {errors && errors?.memberPasswordConfirm && (
          <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        )}
      </div>
      <button>비밀번호 변경</button>
    </form>
  );
};

export default PasswordUpdate;
