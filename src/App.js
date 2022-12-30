import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div >
      <RouterProvider router={router}/>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      
    </div>
  );
}

export default App;
