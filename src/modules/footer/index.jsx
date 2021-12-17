import React from 'react';
import './styles.scss';
import { Icon } from 'semantic-ui-react';

const Footer = () => {
  const url = 'https://www.theguardian.com/uk';
  return (
    <div className="bg-black footer position-fixed">
      <div className="container d-flex align-items-center footer-wrapper justify-content-between">
        <h4 className="mb-0">Author: Nguyen Ong</h4>
        <p className="mb-0">
          Content Scarped:{' '}
          <strong>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </strong>
        </p>
        <div className="contact-me d-flex align-items-center">
          <p className="mb-0">Contact me: </p>
          <a
            href="https://www.linkedin.com/in/gianguyenong"
            target="_blank"
            rel="noreferrer"
            className="ms-2 ml-color-light"
          >
            <Icon size="big" name="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/nguyen.ong2211"
            target="_blank"
            rel="noreferrer"
            className="color-light"
          >
            <Icon size="big" name="facebook" />
          </a>
          <a
            href="https://www.instagram.com/lies97"
            target="_blank"
            rel="noreferrer"
            className="color-light"
          >
            <Icon size="big" name="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
