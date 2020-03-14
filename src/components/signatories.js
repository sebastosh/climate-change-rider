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
      signers[e.target.dataset.id][e.target.className] = e.target.value;
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
        <h3>
          <strong>SIGNATORIES</strong> (artist/s, curator, gallerist,
          preparator, etc.)
        </h3>
        <div>You are invited to co-half/half-sign this document. The more signatories the easier it becomes to follow the guidelines and the clearer our collective conscience becomes. It can be signed in perpetuity or for a particular exhibition. (If working with an artist/gallery/institution that has not signed they can be temporary co-signatories for the specific exhibition in question. To formalise the commitment to lessen our un-helpful effects is helpful in its clarifying explicitness.)</div>
        <form
          className="signatory"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <button onClick={this.addsigner}>Add Signatory</button>
          <div className="signatories">
            <div className="signer">
              <input
                type="text"
                value={firstName}
                onChange={this.handleChange}
                name="firtsName"
                placeholder="Name"
              />

              <input
                type="text"
                value={firstTitle}
                onChange={this.handleChange}
                name="firstTitle"
                placeholder="Title"
              />
            </div>
            <Signer signers={signers} handleChange={this.handleChange} />
          </div>
        </form>
      </>
    );
  }
}

export default Signatories;
