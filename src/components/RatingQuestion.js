import React, { useEffect, useRef, useState } from "react";
import Rating from "react-rating";
import { findAndReplace } from "../helpers/findAndReplace";
import { Star } from "./common/Star";
import { Heading } from "./common/Typography";

function RatingQuestion({
  required,
  userResponse,
  setUserResponse,
  id,
  label,
  attributes,
  validateSurvey,
  setValidateSurvey,
}) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setUserResponse(
      findAndReplace(userResponse, { questionId: id, answer: rating })
    );

    if (required && rating !== 0) {
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
  }, [rating]);
  return (
    <>
      <Heading level={3} marginBottom="10px" marginTop="20px">
        {label}
      </Heading>
      <Rating
        emptySymbol={<Star className="ri-star-line" />}
        fullSymbol={<Star className="ri-star-fill" />}
        placeholderSymbol={<Star className="ri-star-fill" />}
        onChange={(value) => setRating(value)}
        placeholderRating={rating}
        start={attributes?.min - 1 || 0}
        stop={attributes?.max || 5}
      />
    </>
  );
}

export default RatingQuestion;
