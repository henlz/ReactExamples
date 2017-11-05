import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const PostsView = ({fetchPosts}) => {
  if (fetchPosts.pending) {
    return <CircularProgress/>
  } else if (fetchPosts.fulfilled) {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchPosts.value.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.title}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
};

PostsView.propTypes = {
  fetchPosts: PropTypes.object
};

export default PostsView;
