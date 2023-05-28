import React, { Component } from 'react';
// import Feedback from './Feedback';
// import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good / total) * 100);

    return (
      <>
        {/* <Feedback></Feedback>
        <Statistics></Statistics> */}
      </>
    );
  }
}

export default App;
