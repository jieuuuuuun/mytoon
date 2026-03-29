import React from "react";
import { Link, useParams } from "react-router-dom";
import S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainBanner = ({ mainBanner }) => {
  const { main, sub } = useParams();

  const categoryfilter = !main
    ? mainBanner
    : mainBanner.filter((c) => c.main === main);
  const mainBannerList = categoryfilter.map(({ title, img, main, sub }, i) => {
    // console.log("mainBannerList",slug);
    
    return (
      <SwiperSlide>
        <li key={i}>
          <Link to={`/${main}/${sub}`}>
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
      </SwiperSlide>
    );
  });

  return (
    <S.MainBannerWrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="bannerSwiper"
      >
        <div>
          <ul>{mainBannerList}</ul>
        </div>
      </Swiper>
    </S.MainBannerWrapper>
  );
};

export default MainBanner;
