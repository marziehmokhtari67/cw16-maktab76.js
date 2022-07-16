import React, { Component } from "react";
import randomColor from "randomcolor";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  width: 100px;
  height: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColorDiv = styled.div`
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
`;
class Color extends Component {
  state = {
    colors: [],
  };

  addColor = () => {
    let color = randomColor();
    console.log(this.state.colors);
    this.setState({
      colors: [...this.state.colors, { color, id: Math.random() }],
    });
  };

  render() {
    return (
      <Wrapper>
        <Button className="addColor" onClick={this.addColor}>
          Add Color
        </Button>
        {this.state.colors.map((item) => (
          <ColorDiv key={item.id} style={{ backgroundColor: item.color }}>
            {item.color}
          </ColorDiv>
        ))}
      </Wrapper>
    );
  }
}

export default Color;
