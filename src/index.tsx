import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor () {
    super();
    this.update = this.update.bind(this);
  }
  update = () => {
    console.log('updated');
  }
  render() {
    let string: string = 'Hello Newman';
    return (
      <div onClick={this.update}>
        {string}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));