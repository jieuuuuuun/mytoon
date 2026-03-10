import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../../styles/common";

const S = {}

S.ContentImgWrapper = styled.div`
  padding: 40px 0 0 0;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  width: 320px;
  height: 326px;
  position: relative;
`;

S.ImgWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.8;
  aspect-ratio: 2.5 / 3;
`;

S.BlurImgWrapper = styled.div`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

S.BlurImg = styled.img`
  filter: blur(20px) brightness(1);
  transform: scale(1.2);
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 75%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 75%
  );
`;

S.ContentImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

//infoLeft
S.ContentInfoWrapper = styled.div`
  padding: 0 0 20px 0;
`;

S.ContentInfo = styled.div`
  ${flexCenterColumn};
  text-align: center;
  gap: 10px;
`;

S.Title = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.lightBold};
`;

S.Meta = styled.div`
  ${flexCenter};
  gap: 10px;
`;

export default S;