import React, { Component } from 'react';

export class Exhibition extends Component {
  render() {
    return (
      <div>
        <h3>
          <strong>EXHIBITION</strong> (title, place, dates)
        </h3>
        <div className="exhibition">

        <label>Exhibition Title <input type="text" name="title"  /></label>
        <label>Institution Name <input type="text" name="place"  /></label>

            <label>Start Date<input type="date" name="startdate" /></label>
            <label>End Date<input type="date" name="enddate" /></label> 
             

        </div>
      </div>
    );
  }
}

export default Exhibition;
