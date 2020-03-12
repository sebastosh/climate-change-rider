import React, { Component } from 'react'
import RiderItems from './rideritemcontainer.js'

export default class Rider extends Component {

    render() {

        return (
            <section>
                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>
                <RiderItems items={this.props.items} title={this.props.title} />
                {this.props.title === 'EXHIBITION' ? <div>* with the exception of salvaged materials</div> : null}
            </section>
        )
    }
}
