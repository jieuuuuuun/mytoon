import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { contents } from "../../data/contentData";
import ContentCard from "../main/ContentCard";

const SearchContainer = () => {
  const { type: currentType } = useParams();
  const [searchParams] = useSearchParams();
  const themeKeyword = searchParams.get("filterList");
  const resultKeyword = searchParams.get("keyword");
  const contentData = contents;

  //themeKeyword filter
  const themeKeywordContentFilter = contentData.filter((data) =>
    data.keywords.some((keyword) => themeKeyword?.includes(keyword)),
  );

  //resultKeyword filter
  const resultKeywordcontentFilter = contentData.filter((data) =>
    data.keywords.some((keyword) => resultKeyword?.includes(keyword)),
  );

  const filteredContents = currentType === "themekeyword" ? themeKeywordContentFilter : resultKeywordcontentFilter
  console.log(currentType);
  
  return (
    <div>
      <div>
        <span>
          {currentType === "themekeyword"
            ? `#${themeKeyword}`
            : `'${resultKeyword}'로 검색된 결과`}
        </span>
      </div>
      <div>
        <ContentCard
          contents={filteredContents}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
