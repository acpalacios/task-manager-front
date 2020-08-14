import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Users from "./components/User/List/List";
import Home from "./components/Home/Home";
import Tasks from "./components/Task/List/List";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/User/UserPage/UserPage";
import UserForm from "./components/User/Form/UserForm";
import TaskForm from "./components/Task/Form/TaskForm";

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
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/user/create" component={UserForm}></Route>
          <Route exact path="/user/:userId" component={UserPage}></Route>
          <Route exact path="/tasks" component={Tasks}></Route>
          <Route exact path="/task/create" component={TaskForm}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
