// components/InfiniteScroll.js
import React, { useEffect, useRef } from 'react';
import ArticleList from './ArticleList';
import useInfiniteScroll from './useInfiniteScroll';

const InfiniteScroll = ({ loadMore, articles, hasNextPage }) => {
  const [infiniteRef] = useInfiniteScroll({
    loading: true, // Set loading to true when making API call
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <div>
      <ArticleList articles={articles} />
      {hasNextPage && (
        <div ref={infiniteRef}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
