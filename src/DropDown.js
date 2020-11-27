import React, { Component } from 'react';
import images from './data/unicorn-data.js';

export default class DropDown extends Component {
    render() {
        return (
            <div>

                <select OnChange={this.props.handleChange}>
                    <option value="">Show All</option>
                    {
                    images.map(images =>
                    <option value="{images.keyword}">{images.keyword}</option>)
                    }
                </select>
            </div>
        )
    }
}
