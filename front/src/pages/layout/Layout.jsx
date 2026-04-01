import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import S from "./style";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SubCategory from "./subCategory/SubCategory";
import { get } from "react-hook-form";

const Layout = () => {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    const getMainCategory = async () => {
    const response = await fetch("http://localhost:10000/category");
    const datas = await response.json();
    console.log(datas);
    setMainCategories(datas.data)
  };
  getMainCategory();
  },[])

  const { main: currentMain } = useParams();
  const currentPage = useLocation().pathname;

  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  const handleCategoryOnClick = (name, subList) => {
    setActiveCategory(name);
    setActiveSubCategory(subList?.[0]?.name);
  };

  const handleSubCategoryOnClick = (name) => {
    setActiveSubCategory(name);
  };

  return (
    <S.PageWrapper>
      <S.HaderWrapper>
        <S.HeaderInner
          $justifyContent={
            currentPage === "/login" || currentPage === "/join"
              ? "center"
              : "space-between"
          }
        >
          <Header
            mainCategories={mainCategories}
            handleCategoryOnClick={handleCategoryOnClick}
          />
        </S.HeaderInner>
      </S.HaderWrapper>
      <S.MainWrapper>
        {currentMain && (
          <SubCategory
            mainCategories={mainCategories}
            handleSubCategoryOnClick={handleSubCategoryOnClick}
          />
        )}
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </S.PageWrapper>
  );
};

export default Layout;
