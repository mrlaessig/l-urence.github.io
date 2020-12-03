import React, {useEffect, FC} from 'react';
import styled, {Keyframes} from 'styled-components';
import {keyframes} from 'styled-components';

const shake = keyframes`
  10%,90%{
    transform:translate3d(-1px,0,0) rotate(30deg)
  }
  
  20%,80%{
    transform:translate3d(2px,0,0) rotate(30deg)
  }
  
  30%,50%,70%{
    transform:translate3d(-4px,0,0) rotate(30deg)
  }
  
  40%,60%{
    transform:translate3d(4px,0,0) rotate(30deg)
  }
`;

const Logo = styled.div`
  transform:rotate(30deg);
  
  &:hover {
    animation:${shake} .82s cubic-bezier(.36,.07,.19,.97) both;
    transform:rotate(30deg) backface-visibility: hidden;
    perspective:1000px
  }
`;

interface Props {
  text?: string;
}

export const Burger: FC<Props> = ({text = 'Byteburgers'}) => {
  useEffect(() => {
    const sinScript = document.createElement('script');
    sinScript.src = '/sin.js';

    document.body.appendChild(sinScript);
    return () => {
      document.body.removeChild(sinScript);
    };
  });

  return (
    <Logo>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="85" width="300">
        <path d="M0 80 C40 0, 265 0, 295 80 Z" fill="transparent" stroke="#000000" id="bunTop" />
      </svg>
      <h1>{text}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" id="bottomBuger">
        <path id="sin" stroke="black" fill="transparent" />
        <path
          d="M5 45 L295 45 Q304 60 295 75 L5 75 Q-4 60 5 45"
          stroke="black"
          fill="transparent"
          id="bunBottom"
        />
      </svg>
    </Logo>
  );
};
