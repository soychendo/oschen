import React, { useContext } from "react";
import { ExplorerContext } from '@context/ExplorerContext';
import { DEFAULT_EXPLORER } from "@utils/constants";

export const Arrow = () => {

  const { state } = useContext(ExplorerContext)
  const color = state.stack.length > DEFAULT_EXPLORER ? '#eb892d' : '#aaa';

  return (
    <svg 
      style={{color: color}} 
      xmlns="http://www.w3.org/2000/svg" 
      width="25" 
      height="25" 
      fill="currentColor" 
      className="bi bi-arrow-left" 
      viewBox="0 0 16 16"
      > 
      <path 
        fillRule="evenodd" 
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" 
        fill={color}>
      </path> 
    </svg>
  );
}