import styled from "styled-components";
import {
  flexCenterColumn,
  flexColumn,
  flexLeft,
  flexRow,
} from "../../styles/common";
import { Link } from "react-router-dom";

const S = {};

S.ContentWrapper = styled.div`
  border: 1px solid #f7f7f7;
  border-radius: 12px;
  width: 320px;
  ${flexColumn};
  background-color: #f7f7f7;
`;

S.Container = styled.div`
  ${flexRow}
  gap: 10px;
`;

S.ContentTitleWrapper = styled.div`
  padding: 0 18px;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 50px;
  display: flex;
`;

S.ContentTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  align-self: center;
`;

S.DescriptionWrapper = styled.div`
  padding: 0 18px 10px 18px;
  display: flex;
  width: 100%;

  & div{
    font-size:12px;
    white-space: pre-line;
  }
`;

//tap
S.TapContainer = styled.div`
  ${flexColumn};
  gap: 10px;

  & > div:first-child {
    background-color: #f7f7f7;
    width: 100%;
    border-radius: 0 0 12px 12px;
    padding: 0 0 10px 0;
  }

  & > div:nth-child(n+2) {
    background-color: #f7f7f7;
    width: 100%;
    border-radius: 12px;
    padding: 0 0 10px 0;
  }
`;

S.TapBg = styled.div`
  border-radius: 12px;
  ${flexColumn};
  overflow: hidden;
  width: 632px;
`;


S.TapWrapper = styled.div`
  ${flexLeft}
  align-items:center;
  gap: 10px;
  padding: 28px 15px 12px 15px;
  background-color: #f7f7f7;
`;

S.TapBtn = styled.div`
  padding: 7px 14px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray["400"]};
  font-size: 12px;
`;

//author
S.AuthorUl = styled.ul`
  ${flexRow};
  gap: 10px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 18px 10px 0;
  margin: 0 0 0 18px;
`;

S.Author = styled.div`
  display: flex;
`;

S.AuthorImgWrapper = styled.div`
  width: 98px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 140px;
`;
S.AuthorImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  vertical-align: middle;
  display: block;
`;

S.AuthorInfoWrapper = styled.div`
  padding: 8px 8px 4px 0;
`;

S.AuthorTitle = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.PALETTE.gray["700"]};
`;

S.AuthorMainEndViews = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  color: ${({ theme }) => theme.PALETTE.gray["200"]};
`;

//keyword
S.KeywordUl = styled.ul`
  display:flex;
  padding: 0 18px 10px 18px;
  flex-wrap:wrap;
  width:100%;
  gap:10px;
`

S.KeywordLink = styled(Link)`
  & div {
    height:28px;
    padding: 0 12px;
    background-color: #0000000d;
    border-radius:8px;
    display:flex;
    align-items:center;
  }

  & span {
    font-size:12px;
    font-weight:500
  }
`

export default S;
