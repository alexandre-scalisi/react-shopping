import Card from "../UI/card/Card";
import classes from "./Register.module.css";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Card>
      <div className={classes.register}>
        <h2 className={classes.title}>Créer un nouveau compte</h2>
        <RegisterForm />
      </div>
    </Card>
  );
};

export default Register;
