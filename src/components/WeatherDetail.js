import React, { Component } from "react";
import styled from "styled-components";
// import "../bootstrap.css";

class WeatherDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <WeatherContainer>
        <TempContainer>
           {this.props.temp} °C
        </TempContainer>
        <SumContainer>
          <h4>{this.props.condition}</h4>
        </SumContainer>
        <OtherContainer>
          <HumidityContainer>
            <h6>HUMIDITY</h6>
            <h6>{this.props.humidity}%</h6>
          </HumidityContainer>
         <Seperater></Seperater>
          <WindContainer>
            <h6>WIND</h6>
            <h6>{this.props.wind}K/m</h6>
          </WindContainer>
        </OtherContainer>
     
      </WeatherContainer>
    
    );
  }
}

export default WeatherDetail;

const WeatherContainer = styled.div`

  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;    
  padding:5%;  
`;

const TempContainer = styled.div`

  font-size: 50px;
  flex:5;
  display:flex;
  text-align: center; 

`;

const SumContainer = styled.div`
  color: #fff;
  flex:2;
  display:flex;
`;
const OtherContainer = styled.div`

  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content:flex-end;
  flex:2;
  align-items:center;
  width:60%;
`;
const HumidityContainer = styled.div`
  color: #fff;
  flex:5;
  margin:10px;
`;

const WindContainer = styled.div`
  margin-left:20%;
  color: #fff;
  flex:5;
`;
const Seperater = styled.div`
  height: 60%;
  width:2px;
  background-color:white;
`;
