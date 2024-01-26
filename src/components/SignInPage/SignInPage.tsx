import './SignInPage.css';

interface ISignIn {
  title: string,
}

function SignInPage({ title }: ISignIn) {
  return (
    <section className="signin-wrapper">
      <button type="button" className="back-to-home-btn">Back to Home</button>
      <h1 className="sign-title">{title}</h1>
      <form className="signup-form">
        <div className="sing-up-controls">
          <label className="form-input" htmlFor="form-email">
            Email
            <input
              type="email"
              className="signup-input"
              name="email"
              id="form-email"
              placeholder="Your email"
            />
          </label>
          <label className="form-input" htmlFor="form-pwd">
            Password
            <input
              type="password"
              className="signup-input"
              name="password"
              id="form-pwd"
              placeholder="Your password"
            />
          </label>
          <button type="button" className="forgot-btn">Forgot Password?</button>
        </div>
        <button type="button" className="sign-in-btn">Sign In</button>
        <div className="signup-section">
          <span className="sign-up-text">Don't have an account?</span>
          <button type="button" className="sign-up-btn">Sign Up</button>
        </div>
      </form>
    </section>
  );
}

export default SignInPage;
