import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="text-6xl">
      This is Home
    <Button
      onClick={() => navigate('/register')}
    >
      Register
    </Button>
    </div>
  )
}

export default Home;