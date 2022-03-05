/**import modules */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/**import containers */
import Landing from 'containers/landing';
/**import custom style as global */
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
