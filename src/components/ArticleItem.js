// components/ArticleItem.js
import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <div>
      <img src={article.field_photo_image_section} alt={article.title} />
      <h3>{article.title}</h3>
      <p>Last Update: {new Date(article.last_update * 1000).toLocaleString()}</p>
    </div>
  );
};

export default ArticleItem;
