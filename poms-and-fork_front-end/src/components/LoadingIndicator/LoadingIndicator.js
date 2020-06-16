import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const Root = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`;

const Ring1 = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid rgb(0,0,0);
	border-radius: 50%;
	animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: rgb(0,0,0) transparent transparent transparent;
`;

const Ring2 = styled(Ring1)`
	animation-delay: -0.45s;
`;

const Ring3 = styled(Ring1)`
	animation-delay: -0.3s;
`;
const Ring4 = styled(Ring1)`
	animation-delay: -0.15s;
`;

function LoadingIndicator() {
  return (
    <Root>
      <Ring1/>
      <Ring2/>
      <Ring3/>
      <Ring4/>
    </Root>
  );
};

export default LoadingIndicator;