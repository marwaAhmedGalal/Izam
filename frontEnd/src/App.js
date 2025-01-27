import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemList from './components/ItemList';
import MenuList from './components/MenuList';
import MainPage from './pages/mainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <MainPage />
        
      </>
    ),
  },
  {
    path: "/item-list", 
    element: (
      <>
        <NavBar />
        <ItemList /> 
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
