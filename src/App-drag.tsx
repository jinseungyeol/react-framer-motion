import React, { useRef } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
  // drag: {backgroundColor: 'rgba(46, 204, 113)', transition: {duration: 0.5}}
}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null); //특정 Element를 잡을 수 있는 방법
  console.log(biggerBoxRef)

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef} //biggerBoxRef까지로 제약을 걸어줌
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          // whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;