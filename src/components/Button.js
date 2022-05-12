import styled from "styled-components";

export const Button = styled.button`
  background-color: hsl(210, 11%, 25%);
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: hsl(217, 12%, 63%);
  margin-top: 1rem;

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: hsl(217, 12%, 63%);
  }

  &:focus {
    color: hsl(0, 0%, 100%);
    background-color: hsl(25, 97%, 53%);
  }

`;

export const SubmitButton = styled.button`
  background-color: hsl(25, 97%, 53%);
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  border: none;
  color: hsl(0, 0%, 100%);
  padding: 10px 76px;
  margin-top: 2rem;

  &:hover {
    color: hsl(25, 97%, 53%);
    background-color: hsl(0, 0%, 100%);
  }

  &:focus {
    color: hsl(25, 97%, 53%);
    background-color: hsl(0, 0%, 100%);
  }


`;
