import React, { Component } from 'react'
import { getRandomColor, getReducedColor, getRandomColorTree } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)

    const [color1, color2, color3] = getRandomColorTree(3)
    this.state = {
      color: color1,
      childColor: color2,
      grandChildColor: color3
    }
  }

  handleClick = () => {
    const [color1, color2, color3] = getRandomColorTree(3);
    this.setState({
      color: color1,
      childColor: color2,
      grandChildColor: color3
    })
  }

  handleChildClick = (event) => {
    event.stopPropagation();
    const [color1, color2] = getRandomColorTree(2);
    this.setState({
      childColor: color1,
      grandChildColor: color2
    })
  }

  handleGrandChildClick = (event) => {
    event.stopPropagation();
    const [color1] = getRandomColorTree(1);
    this.setState({
      grandChildColor: color1
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} onClick={this.handleChildClick} onChildClick={this.handleGrandChildClick} />
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} onClick={this.handleChildClick} onChildClick={this.handleGrandChildClick} />
      </div>
    )
  }
}
