/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Header from "./comp/Header";
import Main from "./comp/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [repositories, setrepositories] = useState([]);
  const [loading, setloading] = useState(false);

  const SearchFunction = async (value) => {
    if (value.length < 1) {
      value = "a";
    }
    setloading(true);
    console.log(value);
    const res = await fetch('/repos?q=' + value);
    const data = await res.json();
    console.log(data.items);
    setrepositories(data.items);
    setloading(false);
  };
  const CriteriaFunction = async (obj) => {
    console.log(obj);
    setloading(true);
    if (repositories.length < 1) {
      return alert("fisrt search by name");
    }
    if (obj.minstar) {
      setrepositories(
        repositories.filter((a) => a.stargazers_count >= obj.minstar)
      );
    }
    if (obj.last_update) {
      setrepositories(
        repositories.filter((a) => {
          console.log(a.updated_at);
          return a.updated_at.includes(obj.last_update);
        })
      );
    }
    if (obj.maxstar) {
      setrepositories(
        repositories.filter((a) => a.stargazers_count <= obj.maxstar)
      );
    }

    if (obj.language) {
      setrepositories(
        repositories.filter((r) => {
          console.log(r.language);
          return r.language?.toLowerCase() === obj.language?.toLowerCase();
        })
      );
      console.log(repositories);
    }

    setloading(false);
  };
  return (
    <div className="App">
      <Header />
      <Box
        sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
      >
        {loading ? <CircularProgress /> : ""}
      </Box>
      <Main
        repositories={repositories}
        SearchFunction={SearchFunction}
        CriteriaFunction={CriteriaFunction}
      />
    </div>
  );
}

export default App;
