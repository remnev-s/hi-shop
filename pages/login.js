import styles from '../styles/login.module.scss';
import { Buttons } from '../components/UI/buttons/buttons';

const Login = () => {
  return (
    <section className={`${styles.login}`}>
      <div className={`${styles.inner} wrapper`}>
        <div className={`${styles.container}`}>
          <form className={`${styles.form}`}>
            <h2 className={`${styles.form_description}`}>Login</h2>
            <fieldset className={`${styles.login_set}`}>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_email}`}
                  type="email"
                  placeholder="Email*"
                  required
                />
              </label>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_password}`}
                  type="password"
                  placeholder="Password*"
                  required
                />
              </label>
              <Buttons mediumButton={true} text="Login" />
              <p className={`${styles.forg_password}`}>Forgotten Password?</p>
            </fieldset>
          </form>
        </div>

        <div className={`${styles.container}`}>
          <form className={`${styles.form}`}>
            <h2 className={`${styles.form_description}`}>Create Account</h2>
            <fieldset className={`${styles.login_set}`}>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_name}`}
                  type="text"
                  placeholder="First Name*"
                  required
                />
              </label>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_last_name}`}
                  type="text"
                  placeholder="Last Name*"
                  required
                />
              </label>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_email}`}
                  type="email"
                  placeholder="Email*"
                  required
                />
              </label>
              <label htmlFor={`${styles.form_field}`}>
                <input
                  className={`${styles.input} ${styles.input_password}`}
                  type="password"
                  placeholder="Password*"
                  required
                />
              </label>
              <Buttons mediumButton={true} text="Register" />
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
