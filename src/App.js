import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Tasks from './Routes/Tasks';
import AboutMe from './Routes/AboutMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/Tasks',
        element: <Tasks/>
      },{
        path: '/AboutMe',
        element: <AboutMe/>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
