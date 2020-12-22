import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function DropDownComponent(props){
    const classes = useStyles();
    function handleChange(event){
        event.preventDefault();
        console.log("dropdown : " + event.target.value);
        props.updateSortOrder(event.target.value);
        console.log("order : " + props.sortOrder);
    }

    return(
       
        <FormControl variant="outlined" color='primary' className={classes.formControl} style={{background: '#fff'}}>
        <InputLabel id="demo-simple-select-outlined-label">Sort by ID</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.sortOrder}
          onChange={handleChange}
          label="Sort by ID"
        >
          <MenuItem value="">
            None
          </MenuItem>
          <MenuItem value={"Ascending"}>Ascending</MenuItem>
          <MenuItem value={"Descending"}>Descending</MenuItem>
        </Select>
      </FormControl>
    );
}