import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <input ref={ref} {...props.input} />
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.inputErrors[props.input.id] && (
        <div className={classes.error}>
          <span>{props.inputErrors[props.input.id]}</span>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
