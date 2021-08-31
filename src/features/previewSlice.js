import { createSlice } from "@reduxjs/toolkit";

export const previewSlice = createSlice({
  name: "preview",
  initialState: {
    questions: [],
    answers: [],
  },

  reducers: {
    addQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export const { addQuestions, addAnswers } = previewSlice.actions;

export const selectAnswers = (state) => state.preview.answers;
export const selectQuestions = (state) => state.preview.questions;

export default previewSlice.reducer;
