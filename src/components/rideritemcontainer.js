import React, { Component } from 'react'
import RiderSingleItem from './ridersingleitem'


export default class RiderItemsContainer extends Component {

    render() {
 
        return (
            <div className="rider-items" > 
                <ul>
                    {this.props.title === 'OPENING'? null : <li>Therefore,</li>}
                {this.props.items.map((item, index) => <RiderSingleItem key={index} item={item} />)}
                </ul>
            </div>
        )
    }
}
