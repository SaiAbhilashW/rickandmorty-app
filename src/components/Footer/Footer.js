/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.linkedin.com/in/saiabhilashw/" className={classes.block}>
                LinkedIn
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/SaiAbhilashW" className={classes.block}>
                Github
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            {"Data source - "}
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              className={classes.a}
            >
               The Rick and Morty API
            </a>
            
          </span>
        </p>
      </div>
    </footer>
  );
}
