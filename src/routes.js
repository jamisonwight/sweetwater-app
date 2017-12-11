import Home from 'components/Home/home';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';
import Colors from 'components/Colors/colors';
// import Users from 'components/Users/users';
// import Products from 'components/Products/products';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/colors',
    name: 'colors',
    component: Colors
  },
  // {
  //   path: '/users',
  //   name: 'users',
  //   component: Users
  // },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: Products
  // },
];

export default routes;
