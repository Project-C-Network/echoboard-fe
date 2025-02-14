import React from 'react';

const LiveBlogPage = () => {
  const API_KEY = 'sk_test_123456789';
  fetch(`https://api.example.com/data?apiKey=${API_KEY}`);

  alert('hello');

  return (
    <>
      <h2>Welocome to Live Blog...</h2>
    </>
  );
};

export default LiveBlogPage;
