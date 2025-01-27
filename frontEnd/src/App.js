import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemList from './components/ItemList';
import MainPage from './pages/mainPage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';

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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>

    </div>
  );
}

export default App;
