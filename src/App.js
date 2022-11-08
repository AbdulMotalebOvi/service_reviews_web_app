import { RouterProvider } from 'react-router-dom';
import { routers } from './Shared/Routes/Router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
