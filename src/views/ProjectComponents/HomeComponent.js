import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListComponent from "./ListComponent";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import {fetchCharacterList} from "api/rickAndMortyApi.js";
import DropDownComponent from "./DropDownComponent";
import PaginationComponent from "./PaginationComponent";
import { Grid } from '@material-ui/core';
import { useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
  }));

export default function HomeComponent(){

    let [searchString, updateSearchString] = useState('');
    let [list, updateList] = useState([]);
    let [sortOrder, updateSortOrder] = useState('');
    let [totalPages, updateTotalPages] = useState(null);
    let [pageNo, updatePageNo] = useState(1);
    let [filterValues, updateFilterValues] = useState({
        gender:'',
        species:'',
        status:''
    })

    useEffect(() => {
        async function fetchData(){
            //page, name, status, species, gender, sortOrder
            let response = await fetchCharacterList(pageNo,searchString, filterValues.status, filterValues.species, filterValues.gender, sortOrder);
            console.log('yes, I ran');
            console.log(response);
            // if response.error then update the list with []
            if(response.data.length == 0){
                updateList([]);
            } else {
                updateList(response.data.results);
                updateTotalPages(response.data.info.pages);
            }
        };
        fetchData();
    },[searchString, sortOrder, filterValues, pageNo]);

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    const classes = useStyles();
    return(
        <div>
        <Grid container className={classes.root} spacing={2}>
            <Grid item lg={4}>
            <SearchComponent updateSearchString={updateSearchString}/>
            </Grid>
            <Grid item lg={6}>
            <FilterComponent updateFilterValues={updateFilterValues} filterValues={filterValues}/>
            </Grid>
            <Grid item lg={2}>
            <DropDownComponent order={sortOrder} updateSortOrder={updateSortOrder}/>
            </Grid>
        </Grid>
        <ListComponent list={list} />
        <Grid container className={classes.root} spacing={2}>
        <PaginationComponent totalPages={totalPages} updatePageNo={updatePageNo} pageNo={pageNo}/>
        </Grid>
        </div>
    );
}