import React from 'react';
import './news-card.styles.css';

export const NewsItem = ({ newsItem }) => (
  <div className='card-container'>
    <h4>{newsItem.title}</h4>
    <div>{newsItem.description}</div>
    <div>
      <img style={{ width: 400 }} src={newsItem.image} alt='' />
    </div>
    <div>
      <a href={newsItem.url}>Read more</a>
    </div>
  </div>
);
