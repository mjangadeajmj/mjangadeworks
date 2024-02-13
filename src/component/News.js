import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  //https://newsapi.org/v2/top-headlines?country=in&apiKey=dc6769ce54494dad83461e73eab36a37

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [publishedAt, setPublishedAt] = useState('');
  const [author, setAuthor] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  // constructor() {
  //   super();
  //   // console.log('Aaravs Blink News Constructor !!!');
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     publishedAt: '',
  //     author: '',
  //     totalResults : 0

  //   }
  // }



  const updateNewsList = async () => {
    props.setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(25);
    let data = await fetch(url);

    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })

    props.setProgress(100);
  }


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);

    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page + 1);
    // this.setState({
    //   articles : this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    // eslint-disable-next-line
  }

  useEffect(() => {
    updateNewsList()
    // eslint-disable-next-line
  }, []);

  // async componentDidMount() {
  //   this.updateNewsList();

  // }
  const capitalizeFirstLetter = (string_topass) => {
    return string_topass.charAt(0).toUpperCase() + string_topass.slice(1);
  }


  return (
    <div className='container my-3'>
      {loading && <Spinner />}
      <h2 style={{ marginTop: '90px' }}>Aarav's Blink News : Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles ? articles.map((element, index) => {
            return <div className="card col-md-4" key={element.url + index}>
              <NewsItems publishedAt={element.publishedAt} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://content.api.news/v3/images/bin/afed00a87167299790bbf7a8ce8b6627"} newsUrl={element.url} author={element.author} />
            </div>
          }
          ) : null
          }
        </div>
      </InfiniteScroll>

    </div>
  )
}


News.defaultProps = {
  country: 'IN',
  pageSize: 6,
  category: 'general',
  publishedAt: '',
  author: ''
  // eslint-disable-next-line
};


News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  publishedAt: propTypes.string,
  author: propTypes.string
  // eslint-disable-next-line
};

export default News
