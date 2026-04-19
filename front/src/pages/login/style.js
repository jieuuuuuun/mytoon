import styled from "styled-components";
import { flexCenter, flexCenterColumn, flexColumn } from "../../styles/common";

const S = {};

S.ErrorMessage = styled.p`
  font-size:12px;
  color:red;
`

S.LoginWrapper = styled.div`
  ${flexColumn};
  width: 374px;
  margin: 0 auto;
  gap:20px;
`

S.LoginInner = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 10px;

  & div {
    ${flexColumn};
  }

  & input {
    width: 100%;
    border: 1px solid #e6e6e6;
    display: block;
    height: 52px;
    padding: 17px 10px;
    background: #ffffff;
    color: #141414;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.01em;
    border-radius:4px;
  }

  & > button {
    width: 100%;
    border: 1px solid ${({theme}) => theme.PALETTE.primary["800"]};;
    margin-top: 20px;
    background: ${({theme}) => theme.PALETTE.primary["active"]};
    border-radius: 6px;
    height: 46px;
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    color:#fff;
  }
`;

S.LoginLinks = styled.div`
  ${flexCenter};
  font-size:13px;

  & a::after {
    content:"|";
    margin: 0 10px;
    color: #d3d3d3;
  }
`

S.SnsButtonWrapper = styled.div`
  ${flexCenterColumn};
  gap:20px;
  padding: 30px 0 0 0;
`

S.ButtonInner = styled.div`
  ${flexCenter}

  & button {
    background:transparent;
  }
`
S.SnsLoginImg = styled.img`
  width:50px;
`

export default S;
