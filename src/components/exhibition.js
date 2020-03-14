import React, { Component } from 'react';

export class Exhibition extends Component {
  state = {
    title: '',
    place: '',
    startdate: '',
    enddate: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h3>
          <strong>EXHIBITION</strong> (title, place, dates)
        </h3>
        <div className="exhibition">
          <div className="exhibition-field">
            <label>Exhibition Title</label>
            <input type="text" onChange={this.handleChange} name="title" />
          </div>

          <div className="exhibition-field">
            <label>Institution Name</label>
            <input type="text" onChange={this.handleChange} name="place" />
          </div>

          <div className="dates">
            <div className="exhibition-field">
              <label>Start Date</label>
              <input type="date" onChange={this.handleChange} name="startdate" />
            </div>
            <div className="exhibition-field">
              <label>End Date</label>
              <input type="date" onChange={this.handleChange} value={this.state.startdate ? this.state.startdate : null }name="enddate" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exhibition;
