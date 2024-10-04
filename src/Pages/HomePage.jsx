// src/Pages/HomePage.jsx
import React from 'react';
import Tutorials from '../Components/Tutorials';
import Articles from '../Components/Articles';
import HeadImage from '../Components/HeadImage';
import TutorialsHeading from '../Components/TutorialsHeading';
import ArticlesHeading from '../Components/ArticlesHeading';
import NewsletterSignup
 from '../Components/NewsletterSignup';
const HomePage = () => {
  return (
    <div>
      <HeadImage />
      <TutorialsHeading />
      <Tutorials />
      <ArticlesHeading />
      <Articles />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;
