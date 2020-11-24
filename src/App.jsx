import React, { useState } from "react";

import {
  HomeContainer,
  HomeWrap,
  DecrementBtn,
  IncrementBtn,
  NumWrap,
  NumEl,
  ResetBtn,
} from "./AppElements.jsx";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <HomeContainer>
        <NumWrap>
          <NumEl>{number}</NumEl>
        </NumWrap>
        <HomeWrap>
          <DecrementBtn
            placeholder="decrement"
            type="submit"
            onClick={() => setNumber(number - 1)}
          >
            Decrement
          </DecrementBtn>
          <IncrementBtn
            placeholder="increment"
            type="submit"
            onClick={() => setNumber(number + 1)}
          >
            Increment
          </IncrementBtn>
          <ResetBtn onClick={() => setNumber(0)}>Reset</ResetBtn>
        </HomeWrap>
      </HomeContainer>
    </>
  );
}

export default App;
