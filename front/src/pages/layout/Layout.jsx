import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import S from "./style";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SubCategory from "./subCategory/SubCategory";

const Layout = () => {
  const mainCategories = [
    {
      id: 1,
      name: "추천",
      slug: "",
      sub: [],
    },
    {
      id: 2,
      name: "웹툰",
      slug: "webtoon",
      sub: [
        { id: 1, name: "로맨스", slug: "romance" },
        { id: 2, name: "판타지", slug: "fantasy" },
        { id: 3, name: "액션", slug: "action" },
        { id: 4, name: "무협", slug: "murim" },
        { id: 5, name: "공포/추리", slug: "horror-mystery" },
        { id: 6, name: "드라마", slug: "drama" },
      ],
    },
    {
      id: 3,
      name: "웹소설",
      slug: "webnovel",
      sub: [
        { id: 1, name: "로맨스", slug: "romance" },
        { id: 2, name: "로판", slug: "romance-fantasy" },
        { id: 3, name: "판타지", slug: "fantasy" },
      ],
    },
    {
      id: 4,
      name: "도서",
      slug: "ebook",
      sub: [
        { id: 1, name: "기획전", slug: "special" },
        { id: 2, name: "소설", slug: "novel" },
        { id: 3, name: "인문/사회/역사", slug: "humanities-social-history" },
        { id: 4, name: "경영/경제", slug: "business-economy" },
        { id: 5, name: "에세이/시", slug: "essay-poetry" },
        { id: 6, name: "자기계발", slug: "self-development" },
      ],
    },
    {
      id: 5,
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
  
  useEffect(() => {}, [])
  const { main } = useParams();
  console.log(main);
  
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  const handleCategoryOnClick = (name, subList) => {
    console.log("headersub",subList)
    setActiveCategory(name);

    setActiveSubCategory(subList?.[0]?.name || "");
  };

  const handleSubCategoryOnClick = (name) => {
    console.log(name);
    setActiveSubCategory(name);
  };

  return (
    <S.PageWrapper>
      <S.HaderWrapper>
        <div>
          <Header
            mainCategories={mainCategories}
            isActive={activeCategory}
            handleCategoryOnClick={handleCategoryOnClick}
          />
        </div>
      </S.HaderWrapper>
      <S.MainWrapper>
        {main && (<SubCategory
          mainCategories={mainCategories}
          isActive={activeSubCategory}
          handleSubCategoryOnClick={handleSubCategoryOnClick}
        />)}
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </S.PageWrapper>
  );
};

export default Layout;
