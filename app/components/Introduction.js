import React from 'react'

class Introduction extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <h2 style={style1}>Hi, I am Joe</h2>
    );
  }
}

const style1 = {
  textAlign: 'left',
  fontFamily: 'Microsoft JhengHei'
}

module.exports = Introduction;
