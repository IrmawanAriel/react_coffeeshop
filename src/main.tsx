import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './styles/TailwindCSS.css'
import  router  from './router.tsx';
import { SignInToken } from './components/context/SignInToken.tsx'
import { Provider } from 'react-redux';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <SignInToken>
      <RouterProvider router={router}/>
    </SignInToken>
  </Provider>
)
