// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexLeft = css`
  display: flex;
  justify-content: left;
  align-items: center;
`

export const flexRight = css`
  display: flex;
  justify-content: right;
  align-items: center;
`

export const flexBeetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const flexBeetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const flexBeetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const h1Bold = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["bold"]};
`

export const h1Medium = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["Medium"]};
`