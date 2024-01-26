import './SuccessPage.css';

interface ISignIn {
  title: string,
  confirmText: string,
  registrationDone: string,
  btnText: string
}

function SuccessPage({
  title, confirmText, registrationDone, btnText,
}: ISignIn) {
  return (
    <section className="sign-wrapper">
      <button type="button" className="back-to-home-btn">Back to Home</button>
      <h1 className="sign-title">{title}</h1>
      <div className="success-form">
        <span className="success-text">{confirmText}</span>
        <span className="success-text">{registrationDone}</span>
        <button type="button" className="go-home-btn">{btnText}</button>
      </div>
    </section>
  );
}

export default SuccessPage;
