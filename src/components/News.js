// 1d28003228544bd2a63f070a2705c42a


import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello this is a Constructor from News Component");
    this.state={
        articles:[],
        loading: true,
        page:1,

    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d28003228544bd2a63f070a2705c42a&pageSize=20";
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResultss:parsedData.totalResults})
  }
   handleNextClick=async()=>{
    console.log("next")
    if(this.state.page+1 >Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d28003228544bd2a63f070a2705c42a&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
        this.setState({
      page:this.state.page+1,
      articles: parsedData.articles
    })}
  }
   handlePrevClick=async()=>{
    console.log("previous")
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d28003228544bd2a63f070a2705c42a&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
        this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
    })
  }
  render() {
    return (
      <div className="container my-4">
          <h2>NewsMonkey - Top Headlines</h2>
          
          <div className="row">
          {this.state.articles.map((element)=>{
                return <div className="col md-4" key={element.url}>
               <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
             </div>
          })}
           
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div>
      </div>
    )
  }
}

export default News