import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "../features/previewSlice";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    preview: previewReducer,
  },
  // preloadedState: persistedState,
  devTools: true,
});

/*store.subscribe(() =>
  saveToLocalStorage({
    user: { user: store.getState().user.user },
  })
);*/

export default store;
