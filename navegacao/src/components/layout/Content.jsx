import React from 'react';
import './Content.css';

import { Routes, Route } from 'react-router-dom';

const Content = (props) => (
  <main className='Content'>
    <Routes>
      {/* <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/param/:id'
        element={<Param />}
      />
      <Route
        path='/'
        exact
        element={<Home />}
      />
      <Route
        path='*'
        element={<NotFound />}
      /> */}
    </Routes>
  </main>
);

export default Content;
