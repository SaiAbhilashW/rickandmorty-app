import { fetchSingleCharacter,  fetchEpisodeData} from 'api/rickAndMortyApi';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    flexGrow: 1,
    margin: "auto"
  },
  media: {
    height: 300,
  },
  heading: {
      margin: "auto",
      paddingBottom: "10px"
  }
});


export default function CharacterOfTheDayComponent(){
    const classes = useStyles();
    let [info, updateInfo] = useState({});
    let [episodeDetails, updateEpisodeDetails] = useState({
        episode: 'S02E08', title:'Interdimensional Cable 2: Tempting Fate', air_date: "September 20, 2015"
    })
    let summaryDetails = {
        pronounHis : 'His',
        pronounHer: 'Her',
        pronounIts: 'Its',
        // typeDash :'',
        aliveLine:' is alive and was last seen at ',
        deadLine:' died at ',
        unknownLine1: ' was last spotted on ',
        unknownLine2: ' and ',
        unknownLine3: ' whereabouts are currently unknown.'
    }

    function getIdForTheDay(){
        let today = new Date();
        let dd = parseInt(String(today.getDate()).padStart(2, '0'));
        let mm = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
        let id = dd*mm;
        return id;
    }

    function getPronoun(gender){
        if(gender=="Male") return "He";
        else if(gender=="Female") return "She";
        else return "It";
    }

    function getStatus(status, gender, location){
        if(status == "Alive"){
            return getPronoun(gender) + " is alive and was last seen at " + location + ".";
        } else if(status == "Dead"){
            return getPronoun(gender) + " died at " + location + ".";
        } else {
            return getPronoun(gender) + " was last spotted on " + location + " and is currently missing."
        }
    }

    useEffect(()=>{
        async function fetchData(){
            let id = getIdForTheDay();
            console.log(id);
            let response = await fetchSingleCharacter(id);
            console.log('yes, I ran in char');
            console.log(response.data);
            // if response.error then update the list with []
            if(response.data.length == 0){
                updateEpisodeDetails({...episodeDetails, episode: 'S02E05', title:'Rick Potion #9'});
                updateInfo({});
            } else {
                fetchEpisodeData(response.data.episode[0]).then((episodeResp) => {
                    updateEpisodeDetails({...episodeDetails, episode: episodeResp.data.episode, title: episodeResp.data.name, air_date: episodeResp.data.air_date});
                })
                updateInfo(response.data);
            }
            
        }
        fetchData();
    },[]);

    return(
        <div>
            <div className={classes.heading}>
            <h3>Character of the Day</h3>
            </div>
            <Grid 
            container 
            className={classes.root} 
            spacing={2}
            alignItems="center"
            alignContent="center"
            justify="center">
                <Grid item md={8}>
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={info.image}
                        title={info.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {info.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {info.name} is a {info.type ? info.type + " - ": ""} {info.species} and was first seen {info.origin? (info.origin.name == "unknown") ? "" : "at " + info.origin.name : ""} in <b>{episodeDetails.episode}</b>, titled <b>"{episodeDetails.title}"</b> which aired on {episodeDetails.air_date}. {info.location? getStatus(info.status, info.gender, info.location.name) : ""}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}