import React, { Component } from 'react';
// import { Link } from 'react-dom';
import axios from 'axios';
import uuid from 'uuid/v4';
// const uuidv4 = require('uuid/v4');
// import { NewsItem } from './NewsItem';
import { NewsItem } from '../card/news-card.component';
import './card-list.styles.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchField: '',
      filterField: '',
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
    const typedInput8 = '';

    const query1 =
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=8066c032a6af48cb9cbf84fda663b82f';
    const query3 =
      'https://newsapi.org/v2/everything?q=france&apiKey=8066c032a6af48cb9cbf84fda663b82f';
    const query2 = `https://newsapi.org/v2/top-headlines?${typedInput8}&apiKey=8066c032a6af48cb9cbf84fda663b82f`;

    try {
      // Need to specify "Accept" header to get responce in JSON format
      let response = await axios.get(query3, {
        headers: { Accept: 'application/json' },
      });
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
    const { news, searchField, filterField } = this.state;
    const filteredNewsArray = news.filter(
      (newsObj) =>
        newsObj.title.toLowerCase().includes(filterField.toLowerCase()) ||
        newsObj.description.toLowerCase().includes(filterField.toLowerCase())
    );
    return (
      <div className='container'>
        <div className='search-box'>
          <input
            onChange={(e) => this.setState({ searchField: e.target.value })}
            type='search'
            placeholder='Search for the news...'
          />
          <div>
            <input
              onChange={(e) => this.setState({ filterField: e.target.value })}
              type='search'
              placeholder='Filter result...'
            />
          </div>
        </div>
        <div className='card-list'>
          {filteredNewsArray.map((newsItem) => (
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
