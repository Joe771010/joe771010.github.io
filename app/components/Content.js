import React from 'react'

import Introduction from './Introduction'
import Favorites from './Favorites'

class Content extends React.Component {
  constructor() {
    super();
  }
  render() {
    let content = this.props.content=='introduction'? <Introduction /> : this.props.content=='favorites'? <Favorites /> : <h1>Undefined</h1>;
    return (
      <div style={this.props.contentStyle}>
        {content}
      </div>
    );
  }
}

const style1 = {
  textAlign: 'left',
  fontFamily: 'Microsoft JhengHei'
}

module.exports = Content;
