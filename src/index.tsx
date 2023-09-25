import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import EditConfigs from './components/EditConfigs';
import PlayScreen from './components/PlayScreen';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: 'edit-config/:name', element:<EditConfigs/>},
  {path: 'new-config', element:<EditConfigs/>},
  {path: 'playing', element: <PlayScreen/>}
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </RecoilRoot>
);


