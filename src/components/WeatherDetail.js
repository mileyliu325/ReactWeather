import React, { Component } from "react";
import styled from "styled-components";
class WeatherDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <WeatherContainer>
        <TempContainer>{this.props.temp} °C</TempContainer>
        <div>
          <h4>{this.props.condition}</h4>
        </div>
        <OtherContainer>
          <div>
            <h6>HUMIDITY</h6>
            <h6>{this.props.humidity}%</h6>
          </div>
          <div>
            <h2>|</h2>
          </div>
          <div>
            <h6>WIND</h6>
            <h6>{this.props.wind}K/m</h6>
          </div>
        </OtherContainer>
      </WeatherContainer>
    );
  }
}

export default WeatherDetail;

const WeatherContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;
const TempContainer = styled.div`
  font-size: 50px;
  display: flex;
  text-align: center;
`;
const OtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;
