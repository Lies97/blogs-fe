import React from 'react';
import './card.scss';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

const CardItem = (item) => {
  const { article = {} } = item;
  const urlToRedirect = article.url.split('/').pop();

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/article/${urlToRedirect}`);
  };

  return (
    <Card link className="mb-2" onClick={() => redirect()}>
      <Image src={article.thumbnail} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{article.title}</Card.Header>
        <Card.Description className="text-truncate">
          {article.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="d-flex justify-content-end">
        <Link to={`/article/${urlToRedirect}`}>
          <button className="btn btn-success">
            <span>Go To Post</span> <Icon name="arrow right" />
          </button>
        </Link>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
