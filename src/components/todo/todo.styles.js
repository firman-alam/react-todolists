import { css } from "@emotion/react";

export const todo = ({ theme }) =>
  css`
    position: relative;
    flex: 1 auto;
    text-align: center;
    max-height: 34px;
    margin: 16px 0 0;
    font-family: "Sofia", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid var(--main-red-color);
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    color: ${theme.color.primary.black};
  `;
