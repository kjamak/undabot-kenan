import React, { useEffect, useState } from "react";
import { findAndReplace } from "../helpers/findAndReplace";
import { Input } from "./common/Input";
import { Heading } from "./common/Typography";

function TextQuestion({
  required,
  userResponse,
  setUserResponse,
  id,
  label,
  validateSurvey,
  setValidateSurvey,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setUserResponse(
      findAndReplace(userResponse, { questionId: id, answer: value })
    );

    if (required && value !== "") {
      setValidateSurvey(
        findAndReplace(validateSurvey, {
          questionId: id,
          required: required,
          verified: true,
        })
      );
    } else {
      setValidateSurvey(
        findAndReplace(validateSurvey, {
          questionId: id,
          required: required,
          verified: false,
        })
      );
    }
  }, [value]);

  return (
    <>
      <Heading level={3} marginBottom="10px" marginTop="20px">
        {label}
      </Heading>
      <Input
        placeholder="Your Answer"
        value={value}
        setValue={(text) => setValue(text)}
      />
    </>
  );
}

export default TextQuestion;
