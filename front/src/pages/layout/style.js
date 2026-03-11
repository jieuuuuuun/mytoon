import styled from "styled-components";
import { flexBeetween, flexCenterColumn } from "../../styles/common";

const S = {};
//layout
S.PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  width: 75rem;
  margin: 0 auto;
`;

S.HaderWrapper = styled.header`
  ${flexCenterColumn};
  width: 100%;
  position: sticky;
  z-index: 100;
`;

S.HeaderInner = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items:center;
  height: 96px;
  width: 100%;
`;

//main
S.MainWrapper = styled.div`
  padding: 0 7.625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default S;
