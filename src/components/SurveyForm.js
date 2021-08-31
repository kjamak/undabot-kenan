import React, { useRef, useState } from "react";
import { Button } from "./common/Button";
import { Description, Heading, Text } from "./common/Typography";
import { Markup } from "interweave";
import TextQuestion from "./TextQuestion";
import { useEffect } from "react";
import RatingQuestion from "./RatingQuestion";
import { sendSurvey } from "../pages/HomePage/homeAPI";
import { addAnswers, addQuestions } from "../features/previewSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "./common/Card";

function SurveyForm({ id, attributes }) {
  const [userResponse, setUserResponse] = useState([]);
  const [validateSurvey, setValidateSurvey] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);

  const error = useRef();

  const [err, setErr] = useState();

  useEffect(() => {
    if (attributes !== undefined) {
      const validation = attributes.questions.map((question) => {
        return {
          questionId: question.questionId,
          required: question.required,
          verified: false,
        };
      });

      setValidateSurvey(validation);
    }
  }, [attributes]);

  useEffect(() => {
    const validate = validateSurvey.find(
      (survey) => survey.required === true && survey.verified === false
    );

    if (validate) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [validateSurvey]);

  const renderQuestions = attributes?.questions.map((question) => {
    if (question.questionType === "text") {
      return (
        <TextQuestion
          key={question.questionId}
          id={question.questionId}
          userResponse={userResponse}
          setUserResponse={setUserResponse}
          label={question.label}
          required={question.required}
          validateSurvey={validateSurvey}
          setValidateSurvey={setValidateSurvey}
        />
      );
    }
    if (question.questionType === "rating") {
      return (
        <RatingQuestion
          key={question.questionId}
          id={question.questionId}
          userResponse={userResponse}
          setUserResponse={setUserResponse}
          label={question.label}
          required={question.required}
          attributes={question.attributes}
          validateSurvey={validateSurvey}
          setValidateSurvey={setValidateSurvey}
        />
      );
    }
  });

  const submitSurvey = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        type: "surveyAnswers",
        attributes: {
          answers: userResponse,
        },
      },
    };
    const response = await sendSurvey(id, payload, error);
    if (error.current) {
      setErr(error.current);
    } else {
      dispatch(addQuestions(attributes.questions));
      dispatch(addAnswers(response?.data.attributes.answers));
      history.push("/success");
    }
  };

  return (
    <Card>
      <form onSubmit={submitSurvey}>
        <Heading level={1}>{attributes?.title.toUpperCase()}</Heading>
        <Description>
          <Markup content={attributes?.description} />
        </Description>
        {renderQuestions}
        <Button disabled={disabled} type="submit" marginTop="20px">
          {disabled ? "Please answer all required questions" : "Submit"}
        </Button>
        {err && (
          <Heading level={4} textAlign="center" marginTop="10px">
            {err.errors[0].title}
          </Heading>
        )}
      </form>
    </Card>
  );
}

export default SurveyForm;
