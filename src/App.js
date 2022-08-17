import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Components/Recipe";
import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Food from "./Images/foodBack.jpeg";
import FoodSymbol from "@material-ui/icons/Fastfood";
import Home from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";
import About from "./Components/About";
require("typeface-pacifico");

const useStyle = makeStyles({
  app: {
    backgroundImage: "radial-gradient(circle at top right, pink,skyblue)",
    overflow: "hidden",
    minHeight: "100vh",
  },
  appBar: {
    fontSize: "1.4rem",
    background: "radial-gradient(circle at top right,skyblue, pink)",
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mainGrid: {
    padding: "7rem 3rem",
    display: "flex",
    justifyContent: "center",
  },
  search: {
    width: "40%",
    height: "4rem",
    background: "radial-gradient(circle at top right, pink, skyblue)",
    border: "none",
    textAlign: "center",
    fontSize: "1.5rem",
    color: "white",
    outline: "none",
    borderRadius: "1.8rem",
    "&::placeholder": {
      color: "white",
    },
  },
  searchBtn: {
    display: "flex",
    marginLeft: "2rem",
    height: "3.8rem",
    width: "12%",
    background: "radial-gradient(circle at top right, pink, skyblue)",
    border: "none",
    textAlign: "center",
    fontSize: "1.5rem",
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "1.7rem",
    "&:hover": {
      background: "radial-gradient(circle at top right, skyblue, pink)",
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  Btn: {
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    height: "2.5rem",
    width: "8rem",
    background: "transparent",
    color: "white",
    border: "none",
    fontFamily: "Arizonia,cursive",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
      color: "#ff2400",
    },
  },
  searchDiv: {
    display: "flex",
    marginTop: "3.5rem",
    backgroundImage: `url(${Food})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "30rem",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  name: {
    color: "red",
    fontWeight: "bolder",
    fontFamily: "Pacifico",
    fontSize: "2rem",
    width: "15rem",
    position: "fixed",
    top: "8px",
    left: "13px",
    "&:hover": {
      transform: "scale(1.05)",
      color: "red",
    },
  },
});

function App() {
  const classes = useStyle();
  const [recipes, setRecipes] = useState({});
  const [searchText, setSearchText] = useState("");
  const [changeText, setChangeText] = useState("");
  const APP_ID = "523dc3cd";
  const APP_KEY = "e54897f6e70ac432b225101869a3746f";

  useEffect(() => {
    console.log("it runs");
    const getRecipes = async () => {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(res);
      setRecipes(res.data.hits);
    };
    getRecipes();
  }, [searchText]);

  console.log(recipes);
  const clicked = () => {
    setSearchText(changeText);
  };
  const changed = (e) => {
    setChangeText(e.target.value);
  };
  const reload = () => {
    window.location.reload();
  };
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.app}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <button className={`${classes.Btn} ${classes.name}`} onClick={reload}>
            <FoodSymbol /> Food Villa
          </button>
          <button className={classes.Btn} onClick={scroll}>
            <Home />
            Home
          </button>

          <a href="#about" style={{ textDecoration: "none" }}>
            <button className={classes.Btn}>
              <Info />
              About
            </button>
          </a>
        </Toolbar>
      </AppBar>
      <div className={classes.searchDiv}>
        <input
          id="searchBar"
          className={classes.search}
          type="text"
          placeholder="Search for the recipe here....."
          onChange={changed}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              clicked();
            }
          }}
        />
        <button className={classes.searchBtn} onClick={clicked}>
          Search <Search />
        </button>
      </div>
      {recipes[0] ? (
        <Grid className={classes.mainGrid} container spacing={8}>
          {recipes.map((recipe) => (
            <Grid
              key={recipe.recipe.calories}
              style={{
                paddingLeft: "5.5rem",
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Recipe
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                time={recipe.recipe.totalTime}
                calories={recipe.recipe.calories}
                cuisineType={recipe.recipe.cuisineType}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid />
      )}
      <About />
    </div>
  );
}

export default App;
