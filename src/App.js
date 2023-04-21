import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Tasks from './Routes/Tasks';
import AboutMe from './Routes/AboutMe';
import Home from './Routes/Home';
import Task from './components/TaskComponents/Task';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/Tasks',
        element: <Tasks/>
      },{
        path: '/AboutMe',
        element: <AboutMe/>
      },{
        path: '/Tasks/:id',
        element: <Task/>
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
