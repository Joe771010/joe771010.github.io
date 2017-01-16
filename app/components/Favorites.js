import React from 'react'

class Favorites extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <h2 style={style1}>張羽祈</h2>
    );
  }
}

const style1 = {
  textAlign: 'left',
  fontFamily: 'Microsoft JhengHei'
}

module.exports = Favorites;
