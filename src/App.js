import { useState } from 'react';
import SearchPhotosComponent from './components/ImageComponent';
import SearchFormBytext from './components/SearchForm';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [keyWord, setKeyWord] = useState('Example')

  const searchKeyword = (keyword) => {
    setKeyWord(keyword)
  }
  return (
    <BrowserRouter> 
      <Routes>
        <Route path={`/`} element = {<><SearchFormBytext getKeyword={searchKeyword} /> <SearchPhotosComponent searchText={keyWord} /></>}></Route>
        <Route path="/search/:keyword" element = {<><SearchFormBytext getKeyword={searchKeyword} /> <SearchPhotosComponent searchText={keyWord} /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
