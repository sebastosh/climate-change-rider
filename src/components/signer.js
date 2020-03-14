import React from 'react';

const Signer = props => {
  return props.signers.map((val, index) => {
    let signerId = `signer-${index}`,
      titleId = `title-${index}`;
    return (
      <div className="signer" key={index}>
       
        <input
          type="text"
          name={signerId}
          data-id={index}
          id={signerId}
          onChange={props.handleChange}
          value={props.signers[index].name}
          className="name"
          placeholder="Name"
        />

        <input
          type="text"
          name={titleId}
          data-id={index}
          id={titleId}
          onChange={props.handleChange}
          value={props.signers[index].title}
          className="title"
          placeholder="Title"
        />
      </div>
    );
  });
};
export default Signer;
