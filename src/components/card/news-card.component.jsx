import React from 'react';
import Moment from 'react-moment';
import './news-card.styles.css';

export const NewsItem = ({
  newsItem: { title, description, image, url, publishedAt },
}) => (
  <a href={url} target='_blank' className='card-container'>
    <h4>{title}</h4>
    <div className='img-container'>
      <img style={{ width: 400 }} src={image} alt='' />
    </div>
    <div>{description}</div>
    <p className='link-date-container'>
      <a href={url} target='_blank'>
        Read more{' '}
      </a>
      <div className='date'>
        Published on: <Moment format='DD/MM/YYYY'>{publishedAt}</Moment>
      </div>
    </p>
  </a>
);
