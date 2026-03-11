import styled from "styled-components";
import { flexCenter, flexCenterColumn, flexColumn } from "../../styles/common";

const S = {};

S.JoinWrapper = styled.div`
  ${flexColumn};
  width: 374px;
  margin: 0 auto;
  gap:20px;
`

S.JoinInner = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 20px;

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

export default S;
