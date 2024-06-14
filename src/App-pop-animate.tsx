import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion"

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 100px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50
  }
}

function App() {
  const [showing, setShowing] = useState(false);

  const toggleShow = () => setShowing((prev) => !prev);

  return (
    <Wrapper >
      <button onClick={toggleShow}>클릭</button>
      <AnimatePresence>{showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}</AnimatePresence> {/* 사라지는 컴포넌트를 애니메이트함, visible상태여야하고 내부에는 조건문이 있어야됨 */}
    </Wrapper>
  );
}

export default App;