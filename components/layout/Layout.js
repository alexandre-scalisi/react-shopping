import Header from "./header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className={classes.layout}>
        <div className={classes.layoutContent}>{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
