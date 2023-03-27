import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import blogData from './pages/Data';

const Layout = () => {
  return <>
    <Header auth={true} />
    <Outlet/>
    <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Homepage blogData={blogData}/>,
      },
      {
        path: '/post/:id',
        element: <Details blogData={blogData}/>,
      },
      {
        path: '/write',
        element: <Write/>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
