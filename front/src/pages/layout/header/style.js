import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenter}
  gap:10px;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`;

S.CategoryWrapper = styled.ul`
  display: flex;
  gap: 32px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.lightBold};
`;

S.Category = styled(Link)`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.PALETTE.primary["main"] : "inherit"};
`;

S.Logo = styled(Link)`
  color: ${({ theme }) => theme.PALETTE.primary["main"]};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.blod};
  padding-right: 20px;
`;

S.SearchWrapper = styled.div`
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.5%);
  border-radius: 8px;
  width: 260px;
  padding: 5px;
`;

S.LoginBtn = styled(Link)`
  color: #787878;
  text-decoration: none;
  font-size: 14px;
`;

//내 정보 팝업
S.Profile = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 5rem;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: antiquewhite;
  padding-top: 1.4375rem;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  background-color: white;
  border: 1px solid #0000000d;
  align-items: center;
  width: 17.25rem;
  height: auto;
  z-index: 100;
`;

S.ProfileWrapper = styled.div`
  display: block;
  border-bottom: 1px solid #333;
  width: 100%;
  text-align: center;
`;

S.MyPageBtn = styled(NavLink)`
  border: 1px solid #0000000d;
  font-size: 12px;
  color: #333;
`;

export default S;
