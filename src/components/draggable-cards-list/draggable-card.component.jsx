import React, { Fragment } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import Moment from 'react-moment';
import DeleteIcon from '@material-ui/icons/Delete';
import './draggable-card.styles.css';

const DraggableCard = SortableElement(
  ({
    newsItem: { title, description, image, url, publishedAt },
    removeCard,
  }) => (
    <div className='card-container'>
      <h4>{title}</h4>
      <div className='img-container'>
        <img style={{ width: 400 }} src={image} alt='' />
      </div>
      <div>{description}</div>
      <div className='date-container publishing-date'>
        Published on: <Moment format='DD/MM/YYYY'>{publishedAt}</Moment>
      </div>
      <div className='link-container'>
        <a className='read-more' href={url} target='_blank'>
          Read more{' '}
        </a>

        <div className='delete-icon'>
          <DeleteIcon onClick={removeCard} />
        </div>
      </div>
    </div>
  )
);
export default DraggableCard;
