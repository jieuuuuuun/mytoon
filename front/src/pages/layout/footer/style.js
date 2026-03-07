import styled from "styled-components";
import { flexCenter, flexCenterColumn, flexLeft } from "../../../styles/common";

const S = {};

S.FooterWrapper = styled.footer`
  ${flexCenterColumn}
  margin: 5.25rem auto 0 auto;
  padding: 0 0 2.625rem 0;
  min-width: 75rem;
  width: 100%;

  & > div:first-child {
    width: 956px;

  & > nav {
    flex-direction:column;
    display:flex;
    flex:1;
    margin: 0 0 20px 0;
  }
  }
`;

S.FooterMenu = styled.ul`
  ${flexLeft};
  gap: 15px;
  font-size: ${({theme}) => theme.FONT_SIZE.h7};
  color: ${({theme}) => theme.PALETTE.gray["700"]};
`;

S.FooterCompany = styled.div`
  font-size: ${({theme}) => theme.FONT_SIZE.h7};
  color: ${({theme}) => theme.PALETTE.gray["200"]};

  & > div:last-child {
    margin: 20px 0 0 0;
  }
`

export default S;
