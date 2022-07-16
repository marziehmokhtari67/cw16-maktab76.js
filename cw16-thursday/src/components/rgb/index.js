import React, { Component } from "react";
import { ColorDiv, Text, Wrapper, Button,Content } from "./styles";

class Rgb extends Component {
  state = { r: 20, g: 20, b: 20};
  
  indecrement = (typeRgb,signRgb) => {

    this.setState({
      r:
        typeRgb === "r"
          ? this.state.r <=255 && this.state.r>=0
            ? eval(`${this.state.r} ${signRgb} 1`) 
            : this.state.r
          : this.state.r,
      g:  typeRgb === "g"
      ? this.state.g <=255 && this.state.g>=0
        ? eval(`${this.state.g} ${signRgb} 1`)
        : this.state.g
      : this.state.g,
      b:  typeRgb === "b"
          ? this.state.b <=255 && this.state.b>=0
            ? eval(`${this.state.b} ${signRgb} 1`)
            : this.state.b
          : this.state.b,
    });
  };


  render() {
   
    return (
      <Wrapper>
        <div>
          <ColorDiv>
            <Text color="red">RED</Text>
            <Button onClick={() => this.indecrement("r","+")}>+</Button>
            <Button onClick={() => this.indecrement("r","-")}>-</Button>
          </ColorDiv>
          <ColorDiv>
            <Text color="green">GREEN</Text>
                   
                   <Button onClick={() => this.indecrement("g","+")}>+</Button>
                       <Button onClick={() => 
                       this.indecrement("g","-")}>-</Button>
          </ColorDiv>
          <ColorDiv>
            <Text color="blue">BLUE</Text>
            <Button onClick={() => this.indecrement("b","+")}>+</Button>
            <Button onClick={() => this.indecrement("b","-")}>-</Button>
          </ColorDiv>
          
        </div>
        <Content color={(this.state.r<=112 && this.state.g<=112 && this.state.b<=112) ? '#fff' :'#000'}
          style={{
            backgroundColor: `rgb(${this.state.r}, ${this.state.g},${this.state.b})`,
          }}
        >
          {`RGB (${this.state.r},${this.state.g},${this.state.b})`}
        </Content>
      </Wrapper>
    );
  }
}

export default Rgb;
