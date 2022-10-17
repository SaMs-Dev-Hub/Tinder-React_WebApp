import React, { useEffect, useState } from "react";

import { getUserDetails } from "../service/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";


function UserDetails() {
  let { id } = useParams();
  const [userinfo, setuserinfo] = useState([]);
  const [isLike, setisLike] = useState(false);
  const onLike = () => {
    setisLike(!isLike);
  };
  useEffect(() => {
    getUserDetails(id)
      .then((res) => {
        console.log("resolve", res);
        setuserinfo(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
    
    
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 325, margin: 10 }}>
        <CardMedia
          component="img"
          height="200"
          image={userinfo.avatar}
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userinfo.first_name + " " + userinfo.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userinfo.email}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={onLike}>
            <FavoriteIcon color={isLike ? "error" : "disabled"} />
          </IconButton>
          <IconButton sx={{ marginLeft: 4 }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
    </>
  );
}

export default UserDetails;
