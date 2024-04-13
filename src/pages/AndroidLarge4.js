import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge4.module.css";

const AndroidLarge4 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.androidLarge13}>
      <div className={styles.balnceWrapper}>
        <h1 className={styles.balnce}>Balnce.</h1>
      </div>
      <div className={styles.setYourGoalsWrapper}>
        <div className={styles.setYourGoals}>Set your Goals</div>
      </div>
      <section className={styles.textField}>
        <div className={styles.yourMobileNumberContainer}>
          <p
            className={styles.tellUsThe}
          >{`Tell us the screen time you aim to `}</p>
          <p className={styles.achieveInHours}>achieve (in hours)</p>
        </div>
        <div className={styles.textFieldcustomsearchhover}>
          <div
            className={styles.text}
          >{`  1                                                                            Hours `}</div>
        </div>
      </section>
      <button
        className={styles.androidLarge13Inner}
        onClick={onGroupButtonClick}
      >
        <div className={styles.frameParent}>
          <div className={styles.frameChild} />
          <div className={styles.loginWrapper}>
            <div className={styles.login}>Proceed</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AndroidLarge4;
