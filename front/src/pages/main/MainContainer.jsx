import React from "react";
import { useParams } from "react-router-dom";
import MainBanner from "./MainBanner";
import ContentCard from "./ContentCard";
import {contents} from "../../data/contentData"

const MainContainer = () => {
  const mainBanner = [
    {
      id: 1,
      main: "webtoon",
      sub: "romance",
      title: "jbook 웹툰 신간 출시",
      img: "main_banner_09.jpg",
    },
    {
      id: 2,
      main: "webnovel",
      sub: "romance",
      title: "jbook 웹소설 신간 출시",
      img: "main_banner_03.jpg",
    },
    {
      id: 3,
      main: "ebook",
      sub: "business-economy",
      title: "jbook 도서 신간 출시",
      img: "main_banner_04.png",
    },
    {
      id: 4,
      main: "webtoon",
      sub: "action",
      title: "jbook 웹툰 신간 출시2",
      img: "main_banner_08.jpg",
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
