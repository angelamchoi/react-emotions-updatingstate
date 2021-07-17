import React from 'react';

class App extends React.PureComponent {
  state = {
    emotion: 'Happy',
    history: ['Happy']
  };
  
updateEmotion(emotion) {
  this.setState(state => ({
    emotion,
    history:[...state.history, emotion]
  }))
}

// DO NOT DO THIS!!!
//   updateEmotion(emotion) {
//     this.state.history.push(emotion);
//     this.setState({emotion});
//   }


render() {
  return (
    <>
      <h1>Current Emotion: {this.state.emotion}</h1>
      <button onClick={() => this.updateEmotion("Excited")}>Excited</button>
      <button onClick={() => this.updateEmotion("Surprised")}>
        Surprised
      </button>
      <button onClick={() => this.updateEmotion("Happy")}>Happy</button>
      <button onClick={() => this.updateEmotion("Sad")}>Sad</button>
      <button onClick={() => this.updateEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => this.updateEmotion("Bored")}>Bored</button>
      <button onClick={() => this.updateEmotion("Annoyed")}>Annoyed</button>
    
    <h1> Emotional History: </h1>
    <ul>
      {this.state.history.map(emotion => <li> {emotion}</li>)}
    </ul>
    </>
  );
}
}
export default App;

// Notes
//--use spread operator instead of push
//-- Pure Component