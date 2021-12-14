// *** Main.jsx ***

import React from 'react';
import { Grid, Image, Button } from '../elements/index';
import PostDetail from '../pages/PostDetail';

const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);

  return (
    <React.Fragment>
      <Grid padding="70px 0px 0px 0px"></Grid>
      <Grid padding="30px 0px 0px 0px" center>
        <button
          onClick={() => {
            setPostDetailModal(true);
          }}
        >
          상세 페이지
        </button>
        {postDetailModal && (
          <PostDetail
            modal={postDetailModal}
            setPostDetailModal={setPostDetailModal}
          ></PostDetail>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Main;
