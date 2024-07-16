import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './styles/TailwindCSS.css'
import  router  from './router.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    {/* <SignInToken> */}
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    {/* </SignInToken> */}
  </Provider>
)
