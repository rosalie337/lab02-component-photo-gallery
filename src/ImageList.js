import React, { Component } from 'react';
import images from './data/unicorn-data.js';
import Article from './Article.js';

export default class ImageList extends Component {
    render() {

        // const filteredCreatures = this.props.images.filter((image) => {
            
        //     if (!this.props.filter) return true;
  
        //     if (images.size === this.props.filter) return true;
  
        //     return false
        //   });

        return (
            <div className="images">
            {
            
            // filteredCreature should be passed here
            images.map(images =>
            <Article
            picture={images.url}
            name={images.title}
            caption={images.description}
            hornsNumber={images.horns} />)
            }  
            </div>
        )
    }
}