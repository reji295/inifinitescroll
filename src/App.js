// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from './components/InfiniteScroll';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/app-api/v1/photo-gallery-feed-page/page/${page}`);
      console.log('API Response:', response.data); // Log the response
      // Rest of the code...
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <InfiniteScroll loadMore={fetchData} articles={articles} hasNextPage={hasNextPage} />
    </div>
  );
};

export default App;
