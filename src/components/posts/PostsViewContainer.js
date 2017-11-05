import {connect} from 'react-refetch';
import PostsView from './PostsView';

export default connect(() => ({
  fetchPosts: 'https://jsonplaceholder.typicode.com/posts',
}))(PostsView);
