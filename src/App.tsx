import React from "react";
import "./App.css";
import { AuthApp } from "./auth-app";
import { useAuth } from "./context/auth-context";
import { UnAuthApp } from "./unauth-app";

// import { ProjectListScreen } from './screens/project-list';

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
