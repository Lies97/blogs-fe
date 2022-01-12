import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import './FirstArticle.scss';

const FirstArticle = ({ article }) => {
  const urlToRedirect = article ? article.url.split('/').pop() : '';

  return article ? (
    <div className="main-article container d-flex my-4 align-items-center px-0">
      <div className="left">
        <Link to={`/article/${urlToRedirect}`}>
          <Image src={article.thumbnail} size="big" rounded />
        </Link>
      </div>
      <div className="right ms-4">
        <h3 className="title">{article.title}</h3>
        <p className="description">{article.description}</p>
        <Link to={`/article/${urlToRedirect}`}>
          <button className="btn btn-success">Read more</button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FirstArticle;
