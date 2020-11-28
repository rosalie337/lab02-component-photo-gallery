import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div className="horned-images">
                <img src={this.props.picture} alt={this.props.name} />
                <div>{this.props.caption}</div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
