import React from "react";
import { connect } from "react-redux";
import { TextField } from "material-ui";

const Search = props => (
  <div>
    <TextField
      placeholder={"Search"}
      fullWidth={true}
      onChange={props.searchPhraseChangeHandler}
      value={props.searchPhrase}
    />
  </div>
);
