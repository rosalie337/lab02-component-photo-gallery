import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div className="horned-images">
                <img className="horn-creature" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="creature" />
                <div>{this.props.description}</div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
