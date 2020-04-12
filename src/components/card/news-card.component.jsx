import React from 'react';
import './news-card.styles.css';

export const NewsItem = ({
  newsItem: { title, description, image, url, publishedAt },
}) => (
  <div className='card-container'>
    <h4>{title}</h4>
    <div>{description}</div>
    <div className='img-container'>
      <img style={{ width: 400 }} src={image} alt='' />
      <div className='link-date-container'>
        <a href={url}>Read more </a>
        <div className='date'>Published: {publishedAt}</div>
      </div>
    </div>
  </div>
);
