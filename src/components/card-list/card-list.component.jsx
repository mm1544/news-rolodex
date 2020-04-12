import React, { Component, Fragment } from 'react';
// import { Link } from 'react-dom';
import axios from 'axios';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './DraggableCardsStyles';
import { arrayMove } from 'react-sortable-hoc';
import { NewsItem } from '../card/news-card.component';
import DraggableCardsList from '../draggable-cards-list/draggable-cards-list.component';
import SearchBox from '../search-box/search-box.component';
import Spinner from '../spinner/Spinner';
import './card-list.styles.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchField: '',
      filterField: '',
      loading: false,
    };
    // this.onSubmitHandler = this.onSubmitHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    const defaultVal = '';
    this.getNews(defaultVal, true);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ news }) => ({
      news: arrayMove(news, oldIndex, newIndex),
    }));
  };

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onSubmitHandler = (evt) => {
    console.log('Input string: ', this.state.filterField);
    evt.preventDefault();

    this.getNews(this.state.searchField, false);
    this.setState(() => ({ news: [], loading: true, searchField: '' }));
  };

  async getNews(inputString, isDefault) {
    let query = '';
    if (isDefault || inputString === '') {
      query = `
      https://newsapi.org/v2/top-headlines?country=gb&apiKey=8066c032a6af48cb9cbf84fda663b82f`;
    } else {
      query = `https://newsapi.org/v2/everything?q=${inputString}&apiKey=8066c032a6af48cb9cbf84fda663b82f`;
    }

    try {
      // Need to specify "Accept" header to get responce in JSON format
      let response = await axios.get(query, {
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
              publishedAt: art.publishedAt,
            },
          ],
          loading: false,
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
    const { news, searchField, filterField, loading } = this.state;
    const { theme, classes } = this.props;
    const filteredNewsArray = news.filter(
      (newsObj) =>
        newsObj.title.toLowerCase().includes(filterField.toLowerCase()) ||
        newsObj.description.toLowerCase().includes(filterField.toLowerCase())
    );
    return (
      <div className='container'>
        <SearchBox
          searchField={searchField}
          filterField={filterField}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <main className={classNames(classes.content)}>
              <DraggableCardsList
                news={filteredNewsArray}
                axis='xy'
                onSortEnd={this.onSortEnd}
                distance={20}
              />
            </main>
            {/*<div className='card-list'>
              {filteredNewsArray.map((newsItem) => (
                <NewsItem key={newsItem.id} newsItem={newsItem} />
              ))}
              </div>*/}
          </Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewsList);
