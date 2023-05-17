import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import App from "./App";
import Greeting from "./Components/Greeting";
import ListPosts from "./Components/blog/ListPosts";
import CreatePost from "./Components/blog/CreatePost";
import ViewPost from "./Components/blog/ViewPost";
import EditPost from "./Components/blog/EditPost";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";    


const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greeting/>},
    { path: 'blog/posts', element: <ListPosts/>},
    { path: 'blog/posts/create', element: <CreatePost/>},
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path: 'blog/posts/:postId/edit', element: <EditPost/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>}
    
]);

export default router;