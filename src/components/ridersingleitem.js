import React, { Component } from 'react';

export default class RiderSingleItem extends Component {
  state = {
    checked: true
  };

  onChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <>
        <form>
          <label>
            <input
              name="checked"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.onChange}
            />
          </label>
          <span className={this.state.checked ? null : 'not-checked'}>
            {this.props.item}
          </span>
        </form>
      </>
    );
  }
}
