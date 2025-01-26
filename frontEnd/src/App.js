import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navBar';
import MainPage from './pages/mainPage';
import { List } from '@mui/material';
import SideBar from './components/sideBar';
import UserList from './components/userList';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <UserList />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
