function PollOption({ label, count, onVote }) {
    const handleClick = (event) => {
      event.stopPropagation();  // Prevent the event from bubbling
      onVote();
    };
  
    return (
      <div className="poll-option">
        <h3>{label}</h3>
        <p>Votes: {count}</p>
        <button onClick={handleClick}>Vote</button>
      </div>
    );
  }
  