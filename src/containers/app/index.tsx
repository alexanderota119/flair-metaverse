/**import modules */
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
/**import routes */
import AppRoutes from 'app/routes';
/**import custom style as global */
import GlobalStyle from 'styles/global';
/**import custom components */
import Loading from 'components/loading';

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
