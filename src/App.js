import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js'
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
