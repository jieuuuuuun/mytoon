import styled from "styled-components";

const S = {};

S.MainBannerWrapper = styled.div`
  width: 956px;
  overflow: hidden;
  border-radius: 10px;
  height: 375px;
  position: relative;
  margin: 0 0 20px 0;
`;

S.MainBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

S.BannerTitle = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`;

S.TitleWrapper = styled.div`
  position: absolute;
  bottom: 46px;
  left: 40px;
  display: flex;
  flex-direction: column;
`;

//contentCard
S.ContentWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1.8 / 3;
  width: 100%;
  position: relative;
  border: 1px solid #ebe6e7;
`;

S.CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.ImgWrapper = styled.div`
  width: 100%;
  height:100%;
  position: relative;
`;

S.CardWrapper = styled.div`
  width: calc(100% + 4px);
  grid-template-columns: repeat(6, minmax(0, 1fr));
  display: grid;
  gap: 10px;
  overflow: hidden;
`;

S.InfoWrapper = styled.div`
  padding: 10% 8px 8px 8px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 14px;
  color: white;
  font-weight: bold;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%, 
    rgba(0, 0, 0, 0.7) 100%
  );

  & div {
    font-size:11px;
    color: #ebe6e7;
    font-weight: 400;
  }
`;

export default S;
