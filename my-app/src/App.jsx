import React, { useState } from 'react';
import PollOption from './PollOption';

function App() {

  const [pollOptions, setPollOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 }
  ]);

  const handleVote = (index) => {
    setPollOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index].count += 1;
      return newOptions;
    });
  };
  

  const getLeader = () => {
    const winner = pollOptions.reduce((prev, current) => (prev.count > current.count ? prev : current));
    return `${winner.option} with ${winner.count} votes`;
  };

  return (
    <div className="App">
      <h1>Pet Voting</h1>
      <div>
        {pollOptions.map((poll, index) => (
          <PollOption
            key={index}
            label={poll.option}
            count={poll.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <div>
        <h2>Current Leader: {getLeader()}</h2>
      </div>
    </div>
  );
}

export default App;
