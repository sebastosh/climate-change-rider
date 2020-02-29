import React from 'react';
import './App.css';
import riderData from '../riderData';
import Rider from '../components/rider';

function App() {
  return (
    <div>
      <header className="App-header">Climate Change Rider</header>
      <div className="App">
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
    </div>
  );
}

export default App;
