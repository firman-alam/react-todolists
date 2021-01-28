/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";

import Button from "../button/button";
import Container from "../../layout/container";
import Item from "../../layout/item";

// import styles from "./todoForm.module.css";
import * as styles from "./todoForm.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
