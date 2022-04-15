/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Repository from "./Repository";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Home({
  repositories,
  SearchFunction,
  CriteriaFunction,
}) {
  const [searchValue, setsearchValue] = useState("");
  const [criteria, setCriteria] = useState({});

  return (
    <div className="home">
      <h1>search GitHub for public repositories </h1>
      <div className="searchField">
        <TextField
          id="standard-basic"
          label="Repository name"
          variant="standard"
          onChange={(e) => setsearchValue(e.target.value)}
        />
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => SearchFunction(searchValue)}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div className="criteria">
        <h3>You can fillter by:</h3>
        <TextField
          id="standard-basic"
          label="Min number of stars"
          variant="standard"
          type="number"
          onChange={(e) =>
            setCriteria({ ...criteria, minstar: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Max number of stars"
          variant="standard"
          type="number"
          onChange={(e) => setCriteria({ ...criteria, maxstar: e.target.value })}
        />
        <label>filter by last update</label>
        <Checkbox
          {...label}
          onClick={(e) => setCriteria({  ...criteria, last_update: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Last Update"
          variant="standard"
          type="date"
          focused={true}
          onChange={(e) => setCriteria({ ...criteria, last_update: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Programing language"
          variant="standard"
          onChange={(e) => setCriteria({ ...criteria, language: e.target.value })}
        />
        <button onClick={() => CriteriaFunction(criteria)}>fillter</button>
      </div>
      <div className="repo">
        {repositories.length > 0 ? (
          repositories.map((r, i) => <Repository key={i} repository={r} />)
        ) : (
          <p>not found</p>
        )}
      </div>
    </div>
  );
}
