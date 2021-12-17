import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Grid from "../elements/Grid";

const MiniCard = props => {
  const users = props.users;
  console.log(users);
  return (
    <Card sx={{ minWidth: 614 }}>
      <CardContent>
        <Grid is_flex>
          <Typography
            sx={{ fontSize: 30, mb: 3 }}
            color="text.secondary"
            gutterBottom
          >
            {users.nickname}
          </Typography>
        </Grid>
        <Typography variant="h7" component="div" sx={{ mb: 3 }}>
          게시물 • 팔로워 • 팔로우 •
        </Typography>

        <Typography variant="body2">
          {users.introduce}
          <br />
          {/* {'"개인레슨"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">오바마님과 바이든님이 팔로우합니다.</Button>
      </CardActions>
    </Card>
  );
};

export default MiniCard;
