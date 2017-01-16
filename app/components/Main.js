import React from 'react'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Content from './Content';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'introduction'
    }
    this.menuClick1 = this.menuClick1.bind(this);
    this.menuClick2 = this.menuClick2.bind(this);
  }
  render() {
    return (
      <div>
        <Drawer open={true} width={200} fontFamily='Microsoft JhengHei'>
          <img src='app/images/mura.png' />
          <MenuItem onClick={this.menuClick1}>自我介紹</MenuItem>
          <MenuItem onClick={this.menuClick2}>我的最愛</MenuItem>
        </Drawer>
        <Content contentStyle={contentStyle} content={this.state.content}/>
      </div>
    )
  }
  menuClick1() {
    this.setState({
      content: 'introduction'
    })
  }
  menuClick2() {
    this.setState({
      content: 'favorites'
    })
  }
}

const contentStyle = {
    paddingLeft: 200
}

module.exports = Main;
