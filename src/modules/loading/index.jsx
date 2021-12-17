import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Loading = () => {

  const isLoading = useSelector(state => state.articlesReducer.isLoading);
  const isLoadingDetail = useSelector(state => state.articleReducer.isLoading);

  const className = isLoading || isLoadingDetail ? 'position-absolute loading' : 'position-absolute loading d-none';
  return (
    <div className={className}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
