// *** MyPage.jsx ***

import React from 'react';
import { useParams } from 'react-router-dom';
import { actionCreators as postAtions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import Mypost from '../components/Mypost';
import Minicard from '../components/Minicard';
import Grid from '../elements/Grid';

const MyPage = props => {
  const params = useParams();
  const userId = params.userId;
  console.log(userId);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postAtions.getMyPostDB(userId));
  }, []);
  const users = useSelector(state => state.post.users);
  return (
    <React.Fragment>
      <Grid margin="5%"></Grid>
      <Container>
        <Items1>
          <Grid is_flex>
            <Items2>
              <Avatar
                alt="hello"
                src={users.imageUrl_profile}
                sx={{ width: 200, height: 200, margin: 'auto' }}
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
  background-color: #fff;
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
