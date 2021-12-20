import { useRef } from "react";
import Link from "next/link";
import Input from "../UI/inputs/Input";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  let formErrors = {};

  const validateLength = (str, inputName, minLength = 0, maxLength = 20) => {
    const errors = {};
    const trimmedStr = str.trim();

    if (trimmedStr.length < minLength) {
      errors.minLength = `Le champs ${inputName} doit contenir au moins ${minLength} caractères`;
    }
    if (trimmedStr.length > maxLength) {
      errors.minLength = `Le champs ${inputName} doit contenir moins de ${maxLength} caractères`;
    }
    return errors;
  };

  const emailValidator = async () => {
    let errors = {};
    errors = {
      ...errors,
      ...validateLength(emailInput.current.value, "Email", 5, 60),
    };

    try {
      const data = await fetch("api/users/emails/" + emailInput.current.value);
      const { data: user } = await data.json();
      if (user.length > 0) {
        errors.unique = "Cet email est déjà utilisé";
      }
    } catch (err) {
      console.log(err);
    }

    if (Object.keys(errors).length > 0) {
      formErrors.emailInput = errors;
    }
  };

  const passwordValidator = () => {
    let errors = {};

    const lengthErrors = validateLength(
      passwordInput.current.value,
      "Mot de passe",
      10,
      40
    );

    if (lengthErrors) {
      errors = {
        ...errors,
        ...lengthErrors,
      };
    }

    if (Object.keys(errors).length > 0) {
      formErrors.passwordInput = errors;
    }
  };

  const passwordConfirmValidator = () => {
    if (
      passwordInput.current.value.trim() !==
      passwordConfirmInput.current.value.trim()
    ) {
      formErrors.passwordConfirmInput = "Veuillez confirmer votre mot de passe";
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    formErrors = {};
    await emailValidator();
    await passwordValidator();
    await passwordConfirmValidator();

    if (Object.keys(formErrors).length > 0) {
      console.log(formErrors);
      return;
    }

    fetch("api/users/create", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput.current.value.trim(),
        password: passwordInput.current.value.trim(),
      }),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={emailInput}
        label="Email"
        input={{ type: "email", placeholder: "Email", id: "email" }}
      />
      <Input
        ref={passwordInput}
        label="Mot de passe"
        input={{
          type: "password",
          placeholder: "Mot de passe",
          id: "password",
        }}
      />
      <Input
        ref={passwordConfirmInput}
        label="Confirmer le mot de passe"
        input={{
          type: "password",
          placeholder: "Confirmer le mot de passe",
          id: "passwordConfirm",
        }}
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
