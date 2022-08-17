import React, { useState } from "react";
import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import Tilt from "react-tilt";

const useStyle = makeStyles({
  ingreImg: {
    width: "1.8rem",
    height: "1.8rem",
    borderRadius: "50%",
    marginRigth: "1rem",
  },
  img: {
    height: "55%",
    width: "100%",
  },
  card: {
    height: "28rem",
    width: "20rem",
    backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    borderRadius: "6%",
    boxShadow: "0px 5px 20px grey ",
  },
  content: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  list: {
    fontSize: "0.8rem",
    marginLeft: "1rem",
    "&:hover": {
      cursor: "default",
    },
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "14rem",
    height: "3rem",
    fontSize: "1.2rem",
    marginTop: "1rem",
    marginLeft: "2rem",
    background: "transparent",
    border: "2px solid #d1001c",
    color: "#ff581a",
    marginBottom: "2rem",
    fontFamily: "Arizonia,cursive",

    "&:hover": {
      color: "#d1001c",
      border: "2px solid #ff581a",
      cursor: "pointer",
    },
  },
  time: {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Arizonia,cursive",
    fontSize: "1.1rem",
    color: "#ff581a",
    textTransform: "capitalize",
  },
  ingre: {
    color: "#ff581a",
    fontSize: "1.5rem",
    "&:hover": {
      cursor: "default",
    },
  },
  eachIngre: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
  },
  nameSeperate: {
    width: "70%",
  },
});

const Recipe = ({ title, ingredients, image, time, calories, cuisineType }) => {
  time === 0 ? (time = Math.floor(Math.random() * 20) + 5) : (time = time + 0);
  calories = Math.ceil(calories);
  const classes = useStyle();

  const [toggle, setToggle] = useState(true);

  return (
    <Tilt>
      <Card
        className={classes.card}
        onClick={() => (toggle === false ? setToggle(true) : toggle)}
      >
        {toggle ? (
          <>
            {" "}
            <CardMedia
              className={classes.img}
              component="img"
              image={image}
              value="Hey there"
              alt={title}
            />
            <CardContent className={classes.content}>
              <div className={classes.time}>
                <div className={classes.nameSeperate}>
                  <b>{title}</b>
                </div>
                <i style={{ display: "flex", alignItems: "center" }}>
                  <AccessTime /> {time} min
                </i>
              </div>
              <br />
              <div className={classes.time}>
                <b>{cuisineType}</b>
                {calories} Cal
              </div>

              <div>
                <button
                  className={classes.view}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Ingredients
                </button>
              </div>
            </CardContent>
          </>
        ) : (
          <CardContent>
            <b className={classes.ingre}>INGREDIENTS</b>
            <div className={classes.list}>
              {ingredients.map((ingredient) => (
                <div key={Math.random() * 100000} className={classes.eachIngre}>
                  <img
                    src={ingredient.image}
                    alt=""
                    className={classes.ingreImg}
                  />{" "}
                  {ingredient.text}
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Tilt>
  );
};

export default Recipe;
