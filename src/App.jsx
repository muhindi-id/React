import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GithubProfileComponent from "./Components/GithubProfileComponent";
import Search from './Search/Search'
function App() {
  const [username, setUserName] = useState("");
function onSearch(username){
  setUserName(username)
}


  return (
    <>
      <h1 style={{
        textAlign: "center",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        color: "red",
      }}>GITHUB SEARCH TOOL</h1>
      <Search onSearch={onSearch}/>
      <GithubProfileComponent username={username} />
    </>
  );
}

export default App;