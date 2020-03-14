import React, { Component } from 'react';
import Signer from './signer';

export class Signatories extends Component {
  state = {
    signers: [{ name: '', title: '' }],
    firtsName: '',
    firstTitle: ''
  };
  handleChange = e => {
    if (['name', 'title'].includes(e.target.className)) {
      let signers = [...this.state.signers];
      signers[e.target.dataset.id][
        e.target.className
      ] = e.target.value;
      this.setState({ signers }, () => console.log(this.state.signers));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addsigner = e => {
    this.setState(prevState => ({
      signers: [...prevState.signers, { name: '', title: '' }]
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    let { firstName, firstTitle, signers } = this.state;
    return (
      <>
        {' '}
        <h3>
          <strong>SIGNATORIES</strong> (artist/s, curator, gallerist,
          preparator, etc.)
        </h3>
        <form
          className="signatory"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <button onClick={this.addsigner}>Add Signatory</button>
          <div className="signer">
            <input
              type="text"
              value={firstName}
              name="firtsName"
              placeholder="Name"
            />

            <input
              type="text"
              value={firstTitle}
              name="firstTitle"
              placeholder="Title"
            />
          </div>

          <Signer signers={signers} />
        </form>
      </>
    );
  }
}

export default Signatories;
