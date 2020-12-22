import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from '@material-ui/core/Button';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);


export default function SearchComponent(props){

    let [searchInput, setSearchInput] = useState('');
    const classes = useStyles();

    let searchStringSubmitEvent = (event) => {
        event.preventDefault();
        console.log('form was submitted');
        console.log("searchInput : " + searchInput);
        props.updateSearchString(searchInput);
    }

    let searchStringChangeEvent = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <div>
        <form noValidate autoComplete="off" onSubmit={searchStringSubmitEvent}>
        <CustomInput
          onChange={searchStringChangeEvent}
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <Button color="yellow" aria-label="edit" justIcon round type="submit" value="Submit">
          <Search />
        </Button>
      {/* </div> */}
        </form>
        </div>
    );
}