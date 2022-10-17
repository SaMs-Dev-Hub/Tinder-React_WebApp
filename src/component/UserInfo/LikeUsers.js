import React from "react";
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
import CardList from "./CardList";

function LikeUsers() {
  const [userdata, setData] = useState([]);
  const onLike = (e) => {
    const data = [...userdata];
    console.log(data);
    data[e.currentTarget.id]["isLike"] = !data[e.currentTarget.id]["isLike"];
    // setisLike(!isLike);
    setData(data);
    localStorage.setItem("dataKey", JSON.stringify(data));
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataKey"));
    setData(data);
  }, []);

  // Declare user data using state
  // In useeffect get the item from local strg and set the state of userdata
  // inside map do conditional rendering
  return (
    <>
      <Grid container>
        {userdata &&
          userdata.map((userData, index) => {
            return userData.isLike ? (
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
            ) : // <CardList/>  )

            null;
          })}
      </Grid>
    </>
  );
}
export default LikeUsers;
