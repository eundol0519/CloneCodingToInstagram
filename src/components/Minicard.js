import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "../elements/Grid";
import Iamcheck from "../shared/Iamcheck";
import SettingsIcon from "@mui/icons-material/Settings";
import { history } from "../redux/configureStore";
const MiniCard = props => {
  const users = props.users;

  return (
    <Card sx={{ minWidth: 614, backgroundColor: "inherit", boxShadow: 0 }}>
      <CardContent>
        <Grid is_flex margin="0px 0px 20px" gap="20px">
          <Typography
            sx={{ fontSize: 30, marginBottom: 0, color: "#000" }}
            gutterBottom
          >
            {users.nickname}
          </Typography>
          <Iamcheck userId={users.userId}>
            <div
              style={{
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Button
                sx={{
                  border: "1px solid #cdcdcd",
                  color: "#000",
                  padding: "7px",
                  lineHeight: 1,
                }}
                variant="outlined"
                onClick={() => {
                  history.push("/profileEdit");
                }}
              >
                프로필 편집
              </Button>
              <SettingsIcon></SettingsIcon>
            </div>
          </Iamcheck>
        </Grid>
        <Typography variant="h7" component="div" sx={{ mb: 3 }}>
          게시물 • 팔로워 • 팔로우 •
        </Typography>

        <Typography variant="body2">
          {users.introduce}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">오바마님과 바이든님이 팔로우합니다.</Button>
      </CardActions>
    </Card>
  );
};

export default MiniCard;
