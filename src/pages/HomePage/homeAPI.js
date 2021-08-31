import axios from "../../config/axios-no-token";
import { GET200 } from "../../mock-data/GET200";
import { GET500 } from "../../mock-data/GET500.js";
import { POST201 } from "../../mock-data/POST201";
import { POST500 } from "../../mock-data/POST500";

export const getSurvey = async (setError) => {
  try {
    /* 
    If there was API point :
    _________________________


       const response = await axios.get("/api/v1/survey") 


    _________________________
       
       */
    const response = GET200;

    //throw 500;

    return response;
  } catch ({ response }) {
    const err = GET500;

    setError(err);
  }
};

export const sendSurvey = async (id, payload, error) => {
  try {
    /* 
    If there was API point :
    _________________________


    const response = await axios.post(`/api/v1/survey/${id}/answers`, payload);

       _________________________
       
       */

    const response = POST201(payload.data.attributes.answers, id);

    //throw 500;

    return response;
  } catch ({ response }) {
    const err = POST500;

    error.current = err;
  }
};
