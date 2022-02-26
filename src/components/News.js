// 1d28003228544bd2a63f070a2705c42a


import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
          This is a news Component
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
      </div>
    )
  }
}

export default News