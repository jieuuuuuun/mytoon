import React from 'react';
import S from "./style";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
      <S.JoinWrapper>
        <form action={""}>
          <S.JoinInner>
            <div>
              <input type="text" placeholder="아이디" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
              <input type="password" placeholder="비밀번호 학인" />
            </div>
            <div>
              <input type="text" placeholder="이름" />
            </div>
            <button>회원가입</button>
          </S.JoinInner>
        </form>
      </S.JoinWrapper>
    </>
  );
};

export default Join;