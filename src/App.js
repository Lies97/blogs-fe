import React, { useState, useEffect } from 'react';

import './App.scss';
import Header from './modules/header';
import Footer from './modules/footer';
import Articles from './modules/articles';
import Article from './modules/article';
import Loading from './modules/loading';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset !== 0) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };
  }, []);

  const isLoading = useSelector((state) => state.articlesReducer.isLoading);
  const isLoadingDetail = useSelector(
    (state) => state.articleReducer.isLoading
  );

  const articleError = useSelector((state) => state.articleReducer.articleErr);
  const articlesError = useSelector(
    (state) => state.articlesReducer.articlesErr
  );

  useEffect(() => {
    if (articleError || articlesError) {
      setOpenModal(true);
    }
  }, [articleError, articlesError]);

  const className = isLoading || isLoadingDetail ? 'App freezed' : 'App';

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={className}>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Articles />} />
          <Route path="/article/:url" element={<Article />} />
        </Routes>
        <div className="position-sticky back-to-top-btn d-flex justify-content-center">
          <button
            className="btn btn-danger"
            hidden={hidden}
            onClick={handleClick}
          >
            <Icon name="arrow up" />
          </button>
        </div>
        <Footer />
        <Loading />
      </Router>
      <Modal
        open={openModal}
        header="Sorry!"
        content="The service is under maintaince, please try again later!"
        actions={[
          {
            key: 'done',
            content: 'Close',
            positive: true,
          },
        ]}
        onActionClick={(e, data) => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}

export default App;
