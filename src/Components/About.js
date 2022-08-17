import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  About: {
    marginTop: "15rem",
    margin: "auto",
    height: "65vh",
    background: "rgba(0, 30, 60,0.6)",
    color: "black",
    textAlign: "center",
    padding: "1rem",
  },
  text: {
    fontFamily: "times new roman",
    paddingTop: "2rem",
    color: "white",
  },
  text2: {
    fontFamily: "times new roman",
    paddingTop: "2rem",
    color: "yellow",
  },
  text3: {
    fontFamily: "times new roman",
    width: "47%",
  },
  text4: {
    fontFamily: "times new roman",
    width: "47%",
  },
  textDiv: {
    padding: "1rem",
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "start",
    color: "white",
  },
  p: {
    color: "yellow",
  },
  food: {
    color: "red",
    fontFamily: "Pacifico",
    cursor: "pointer",
    textDecorationLine: "underline",
  },
});

const About = () => {
  const classes = useStyle();

  const reload = () => {
    window.location.reload();
  };
  return (
    <div id="about" className={classes.About}>
      <Typography variant="h3" className={classes.text}>
        Confused what to make today, Worry not{" "}
        <b className={classes.food} onClick={reload}>
          Food Villa
        </b>{" "}
        got your back!
      </Typography>
      <Typography variant="h4" className={classes.text2}>
        Type in anything you like and we will tell you the details
      </Typography>
      <div className={classes.textDiv}>
        <Typography variant="h6" className={classes.text3}>
          Food villa is an web application which tells the user about the meals
          to make. It tells your about the different ingredients needed and the
          time taken by the meal to prepare. It also tells you the cuisine type
          and calories of that specific meal.
        </Typography>
        <Typography variant="h6" className={classes.text4}>
          Click on the search bar and type in the meal you want to know about
          and press enter/click search button. After different dishes appear on
          the screen{" "}
          <b className={classes.p}>
            click ingredients button to see the ingredients
          </b>
          of that meal and{" "}
          <b className={classes.p}>click the card to go back</b> to the dish.
          Easy and simple
        </Typography>
      </div>
    </div>
  );
};

export default About;
