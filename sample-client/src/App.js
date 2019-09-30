import React from 'react';
import request from "./utils/request";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "reactstrap";



class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Demo samples App</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
