import React, { Component } from "react";
// import "../bootstrap.css";
import styled from "styled-components";
import axios from "axios";
import WeatherDetail from "../components/WeatherDetail";
import WeatherWeek from "../components/WeatherWeek";
import WeatherTwitter from "../components/WeatherTwitter";
import { Button, Container, Row, Col } from "react-bootstrap";
const HOST = "https://api.apixu.com/v1/forecast.json";
const KEY = "f2dbda67de814bf8bf895350192301";
const containerStyle = {
  border: "solid 10px darkblue",
  background: "darkblue"
};
class WeatherPage extends Component {
  constructor() {
    super();
    this.state = { data: null, city: "Sydney", isLoading: false };
  }

  fetchData = async () => {
    console.log("fetchdata....");
    axios
      .get(HOST + "?key=" + KEY + "&q=" + this.state.city + "&days=5")
      .then(res => {
        const data = res.data;

        this.setState({ data: data });
      })
      .catch(err => {
        console.warn(err);
      });
  };

  getData = value => {};
  componentDidMount() {
    this.fetchData();
  }

  handleChange = event => {
    //important！setState is async,must use call back
    this.setState({ city: event.target.value }, () => {
      this.fetchData();
    });
  };

  render() {
    const data = this.state.data;
    console.log("rendering" + data);
    return (
      <BackgroundContainer>
        <div style={{ height: "5%" }} />
        {/* <BoardContainer> */}
        <Container style={containerStyle}>
          <TopContainer>
            <Row>
              <Col xs={12} md={8}>
                {data && data.current && (
                  <WeatherDetail
                    temp={data.current.temp_c}
                    humidity={data.current.humidity}
                    wind={data.current.wind_mph}
                    condition={data.current.condition.text}
                  />
                )}
              </Col>
              <Col xs={6} md={4}>
                <CityContainer className="form-group">
                  <div>
                    {" "}
                    <h1> {this.state.city}</h1>
                  </div>
                  <div>
                    <select
                      className="form-control"
                      id="city"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    >
                      <option value="Sydney">Sydney</option>
                      <option value="London">London</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Pairs">Paris</option>
                    </select>
                  </div>
                </CityContainer>
              </Col>
            </Row>
          </TopContainer>
          <BottomContainer>
            <Row>
              <Col xs={6} md={4}>
                <WeatherTwitter city={this.state.city} />
              </Col>
            
                <Col xs={12} md={8}>
                <WeekContainer>
                  {data &&
                    data.forecast.forecastday.map((day, id) => (
                      <WeatherWeek
                        key={id}
                        date={day.date}
                        icon={day.day.condition.icon}
                        temp={day.day.avgtemp_c}
                        sum={day.day.condition.text}
                      />
                    ))}
                     </WeekContainer>
                </Col>
             
            </Row>
          </BottomContainer>
        </Container>
        {/* </BoardContainer> */}
      </BackgroundContainer>
    );
  }
}

export default WeatherPage;

const BackgroundContainer = styled.div`
  background-image: linear-gradient(66deg, deeppink, purple, blue);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardContainer = styled.div`
  height: 90%;
  width: 90%;

  top: 0px;
  bottom: 0px;
  background-color: darkblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TopContainer = styled.div`
  flex: 1;
  color: white;
  top: 0px;
`;

const CityContainer = styled.div`
  width: 90%;
  height: 100%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-decoration: underline;
`;

const BottomContainer = styled.div`
  /* height: 50%;
  width: 100%;
  margin-top: -5%; */
  background-color: #fff;
  border-radius: 10px;
  /* display: flex;
  flex-direction: row;
  flex: 1;
  flex-shrink:1; */
  flex: 1;
`;

const TweetContainer = styled.div`
  /* height: 300px; */
  /* flex: 2; */
`;

const WeekContainer = styled.div`
margin-top:10%;
  display: flex;
  flex-direction: row; 

`;

const Seperater = styled.div`
  /* margin-top:5%;
  height: 60%;
  width:3px;
  background-color:darkblue; */
`;
