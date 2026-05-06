import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import S from "./style";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SubCategory from "./subCategory/SubCategory";

const Layout = () => {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    const getMainCategory = async () => {
      const [categoryRes, dayRes] = await Promise.all([
        fetch("http://localhost:10000/category"),
        fetch("http://localhost:10000/day"),
      ]);
      const categoryData = await categoryRes.json();
      const dayData = await dayRes.json();
      
      const daycategory = {
        id: 4,
        name: "요일연재",
        slug: "daily",
        subCategories: dayData.data.map((day) => ({
          id: day.id,
          name: day.dayOfWeek,
          slug: day.slug,
        })),
      };
      
      setMainCategories([...categoryData.data, daycategory]);
    };
    getMainCategory();
  }, []);
  
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
        {currentMain && mainCategories.length > 0 && (
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
