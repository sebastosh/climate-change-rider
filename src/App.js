import React from 'react';
import './App.css';
import riderData from './riderData';
import Rider from './components/rider';
import Exhibition from './components/exhibition'
import Signatories from './components/signatories'

function App() {
  return (
    <div>
      <h1>
        <strong>MATTER MATTERS:</strong> RIDER FOR EXHIBITION AGREEMENTS
      </h1>
      <div>
        This is a set of mores for those of us who reckon with art and want
        coherence between our concern - regarding climate disruption and the
        megaflop of plastics–reliance and how we live among other sentient
        beings whose lives we do not think are less worthy of attention than our
        own - and how we actually go about things. They are mores, not lesses;
        while they are limitations, they are not restrictive. In fact, we
        consider them beautiful — a hedonic ethos. We aim to commit to them in a
        spirit of friendly disagreeableness: a friendly disagreeableness with
        the general customs and assumptions, within the mainstream of cultural
        production, of what is necessary to make/meet art today.
      </div>
      <div className="rider">
        {riderData.map(rider => {
          return (
            <Rider
              key={rider.id}
              title={rider.title}
              active={rider.active}
              description={rider.description}
              items={rider.items}
            />
          );
        })}
      </div>
      <h2>NOTES</h2>
        <div>
          All the material Nos are for the purchase of virgin materials from a
          for-profit business. Yes to non-primary use of these materials, e.g.
          reuse of exisiting crates, materials stock, purchasing from
          salvage/reuse centers, etc.
        </div>
      <Exhibition />
      <Signatories />
    </div>
  );
}

export default App;
