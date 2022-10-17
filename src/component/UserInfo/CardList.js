import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getUser } from "../service/index";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
function CardList({ ...props }) {
  const [userdata, setData] = useState([]);

  const likesArray = [];
  const onLike = (e) => {
    const data = [...userdata];
    console.log(data);
    data[e.currentTarget.id]["isLike"] = !data[e.currentTarget.id]["isLike"];
    // setisLike(!isLike);
    setData(data);
    localStorage.setItem("dataKey", JSON.stringify(data));
  };

  useEffect(() => {
    const userDataFromLocal = localStorage.getItem(
    "dataKey"
    );
    if (!userDataFromLocal) {
      getUser()
        .then((res) => {
          console.log("resolve", res);

          localStorage.setItem("dataKey", JSON.stringify(res.data));
          for (let i = 0; i < res.data.length; i++) {
            if (!res.data[i].hasOwnProperty("isLike")) {
              res.data[i]["isLike"] = false;
            }
          }
          setData(res.data);

          console.log("item set in local storage");
          console.log(
            "Getting item from local srg= ",
            JSON.parse(localStorage.getItem("dataKey"))
          );
          console.log(
            "Getting  Invalid item from local srg= ",
            JSON.parse(localStorage.getItem("dataKey123"))
          );
        })
        .catch((err) => {
          console.log("error= ", err);
        });
    } else {
      setData(JSON.parse(userDataFromLocal));
      
    }
  }, []);

  return (
    <Grid container>
      {userdata &&
        userdata.map((userData, index) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 325, margin: 10 }}>
                <Link to={`/userDetails/${userData.id}`}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={userData.avatar}
                    alt="green iguana"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {userData.first_name + " " + userData.last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userData.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton id={index} onClick={onLike}>
                    <FavoriteIcon
                      color={userData.isLike ? "error" : "disabled"}
                    />
                  </IconButton>
                  <IconButton sx={{ marginLeft: 4 }}></IconButton>
                  <RemoveCircleOutlineIcon />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}
export default CardList;
