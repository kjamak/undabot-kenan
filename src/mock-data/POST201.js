export const POST201 = (userAnswers, id) => ({
  data: {
    type: "surveyAnswers",
    id: id,
    attributes: {
      answers: userAnswers,
    },
    relationships: {
      survey: {
        data: {
          type: "surveys",
          id: "2660dd24-e2db-42c1-8093-284b1df2664c",
        },
      },
    },
  },
});
