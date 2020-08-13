import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/User/List/List";
import Home from "./components/Home/Home";
import Tasks from "./components/Task/List/List";
import Navbar from "./components/Navbar/Navbar";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
