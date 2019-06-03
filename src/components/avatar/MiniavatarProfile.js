import React, { Component } from "react";
import "../../css/avatar.css";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
//grid
const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

function MiniAvatarProfile() {
const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Carlos"
          src={require("../../assets/img/meavatar.JPG")}
          className={classes.avatar}
        />
      </Grid>  
    </div>
  );
}

export default MiniAvatarProfile;