import React from 'react';
import appImg from "assets/img/app.jpg";
import Grid from '@material-ui/core/Grid';

export default function MeetTheDeveloperComponent(){
    return (
        <div>
           
           <h3>“Do you wanna develop an app?”</h3>
            <img src={appImg} style={{width:"65%", paddingTop:"30px"}}></img>
            <h4>Like <a href="https://rickandmorty.fandom.com/wiki/Glootie">Glootie</a>, I like to develop apps &#128512;</h4>
            <p>To find the source code and other projects, check out my <a href="https://github.com/SaiAbhilashW">Github</a>!</p>
        </div>
    );
}