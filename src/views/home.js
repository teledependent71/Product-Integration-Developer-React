import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Integration Developer</title>
        <meta property="og:title" content="Product Integration Developer" />
      </Helmet>
    </div>
  )
}

export default Home
