import React from "react";
import S from "./style";
import { Link, useParams } from "react-router-dom";
import MainBanner from "./MainBanner";
import ContentCard from "./ContentCard";
import {contents} from "../../data/contentData"

const MainContainer = () => {
  const mainBanner = [
    //웹툰
    {
      id: 1,
      main: "webtoon",
      sub: "recommend",
      title: "jbook 웹툰 신간 출시",
      slug: "/webtoon/recommend",
      img: "main_banner_01.webp",
    },
    {
      id: 2,
      main: "webnovel",
      sub: "recommend",
      title: "jbook 웹소설 신간 출시",
      slug: "/webnovel/recommend",
      img: "main_banner_01.webp",
    },
    {
      id: 3,
      main: "ebook",
      sub: "recommend",
      title: "jbook 도서 신간 출시",
      slug: "/ebook/recommend",
      img: "main_banner_01.webp",
    },
    {
      id: 4,
      main: "webtoon",
      sub: "recommend",
      title: "jbook 웹툰 신간 출시2",
      slug: "/webtoon/recommend",
      img: "main_banner_01.webp",
    },
  ];

  const { main } = useParams();

  return (
    <div>
      {main === "daily" ? <></> : <MainBanner mainBanner={mainBanner} />}
      <div>
        <ContentCard contents={contents} />
      </div>
    </div>
  );
};

export default MainContainer;
