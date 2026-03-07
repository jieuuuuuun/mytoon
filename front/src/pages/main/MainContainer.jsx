import React from "react";
import { Link } from "react-router-dom";
import S from "./style";
import SubCategory from "./SubCategory";

const MainContainer = () => {
  const mainCategories = [
    {
      id: 1,
      name: "웹툰",
      slug: "webtoon",
      sub: [
        { id: 1, name: "추천", slug: "recommend" },
        { id: 2, name: "로맨스", slug: "romance" },
        { id: 3, name: "판타지", slug: "fantasy" },
        { id: 4, name: "액션", slug: "action" },
        { id: 5, name: "무협", slug: "murim" },
        { id: 6, name: "공포/추리", slug: "horror-mystery" },
        { id: 7, name: "드라마", slug: "drama" },
      ],
    },
    {
      id: 2,
      name: "웹소설",
      slug: "webnovel",
      sub: [
        { id: 1, name: "추천", slug: "recommend" },
        { id: 2, name: "로맨스", slug: "romance" },
        { id: 3, name: "로판", slug: "romance-fantasy" },
        { id: 4, name: "판타지", slug: "fantasy" },
      ],
    },
    {
      id: 3,
      name: "도서",
      slug: "book",
      sub: [
        { id: 1, name: "추천", slug: "recommend" },
        { id: 2, name: "기획전", slug: "special" },
        { id: 3, name: "소설", slug: "novel" },
        { id: 4, name: "인문/사회/역사", slug: "humanities-social-history" },
        { id: 5, name: "경영/경제", slug: "business-economy" },
        { id: 6, name: "에세이/시", slug: "essay-poetry" },
        { id: 7, name: "자기계발", slug: "self-development" },
      ],
    },
    {
      id: 4,
      name: "요일연재",
      slug: "daily",
      sub: [
        { id: 1, name: "월", slug: "mon" },
        { id: 2, name: "화", slug: "tue" },
        { id: 3, name: "수", slug: "wed" },
        { id: 4, name: "목", slug: "thu" },
        { id: 5, name: "금", slug: "fri" },
        { id: 6, name: "토", slug: "sat" },
        { id: 7, name: "일", slug: "sun" },
      ],
    },
  ];

  return (
    <div>
      <nav>
        <SubCategory mainCategories={mainCategories}/>
      </nav>
      <div>content</div>
    </div>
  );
};

export default MainContainer;
