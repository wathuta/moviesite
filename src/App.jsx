import React from 'react'
import './App.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetail/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="app">
      <Router>
          <Header/>
        <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path='/movie/:imdbID' exact element={<MovieDetails/>}/>
          <Route element={<PageNotFound/>}/>
        </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default App
