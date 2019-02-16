import React, { Component } from 'react';
import styled from "styled-components";
import {getDayOfWeek} from "../utilities";

class WeatherWeek extends Component {

    constructor(props){
        super();
       console.log("props:"+props.date);
    }
  render() {
    const day = getDayOfWeek(this.props.date);

    return (
     
           <WeekContainer>
                      <div> <h3 >{day}</h3></div>
                      <div><img src={this.props.icon} alt="" /></div>
                     <div> <h5 >{this.props.temp} °C </h5></div>
                      <div>  <p >
                       {this.props.sum}
                      </p>
                      </div>
          </WeekContainer>
    );
  }
}

export default WeatherWeek;

const WeekContainer = styled.div`

    display:flex;
    width:90%;
    height:200px;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;

`;
