
//import React from 'react';
//import ReactDOM from 'react-dom';
//import bootstrap from 'bootstrap';
//import marked from 'marked';
import Heading from './components/Heading';
import Footer from './components/Footer';
import './sass/_style.scss';

const showInitialMD = "one line snippet: `var block`\n\n"  +
  "blockquote:\n\n" + 
  "> Blockquote: 'Four Score and Seven Years Ago'" +
  "some headings: \n\n" + 
  "# h1 heading\n\n" +
  "### h3 heading\n\n" +
  "#### h4 heading\n\n" +
  "heading using ======\n" +
  "======\n\n" +
  "*[Made by Kevin Watke](https://www.freecodecamp.com/kjwatke)*\n\n" +
  "code block: \n" +
  "```\n" +
  "var name = 'so and so'\n" +
  "if (name === 'so') {\n" +
  "\tconsole.log(true)\n" +
  "}" +
  "```";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      txt: String(showInitialMD)
    };
    this.getMarkdownText = this.getMarkdownText.bind(this);
    this.update = this.update.bind(this);
  }
  getMarkdownText = (val) => {
    let rawMarkup = marked(val, {sanitize: true, gfm: true});
    return { __html: rawMarkup };
  }
  update = (e) => {
    this.setState({
      txt: String(e.target.value)
    })
  }
  render() {
    return (
        <div className="app-container">
          <Heading />
          <textarea placeholder="place md here" type="text" className="md-input" onChange={this.update} />
          <div className="md-input-title">MARKDOWN</div>
          <div className="md-output-title">PREVIEW</div>
          <div className="md-output" dangerouslySetInnerHTML={this.getMarkdownText(this.state.txt)}></div>  
          <Footer></Footer>        
        </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
