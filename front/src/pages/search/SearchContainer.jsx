import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { contents } from "../../data/contentData";
import ContentList from "../main/ContentList";
import ContentCard from "../main/ContentCard";

const SearchContainer = () => {
  const { type: currentType } = useParams();
  const [searchParmas] = useSearchParams();
  const currentKeyword = searchParmas.get("filterList")
  const contentData = contents;
  const contentFilter = contentData.filter((data) => (
    data.keywords.some((keyword) => currentKeyword.includes(keyword))
  ))
  const contentList = contentFilter.map(({thumbnail, title, author}, i) => (
    <ContentList />
  ))
  console.log(contentFilter);
  console.log(currentType);
  console.log(currentKeyword);

  return (
    <div>
      <div>
        <span>{`#${currentKeyword}`}</span>
      </div>
      <div>
        <ContentCard contents={contentFilter} />
      </div>
    </div>
  );
};

export default SearchContainer;
