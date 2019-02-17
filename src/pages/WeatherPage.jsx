import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";
import WeatherDetail from "../components/WeatherDetail";
import WeatherWeek from "../components/WeatherWeek";
import WeatherTwitter from "../components/WeatherTwitter";
import {Container, Row, Col } from "react-bootstrap";

const HOST = "https://api.apixu.com/v1/forecast.json";
const KEY = "f2dbda67de814bf8bf895350192301";
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
        <div />

        <Container>
          <TopContainer>
            <Row>
              <Col xs={11} md={6}>
                <DetailContainer>
                  {data && data.current && (
                    <WeatherDetail
                      temp={data.current.temp_c}
                      humidity={data.current.humidity}
                      wind={data.current.wind_mph}
                      condition={data.current.condition.text}
                    />
                  )}
                </DetailContainer>
              </Col>
              <Col xs={11} md={5}>
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
              <Col xs={11} md={4}>
                <WeatherTwitter city={this.state.city} />
              </Col>
              <Col xs={1} md={1}>
                <Seperater />
              </Col>

              <Col xs={11} md={7}>
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
      </BackgroundContainer>
    );
  }
}

export default WeatherPage;

const BackgroundContainer = styled.div`
  background-image: linear-gradient(66deg, deeppink, purple, blue);
  position:absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const TopContainer = styled.div`
  flex: 1;
  color: white;
  background-color: darkblue;
  margin-left: -2%;
  margin-right: -2%;
  margin-bottom: -2%;
  border-radius: 10px;
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
  background-color: #fff;
  border-radius: 0px 0px 10px 10px;
  margin-left: -2%;
  width: 104%;
  margin-bottom: -1%;
  flex: 1;
`;
const WeekContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: row;
`;

const Seperater = styled.div`
  height: 200px;
  margin-top: 50px;
  width: 3px;
  background-color: darkblue;
`;
