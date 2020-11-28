import React, { Component } from 'react';
import images from './data/unicorn-data.js';

export default class DropDown extends Component {
    render() {
        console.log(onchange)
        return (
            <div>
                <select onChange={this.props.handleChange}>
                    <option value="">Show All</option>
                    {
                        images.map(images =>
                            <option value={images.keyword}>{images.keyword}</option>)
                    }
                </select>
            </div>
        )
    }
}
