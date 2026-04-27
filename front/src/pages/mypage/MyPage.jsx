import React from "react";
import S from "./style";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";

const MyPage = () => {
  const {
      register,
      handleSubmit,
      getValues,
      formState: { errors, isSubmitting },
    } = useForm({ mode: "onChange" });
  const { member, setIsAuthenticated, setMember } = useAuthStore();

  
    const update = handleSubmit(async (data) => {
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
        alert("회원 정보 수정 성공!");
        window.location.href = "/login";
      }
    });
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <>
    <div>계정정보</div>
    <div>이름{member.name}</div>
    <div>비밀번호 변경</div>
    <div>계정정보{member.email}</div>
    <button>회원탈퇴</button>
    </>
  );
};

export default MyPage;
