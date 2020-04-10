import React, { Component } from 'react';
// import { Link } from 'react-dom';
import axios from 'axios';
import uuid from 'uuid/v4';
// const uuidv4 = require('uuid/v4');
// import { NewsItem } from './NewsItem';
import { NewsItem } from '../news-card/news-card.component';
import './card-list.styles.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    const typedInput = 'sources=bbc-news';
    const typedInput2 = 'country=lt&category=business';
    const typedInput3 = 'q=johnson';
    const typedInput4 = 'country=de';
    const typedInput5 = 'country=ru';
    const typedInput6 = 'country=lt';
    const typedInput7 = 'q=eu';

    try {
      // Need to specify "Accept" header to get responce in JSON format
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?${typedInput}&apiKey=8066c032a6af48cb9cbf84fda663b82f`,
        {
          headers: { Accept: 'application/json' },
        }
      );
      console.log('Response: ', response);

      const news_array_item = response.data.articles;
      news_array_item.map((art) =>
        this.setState((state) => ({
          news: [
            ...state.news,
            {
              id: uuid(),
              title: art.title,
              description: art.description,
              url: art.url,
              image: art.urlToImage,
            },
          ],
        }))
      );

      console.log('this.state: ', this.state);
    } catch (e) {
      alert(e);
      console.log('Error #');
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='card-list'>
          {this.state.news.map((newsItem) => (
            <NewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
      </div>
    );
  }
}

/*
{this.state.news &&
          this.state.news.map(
            (news_item, index) => news_item.data.articles[index].title
          )}
*/

export default NewsList;
