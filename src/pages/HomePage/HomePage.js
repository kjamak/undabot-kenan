import React, { useEffect, useState } from "react";
import { Col, Container } from "react-grid-system";
import { Heading } from "../../components/common/Typography";
import Row from "../../components/common/Row";
import Logo from "../../components/Logo";
import SurveyForm from "../../components/SurveyForm";
import { getSurvey } from "./homeAPI";

function HomePage() {
  const [surveyData, setSurveyData] = useState();
  const [error, setError] = useState();

  const getSurveyData = async () => {
    const response = await getSurvey(setError);

    setSurveyData(response?.data);
  };

  useEffect(() => {
    getSurveyData();
  }, []);

  return (
    <Container>
      <Row justify="center" align="center">
        {!error ? (
          <Col lg={6} xxl={5}>
            <SurveyForm
              attributes={surveyData?.attributes}
              id={surveyData?.id}
            />
            <Logo />
          </Col>
        ) : (
          <Col md={6}>
            <Heading>Could not load Survey Data. Please try again</Heading>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default HomePage;
