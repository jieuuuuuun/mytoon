import { Link} from "react-router-dom";
import styled from "styled-components";
import { flexLeft } from "../../../styles/common";

const S = {};

S.SubCategoryWrapper = styled.ul`
  ${flexLeft};
  gap:10px;
`

S.SubCategory = styled(Link)`
  padding: 5px 18px;
  border-radius: 100px;
  height:36px;
  border:1px solid #0000001a;
  font-size:13px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.PALETTE.primary["main"] : "inherit"};
  color: ${({ $isActive }) =>
    $isActive ? "#fff" : "inherit"};
`


export default S;