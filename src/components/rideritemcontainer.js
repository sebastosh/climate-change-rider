import React, { Component } from 'react'
import RiderSingleItem from './ridersingleitem'


export default class RiderItemsContainer extends Component {

componentDidMount() {
   
}

    render() {
 



        return (
            <div className="rider-items" > 
                <ul>
                {this.props.items.map(item => <RiderSingleItem item={item} />)}
                </ul>
            </div>
        )
    }
}
