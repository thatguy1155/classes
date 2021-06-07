import React, { useState, useContext, useEffect } from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import { AppContext } from '../Context/Context';
import Graph from './Components/Graph';
import Loading from '../Components/Loading/Loading';
import './GraphPage.css';

export default function GraphPage(props) {
  const { artistName, isLoading } = useContext(AppContext);

  return (
    <Container fluid>
      <Row>
        <Col>
          {isLoading ? <Loading /> : <Graph />}
        </Col>
      </Row>
    </Container>
  );
}
