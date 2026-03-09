import React from "react";
import {  useParams } from "react-router-dom";
import ContentList from "./ContentList";

const ContentCard = ({ contents }) => {
  const { main, sub: currentSub } = useParams();
  const MAIN_SECTIONS = [
    {
      main: "webtoon",
      label: "웹툰",
      sub: [
        { key: "romance", label: "로맨스" },
        { key: "fantasy", label: "판타지" },
        { key: "action", label: "액션" },
        { key: "murim", label: "무협" },
        { key: "horror-mystery", label: "공포/추리" },
        { key: "drama", label: "드라마" },
      ],
    },
    {
      main: "webnovel",
      label: "웹소설",
      sub: [
        { key: "romance", label: "로맨스" },
        { key: "romance-fantasy", label: "로판" },
        { key: "fantasy", label: "판타지" },
      ],
    },
  ];

  //"/" 일 경우
  //웹툰 웹소설 카테고리 만
  //예시) "추천 로맨스 웹툰" 로 타이틀이 노출되고 랜덤으로 6개씩 노출된다.

  let contentCardFilter = [];
  if (main === "daily") {
    contentCardFilter = contents.filter((c) => c.day === currentSub);
  } else if (!main) {
    contentCardFilter = contents;
  } else {
    contentCardFilter = contents.filter(
      (c) => c.main === main && c.sub === currentSub,
    );
  }

  const mainPageContentList = !main ? (
    MAIN_SECTIONS.map((section) =>
      section.sub.map((sub) => {
        const filterLsit = contents
          .filter((c) => c.main === section.main && c.sub === sub.key)
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);

        return (
          <ContentList
            key={`${section.main}-${sub.key}`}
            slug={`${section.main}/${sub.key}`}
            title={`추천 ${sub.label} ${section.label}`}
            contentCardFilter={filterLsit}
          />
        );
      })
    )
  ) : (
    <ContentList contentCardFilter={contentCardFilter} />
  );

  return (
    <div>
      {mainPageContentList}
    </div>
  );
};

export default ContentCard;
