import React from "react";
import {  useParams } from "react-router-dom";
import ContentList from "./ContentList";
import MAIN_SECTIONS from "../../data/category";

const ContentCard = ({ contents }) => {
  const { main, sub: currentSub, type: searchType } = useParams();
  const mainSections = MAIN_SECTIONS

  let contentCardFilter = [];
  if (main === "daily") {
    contentCardFilter = contents.filter((c) => c.day === currentSub);
  } else if (!main) {
    contentCardFilter = contents.filter((c) => c.main !== "ebook")
  } else {
    contentCardFilter = contents.filter(
      (c) => c.main === main && c.sub === currentSub,
    );
  }

  const mainPageContentList = !main && !searchType ? (
    mainSections.filter((section) => section.main !== "ebook")
    .map((section) =>
      section.sub.map((sub) => {
        const filterList = contents
          .filter((c) => c.main === section.main && c.sub === sub.key && c.main !== "ebook")
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);

        return (
          <ContentList
            key={`${section.main}-${sub.key}`}
            slug={`${section.main}/${sub.key}`}
            title={`추천 ${sub.label} ${section.label}`}
            contentCardFilter={filterList}
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
