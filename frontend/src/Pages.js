import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const Pages = () => {
  return (
    <>
      <Routes>
				<Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Pages
