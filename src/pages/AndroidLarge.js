import TopNav from "../components/TopNav";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./AndroidLarge.module.css";

const AndroidLarge = () => {
  return (
    <div className={styles.androidLarge3}>
      <TopNav />
      <section className={styles.androidLarge3Inner}>
        <div className={styles.frameParent}>
          <FrameComponent2 />
          <div className={styles.frameWrapper}>
            <div className={styles.suggestionsForYouParent}>
              <div className={styles.suggestionsForYou}>
                Suggestions for you
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.textWrapper}>
                    <div className={styles.text}>
                      <p className={styles.cardioFor20}>{`Cardio for 20 `}</p>
                      <p
                        className={styles.minutesOnA}
                      >{`minutes on a daily basis is a `}</p>
                      <p className={styles.greatHobby}>great hobby</p>
                    </div>
                  </div>
                  <div className={styles.textContainer}>
                    <div className={styles.text1}>
                      Decreasing time by 8 minutes daily can get you extra coins
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.stayUpdatedWith}>
                Stay Updated with your friend’s activity
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default AndroidLarge;
