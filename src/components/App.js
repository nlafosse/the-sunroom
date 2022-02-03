import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { Switch, Route } from "react-router-dom";
import ShopProvider from "../context/shopContext";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route
            exact
            path="/product"
            component={(props) => <ProductPage {...props} />}
          />
        </Switch>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
