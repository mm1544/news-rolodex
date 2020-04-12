import React from 'react';
import DraggableCard from './draggable-card.component';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableCardsList = SortableContainer(({ news, removeCard }) => {
  return (
    // for "react-sortable-hoc" every element needs to have an index
    <div style={{ height: '100%' }} className='card-list'>
      {news.map((newsItem, i) => (
        <DraggableCard
          index={i}
          key={newsItem.id}
          newsItem={newsItem}
          removeCard={() => removeCard(newsItem.id)}
        />
      ))}
    </div>
  );
});
export default DraggableCardsList;
