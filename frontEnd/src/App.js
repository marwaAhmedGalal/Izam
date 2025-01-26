import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navBar';
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
