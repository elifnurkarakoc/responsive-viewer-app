/** Dependencies */
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

/** Stores */
import store from "store/store";

/** Partials */
import Home from "./partials/Home/Home";

/**Components */
import Header from "components/Header/Header";

/** Stylesheets */
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="appHolder">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
