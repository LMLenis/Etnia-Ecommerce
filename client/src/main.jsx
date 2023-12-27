import { Suspense } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelmetProvider } from 'react-helmet-async'; // Importa el Provider de Redux
import {store} from './redux/store'; // Importa tu tienda Redux

import App from './app';




// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-8ttgsrczpuh61vza.us.auth0.com"
  clientId="jNbkn37A8GHycO4v7EswBQJ5JblaIE4f"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <Provider store={store}> {/* Agrega el Provider de Redux aquí */}
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
</Provider>
</Auth0Provider>
);
