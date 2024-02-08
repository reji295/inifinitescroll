// components/ArticleList.js
import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
    console.log('Article Structure:', articles && articles.length > 0 ? articles[0] : null);
  
  // Check if articles is defined before mapping over it
  if (!articles) {
    return null; // Or render a loading indicator, empty state, etc.
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.nid} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
