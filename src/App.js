import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BackgroundColor } from "./components/common/BackgroundColor";
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/NoPage";
import SuccessPage from "./pages/SuccessPage";
import { CustomThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <BackgroundColor>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/success">
              <SuccessPage />
            </Route>
            <Route component={NoPage} />
          </Switch>
        </Router>
      </BackgroundColor>
    </CustomThemeProvider>
  );
}

export default App;
