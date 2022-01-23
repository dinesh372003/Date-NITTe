import React from "react";
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";

import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { Home } from "./pages/home";
import { Chat } from "./pages/chat";
// import { Navigation } from "./pages/navigation";

const App = () => (
	<Router>
		<Route exact path="/">
			<Redirect to="/login" />
		</Route>
		<Switch>
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/chat" component={Chat} />
		</Switch>
	</Router>
);

export default App;
