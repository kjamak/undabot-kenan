import React, { useEffect } from "react";
import { Col, Container } from "react-grid-system";
import { useSelector } from "react-redux";
import { Heading } from "../components/common/Typography";
import Row from "../components/common/Row";
import { selectAnswers, selectQuestions } from "../features/previewSlice";
import { useHistory } from "react-router-dom";
import { Card } from "../components/common/Card";
import { useTheme } from "styled-components";
import Logo from "../components/Logo";

function SuccessPage() {
  const answers = useSelector(selectAnswers);
  const questions = useSelector(selectQuestions);
  const { colors } = useTheme();
  const history = useHistory();
  useEffect(() => {
    if (answers.length === 0) {
      history.push("/");
    }
  }, []);

  const renderPreview = questions.map((question) => {
    const ans = answers.find(
      (answer) => answer.questionId === question.questionId
    );
    console.log(ans);
    return (
      <Card marginTop="10px">
        <Heading level={3}>{question.label}</Heading>
        <Heading color={colors.primary} marginTop="5px" level={3}>
          {ans.answer}
        </Heading>
      </Card>
    );
  });
  return (
    <Container>
      <Row justify="center" align="center">
        <Col lg={6} xxl={5}>
          <Heading textAlign="center" level={2} marginBottom="20px">
            Thank you for participating in the film festival!
          </Heading>
          {renderPreview}
          <Logo />
        </Col>
      </Row>
    </Container>
  );
}

export default SuccessPage;
