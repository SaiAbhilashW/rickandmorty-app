import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControlOutside: {
    display: 'flex',
  },
  button: {
    padding: '10px',
    margin: '5px'  
  }
}));

export default function FilterComponent(props){
    
    let [filterParams, updateFilterParams] = useState({
      gender:'',
      species:'',
      status:''
    });

    let [isAccordionExpanded, updateAccordion] = useState(false);

    useEffect(() => {
      console.log("In effect - Status : " + filterParams.status + " gender : " + filterParams.gender + " species : " + filterParams.species);
      if(filterParams.status == '' && filterParams.gender == '' && filterParams.species == ''){
        props.updateFilterValues({...props.filterValues, status: filterParams.status, gender: filterParams.gender, species: filterParams.species});
      }
    }, [filterParams]);

    function handleChangeForGender(event){
      console.log(event.target.value);
      const gender = event.target.value;
      updateFilterParams({...filterParams, gender})
    }

    function handleChangeForStatus(event){
      console.log(event.target.value);
      const status = event.target.value;
      updateFilterParams({...filterParams, status})
    }
    
    function handleChangeForSpecies(event){
      console.log(event.target.value);
      const species = event.target.value;
      updateFilterParams({...filterParams, species})
    }

    function handleSubmit(event){
        event.preventDefault();
        // we pass the values to HomeComponent
        // console.log("Status : " + status + " gender : " + gender + " species : " + species);
        console.log("In effect - Status : " + filterParams.status + " gender : " + filterParams.gender + " species : " + filterParams.species);
        updateAccordion(false);
        props.updateFilterValues({...props.filterValues, status: filterParams.status, gender: filterParams.gender, species: filterParams.species});
        // props.updateFilterValues({...props.filterValues, status, gender, species});
    }

    function clearFilters(){
      updateFilterParams({...filterParams, status:'', gender:'', species:''});
    }

    function handleAccordionChange(event, expanded){
      updateAccordion(expanded);
    }

    const classes = useStyles();
    return(
        <div>
            <Accordion onChange={handleAccordionChange} expanded={isAccordionExpanded}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Filter your results</Typography>
                </AccordionSummary>
                <AccordionDetails>
                
                <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControlOutside} onSubmit={handleSubmit}>
                    <Grid container className={classes.root} spacing={8}>
                      <Grid item md={4}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Select Species</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={filterParams.species}
                          onChange={handleChangeForSpecies}
                          label="Select Species"
                        >
                          <MenuItem value="">
                            None
                          </MenuItem>
                          <MenuItem value={"Alien"}>Alien</MenuItem>
                          <MenuItem value={"Animal"}>Animal</MenuItem>
                          <MenuItem value={"Human"}>Human</MenuItem>
                          <MenuItem value={"Humanoid"}>Humanoid</MenuItem>
                          <MenuItem value={"Unknown"}>Unknown</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                      <Grid item md={4}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Select Status</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={filterParams.status}
                          onChange={handleChangeForStatus}
                          label="Select Status"
                        >
                          <MenuItem value="">
                            None
                          </MenuItem>
                          <MenuItem value={"Alive"}>Alive</MenuItem>
                          <MenuItem value={"Dead"}>Dead</MenuItem>
                          <MenuItem value={"Unknown"}>Unknown</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                      <Grid item md={4}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Select Gender</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={filterParams.gender}
                          onChange={handleChangeForGender}
                          label="Select Gender"
                        >
                          <MenuItem value="">
                            None
                          </MenuItem>
                          <MenuItem value={"Male"}>Male</MenuItem>
                          <MenuItem value={"Female"}>Female</MenuItem>
                          <MenuItem value={"Genderless"}>Genderless</MenuItem>
                          <MenuItem value={"Unknown"}>Unknown</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                    </Grid>
                    {/* <FormHelperText>{helperText}</FormHelperText> */}
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                    Apply
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={clearFilters}>Clear Filters</Button>
                </FormControl>

                </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}