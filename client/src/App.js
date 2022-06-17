import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import OrderHistory from "./pages/OrderHistory";
import Success from "./pages/Success";

import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="wrap-footer">
          <ScrollToTop>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/about" component={About} />
                <Route exact path="/orderHistory" component={OrderHistory} />
                <Route exact path="/products/:id" component={Detail} />
                <Route exact path="/success" component={Success} />
                <Route component={NoMatch} />
              </Switch>
              <Footer />
            </StoreProvider>
          </ScrollToTop>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
