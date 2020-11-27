import React, { Component } from 'react';
import images from './data/unicorn-data';
import Article from './Article.js';

export default class ArticleList extends Component {
    render() {
        return (
            <div className="images">
        {
            images.map(images =>
            <Article 
            picture={images.url}
            name={images.title}
            caption={images.description}
            keyPhrase={images.keyword}
            hornsNumber={images.horns} />)
        }  
            </div>
        )
    }
}