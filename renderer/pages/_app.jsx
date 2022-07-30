import React from 'react';

import '../styles/globals.css'; // _app.jsx
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { persistor, store } from '../app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
