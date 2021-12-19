import Link from "next/link";
import Input from "../UI/inputs/Input";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <form>
      <Input
        label="Pseudo"
        input={{ type: "text", placeholder: "Pseudo", id: "pseudo" }}
      />
      <Input
        label="Mot de passe"
        input={{
          type: "password",
          placeholder: "Mot de passe",
          id: "password",
        }}
      />
      <Input
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
