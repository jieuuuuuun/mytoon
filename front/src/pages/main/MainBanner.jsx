import React from "react";
import { Link, useParams } from "react-router-dom";
import S from "./style";

const MainBanner = ({ mainBanner }) => {
  const { main, sub } = useParams();
  
  const categoryfilter = !main ? mainBanner : mainBanner.filter((c) => c.main === main)
  const mainBannerList = categoryfilter.map(({title, img, slug}, i) => {
    return <li key={i}>
      <Link to={slug}>
        <div>
          <S.MainBannerImg
            src={`${process.env.PUBLIC_URL}/assets/banner/main-img/${img}`}
            alt={img}
          />
        </div>
        <S.TitleWrapper>
          <S.BannerTitle>{title}</S.BannerTitle>
        </S.TitleWrapper>
      </Link>
    </li>
  });

  return (
    <div>
      <S.MainBannerWrapper>
        <ul>
          {mainBannerList}
        </ul>
      </S.MainBannerWrapper>
      <div>
        {/* <button>
          <img src="" alt="" />
        </button> */}
      </div>
    </div>
  );
};

export default MainBanner;
