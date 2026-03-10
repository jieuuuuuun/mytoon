import styled from "styled-components";
import { flexCenterColumn, flexColumn, flexLeft, flexRow } from "../../styles/common";

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
`;

//tap
S.TapContainer = styled.div`
  ${flexColumn};
  gap:10px;
`

S.TapBg = styled.div`
  border-radius: 12px;
  border: 1px solid #f7f7f7;
  border-radius: 12px;
  ${flexColumn};
  overflow: hidden;
  width: 632px;
`;

S.TapContentWrapper = styled.div`
  background-color: #f7f7f7;
  width:100%;
  border-radius: 0 0 12px 12px;
  padding: 0 0 10px 0;
`

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
S.AuthorWrapper = styled.div``;

S.Author = styled.div`
  display: flex;
`;

S.AuthorImgWrapper = styled.div`
  width: 98px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;
S.AuthorImg = styled.img`
  width: 100%;
`;
S.AuthorUl = styled.ul`
  ${flexRow};
`;

export default S;
