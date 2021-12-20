import { useRef, useState } from "react";
import Link from "next/link";
import Input from "../UI/inputs/Input";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();

  const [inputErrors, setInputErrors] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    setInputErrors({});
    try {
      const response = await fetch("api/users/create", {
        method: "POST",
        body: JSON.stringify({
          email: emailInput.current.value,
          password: passwordInput.current.value,
          passwordConfirm: passwordConfirmInput.current.value,
        }),
      });
      const data = await response.json();

      if (data.message.errors) {
        const errors = {};

        Object.entries(data.message.errors).forEach(([key, value]) => {
          errors[key] = value.properties.message;
        });

        setInputErrors(errors);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={emailInput}
        label="Email"
        input={{
          type: "email",
          placeholder: "Email",
          id: "email",
        }}
        inputErrors={inputErrors}
      />
      <Input
        ref={passwordInput}
        label="Mot de passe"
        input={{
          type: "password",
          placeholder: "Mot de passe",
          id: "password",
        }}
        inputErrors={inputErrors}
      />
      <Input
        ref={passwordConfirmInput}
        label="Confirmer le mot de passe"
        input={{
          type: "password",
          placeholder: "Confirmer le mot de passe",
          id: "passwordConfirm",
        }}
        inputErrors={inputErrors}
      />
      <div className={classes.buttonContainer}>
        <button className={classes.submit}>Créer un compte</button>
        <Link href="/login">
          <a className={classes.link}>Se connecter à un compte existant</a>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
