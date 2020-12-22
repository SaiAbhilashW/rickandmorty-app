import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import CardMedia from '@material-ui/core/CardMedia';
import bgImage from "assets/img/two.jpg";

const useStyles = makeStyles(styles);



export default function ListComponent(props) {

    const classes = useStyles();
    console.log(props);
    console.log(props.list);
    
    return (
      <div style={{paddingTop: "30px"}}>
        <GridContainer>
        {props.list.length != 0 ? 
        props.list.map(character => (
        <GridItem xs={12} sm={4} md={3}>
            <Card>
                <CardHeader color="success">
                <CardMedia
                    className={classes.media}
                    image= {character.image}
                    title={character.name}
                />
                </CardHeader>
                <CardBody>
                <h4 className={classes.cardTitle}>{character.name}</h4>
                <p className={classes.cardCategory}>
                    ID : {character.id}
                </p>
                <p className={classes.cardCategory}>
                    Species : {character.species}
                </p>
                <p className={classes.cardCategory}>
                    Gender : {character.gender}
                </p>
                <p className={classes.cardCategory}>
                    Origin : {character.origin.name}
                </p>
                </CardBody>
                <CardFooter chart>
                <div className={classes.stats}>
                {character.status == 'Alive' ? 
                    <span>Status : <span style={{color:'green'}}><b>{character.status}</b></span></span>
                :  <span>{ character.status == 'Dead' ? 
                    <span>Status : <span style={{color:'red'}}><b>{character.status}</b></span></span>
                    :
                    <span>Status : <span style={{color:'gold'}}><b>{character.status.charAt(0).toUpperCase() + character.status.slice(1)}</b></span></span>
                    }</span>
                }    
                </div>
                </CardFooter>
            </Card>
        </GridItem>
        ))
        :
        <h3>No characters found</h3>}   
        </GridContainer>
 
    </div>
    );
}
  