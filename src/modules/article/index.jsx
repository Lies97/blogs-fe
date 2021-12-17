import React, { useEffect } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle } from '../../redux/actions/article';
import { Image } from 'semantic-ui-react';

const Article = () => {
  const { url } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articleReducer.article);

  useEffect(() => {
    dispatch(fetchArticle(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="article container">
      {article && (
        <div className="my-4">
          <h3>{article.title}</h3>
          <Image src={article.image} wrapped ui={false} />
          <div className="article-wrapper">
            {article.contentSections &&
              article.contentSections.length > 0 &&
              article.contentSections.map((content) => {
                return <p className="mt-2">{content}</p>;
              })}
            {article.contentSections && (
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary text-right"
                  onClick={() => {
                    window.open(article.url, "_blank");
                  }}
                >
                  For more information
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
