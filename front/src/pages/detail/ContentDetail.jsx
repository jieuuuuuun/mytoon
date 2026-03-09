import React from 'react';
import contentData from "../../contentData/contentData";
import { useParams } from 'react-router-dom';

const ContentDetail = () => {
  const {id: currentId} = useParams()
  console.log(currentId);
  
  const datas = contentData;
  const selectedData = datas.find((data) => data.id === Number(currentId))
  console.log("selectedData",selectedData);
  
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContentDetail;