import { Link } from "react-router-dom";
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

export default S;
