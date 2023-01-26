/** Dependencies */
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

/** Stores */
import store from "store/store";

/** Partials */
import Home from "./partials/Home/Home";
import Product from "partials/Product/Product";
import About from "partials/About/About";

/**Components */
import Header from "components/Header/Header";

/** Stylesheets */
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="appHolder">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
