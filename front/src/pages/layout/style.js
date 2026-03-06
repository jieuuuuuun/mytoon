import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexBeetween, flexCenter } from "../../styles/common";

const S = {};

S.HaderWrapper = styled.div`
  ${flexBeetween};
  padding: 16px 18px 8px 30px;
`;

S.Wrapper = styled.div`
  ${flexCenter}
  gap:10px;
`

S.Logo = styled(Link)`
  color: ${({ theme }) => theme.PALETTE.primary["main"]};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.blod};
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
  font-size: 12px;
`;

export default S;
