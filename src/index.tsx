import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Walt
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));