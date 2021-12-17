import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../redux/actions/articles';
import Card from './components/card';
import InfiniteScroll from 'react-infinite-scroll-component';

const Articles = () => {
  const articles = useSelector((state) => state.articlesReducer.articles);
  const url = 'https://www.theguardian.com/uk';

  const dispatch = useDispatch();

  const [totalItems, setTotalItems] = useState(20);
  const [cloneArray, setCloneArray] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  const [index, setIndex] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    } else {
      setFirstArray(articles.slice(0, 21));
      setCloneArray(articles.slice(0, 20));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (articles && articles.length > 0) {
      setFirstArray(articles.slice(0, 21));
      setCloneArray(articles.slice(0, 20));
    }
  }, [articles]);

  const scrollIntoView = () => {
    setTimeout(() => {
      let count = 0;
      setTotalItems(totalItems + 20);
      setCloneArray(firstArray.concat(articles.slice(20, index + 20 + count)));
      setIndex(index + 20);
      if (articles.length - cloneArray.length < 20) {
        setHasMore(false);
      }
      count += 20;
    }, 1500);
  };

  const className = hasMore
    ? 'd-flex justify-content-between w-100 flex-wrap scroll-control'
    : 'd-flex justify-content-between w-100 flex-wrap scroll-control add-padding';

  return (
    <div className="articles container">
      <h2 className="mt-3">
        This App crawls Contents from{' '}
        <strong>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </strong>
      </h2>
      <InfiniteScroll
        dataLength={totalItems}
        next={scrollIntoView}
        className={className}
        hasMore={true}
      >
        {cloneArray.length > 0 &&
          cloneArray.map((article, i) => {
            return <Card article={article} key={i} />;
          })}
      </InfiniteScroll>
    </div>
  );
};

export default Articles;
