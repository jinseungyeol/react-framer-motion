import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"
    ])
  const {scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  /* useEffect(() => {
    // x.on('change', () => { console.log(x.get()) });
    // gradient.on('change', () => { console.log(gradient.get()) });
    scrollY.on('change', () => {
      console.log(scrollY.get(), scrollYProgress.get())
    });
  }, [scrollY, scrollYProgress]); */
  return (
    <Wrapper style={{background: gradient}}>
      <button onClick={() => {x.set(200)}}>click me</button>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
      {/* x: x 를 x로 줄일 수있음 */}
    </Wrapper>
  );
}

export default App;