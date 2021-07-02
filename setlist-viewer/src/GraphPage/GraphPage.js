import React, { useState, useContext, useEffect } from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import { AppContext } from '../Context/Context';
import Graph from './Components/Graph';
import Loading from '../Components/Loading/Loading';
import ExtraSong from './Components/ExtraSong';
import './GraphPage.css';
import { Link, useHistory } from 'react-router-dom';

export default function GraphPage() {
  const history = useHistory();
  const {
    artistName, isLoading, tally, error,
  } = useContext(AppContext);
  const emptyPage = tally.length < 1 && !isLoading;
  const loadingPage = isLoading && tally.length < 1;
  const loadingAdditionalSong = isLoading && tally.length > 0;

  useEffect(() => {
    console.log(error);
    if (emptyPage && !error) history.push('/');
    // eslint-disable-line
  }, []);
  useEffect(() => {
    if (error) history.push('/error');
    // eslint-disable-line
  }, [error]);
  const submit = () => console.log('placeholer');

  return (
    <Container fluid>
      <Row>
        <Col>
          {loadingPage ? <Loading /> : <Graph tally={tally} />}
        </Col>
      </Row>
      <Row>
        <Col>
          {loadingAdditionalSong ? <Loading /> : <ExtraSong submit={submit} />}
        </Col>
      </Row>
    </Container>
  );
}
