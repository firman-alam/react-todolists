import { css } from "@emotion/react";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = () =>
  css`
    width: 52%;
    text-align: center;

    color: var(--main-black-color);
    font-size: 3.8rem;
    font-family: "Sofia", sans-serif;
    text-transform: lowercase;
  `;
