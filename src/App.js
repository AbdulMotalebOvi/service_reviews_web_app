import { RouterProvider } from 'react-router-dom';
import { routers } from './Shared/Routes/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
