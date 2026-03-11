import React from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./style";

const Footer = () => {
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  
  return (
    <>
      {(currentPage === "/login") || (currentPage === "/join") ? <></> : (<S.FooterWrapper>
        <div>
          <nav>
            <S.FooterMenu>
              <li>
                <Link to={"/"}>회사 소개</Link>
              </li>
              <li>
                <Link to={"/"}>이용약관</Link>
              </li>
              <li>
                <Link to={"/"}>개인정보처리방침</Link>
              </li>
              <li>
                <Link to={"/"}>청소년보호정책</Link>
              </li>
              <li>
                <Link to={"/"}>고객센터</Link>
              </li>
              <li>
                <Link to={"/"}>공지사항</Link>
              </li>
            </S.FooterMenu>
          </nav>
          <S.FooterCompany>
            <div>
              <div>(주)JBOOK 사업자 정보</div>
              <div>대표이사 방지은</div>
              <div>
                사업자등록번호 123-45-56789|통신판매업 신고번호 2026-ABCD-0301
              </div>
              <div>대표전화 010-4513-0572|이메일 bangjieun12@gmail.com</div>
            </div>
            <div>© JBOOK Corp.</div>
          </S.FooterCompany>
        </div>
      </S.FooterWrapper>)}
    </>
  );
};

export default Footer;
