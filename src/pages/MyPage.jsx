// *** MyPage.jsx ***

import React from "react";
import { useParams } from "react-router-dom";
import { actionCreators as postAtions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Mypost from "../components/Mypost";
import Minicard from "../components/Minicard";
import Grid from "../elements/Grid";

const MyPage = props => {
  const params = useParams();
  const userId = params.id;
  console.log(params);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postAtions.getMyPostDB(userId));
  }, []);

  const myPageList = useSelector(state => state.post.myPageList);

  const users = useSelector(state => state.post.users);

  return (
    <React.Fragment>
      <Grid margin="1%"></Grid>
      <Container>
        <Items1>
          <Grid is_flex>
            <Items2>
              <Avatar
                src={
                  users.imageUrl_profile
                    ? users.imageUrl_profile
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                sx={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                  border: "5px solid transparent",
                  backgroundImage:
                    "linear-gradient(#444444, #444444), linear-gradient(135deg,  #ff0000 0%,#ed7200 50%,#9d00ff 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              />
            </Items2>
            <Items3>
              <Minicard users={users} />
            </Items3>
          </Grid>
        </Items1>
      </Container>
      <Mypost />
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 935px;
  /* width: 891px; */
  margin: 0 auto;
  background-color: ;
  display: flex;
  flex-wrap: wrap;
`;
const Items1 = styled.div`
  width: 935px;
  height: 304px;
  margin: 0 auto 30px;
  border-bottom: 2px solid black;
  /* background-color: mistyrose; */
  display: flex;
  flex-wrap: wrap;
`;
const Items2 = styled.div`
  width: 291px;
  height: 304px;
  margin-right: 30px;
  /* background-color: deeppink; */
`;
const Items3 = styled.div`
  width: 614px;
  height: 304px;
  /* background-color: darksalmon; */
  display: flex;
  flex-wrap: wrap;
`;

export default MyPage;
