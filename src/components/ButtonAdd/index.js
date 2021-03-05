import React from "react";
import styled from "styled-components";
import "./ButtonAdd.css";

export const Button = styled.button`
  background: none;
  border: 1px solid #f7a400;
  border-radius: 50%;
  box-shadow: 0 0px 25px 1px rgba(547, 164, 0, 0.3);
  color: #3e4491;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  position: relative;
`;

function ButtonAdd({ classButton, onClick }) {
  return (
    <>
      <Button className={classButton} onClick={onClick}>
        <svg className="icon icon-plus">
          <use xlinkHref="#icon-plus"></use>
        </svg>
      </Button>
    </>
  );
}

export default ButtonAdd;
