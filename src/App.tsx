import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
`;

const Box = styled(motion.div)`
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1) ;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1) ;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(prev => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? <Circle layoutId='circle' /> : null}
      </Box>
      <Box>
        {!clicked ? null : <Circle layoutId='circle' />}
      </Box>
    </Wrapper>
  );
}

export default App;