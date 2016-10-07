import React from 'react';

const Heading = () => {
  let repo = 'FCC-Data_Visualization-React-Markdown_Previewer';
  return (
    <nav className="nav-main">
      <h3 className="title">Github Flavored Markdown Preview</h3>
      <h4><a target="_blank" href={`https://www.github.com/kjwatke/${repo}`}>() => Github Repo</a></h4>
    </nav>
  );
};

export default Heading;