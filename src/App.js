import React, {useState} from 'react';
//import PropTypes from 'prop-types'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsNavbar from './component/NewsNavbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';




const App = () => {
  const apiKey = process.env.REACT_APP_BLINK_NEWS_API;
  const countryCode = 'US';
  const pageSize = 20;
  const [progress, setProgress] = useState(0);


  return (

    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      //onLoaderFinished={() => setProgress(0)}
      />
      <NewsNavbar />
      <Routes>
        <Route index key="/" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="general" publishedAt='' />} />
        <Route exact key="business" path="/business" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="business" publishedAt='' />} />
        <Route exact key="entertainment" path="/entertainment" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="entertainment" publishedAt='' />} />
        <Route exact key="health" path="/health" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="health" publishedAt='' />} />
        <Route exact key="science" path="/science" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="science" publishedAt='' />} />
        <Route exact key="sports" path="/sports" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="sports" publishedAt='' />} />
        <Route exact key="technology" path="/technology" element={<News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} countryCode={ countryCode } category="technology" publishedAt='' />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
