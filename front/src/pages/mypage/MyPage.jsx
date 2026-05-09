import React from "react";
import S from "./style";
import useAuthStore from "../../store/authStore";
import PasswordUpdate from "./PasswordUpdate";

const MyPage = () => {
  const { member, setMember, setIsAuthenticated } = useAuthStore();
  const handleMemberDelete = async () => {
    const firstConfirm = window.confirm("정말 탈퇴를 진행하시겠습니까?");

    const response = await fetch(
      `http://localhost:10000/members/${member.id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("회원 탈퇴에 실패하였습니다.");
    }

    alert("회원 탈퇴가 완료되었습니다.");

    setMember(null);
    setIsAuthenticated(false);

    window.location.href = "/"
  };

  return (
    <>
      <div>계정정보</div>
      <div>아이디{member.email}</div>
      <div>이름{member.name}</div>
      <div>
        <div>비밀번호 변경</div>
        <PasswordUpdate memberId={member.id}></PasswordUpdate>
      </div>
      <button onClick={handleMemberDelete}>회원탈퇴</button>
    </>
  );
};

export default MyPage;
