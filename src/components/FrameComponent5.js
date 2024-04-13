import { useCallback } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Android Large - 9" to the project
  }, []);

  return (
    <section className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameWrapper4}>
                          <div className={styles.financeWalletParent}>
                            <div className={styles.financeWallet}>
                              <div className={styles.ellipseParent}>
                                <div className={styles.frameItem} />
                                <div className={styles.wrapperIconFrame}>
                                  <img
                                    className={styles.iconFrame}
                                    loading="lazy"
                                    alt=""
                                    src="/icon-frame.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.home}>Home</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.frameParent3}>
                        <div className={styles.frameWrapper6}>
                          <img
                            className={styles.frameInner}
                            alt=""
                            src="/group-1244830512.svg"
                          />
                        </div>
                        <div className={styles.friends}>Friends</div>
                      </div>
                    </div>
                    <img
                      className={styles.userUsersGroup}
                      loading="lazy"
                      alt=""
                      src="/user--users-group.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.frameParent4}
              onClick={onFrameContainer1Click}
            >
              <div className={styles.frameWrapper7}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameWrapper8}>
                    <div className={styles.frameParent6}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1244830512.svg"
                      />
                      <img className={styles.financewalletIcon} alt="" />
                    </div>
                  </div>
                  <div className={styles.rewards}>Rewards</div>
                </div>
              </div>
              <img
                className={styles.generalCategory1}
                loading="lazy"
                alt=""
                src="/general--category-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <div className={styles.frameWrapper9}>
              <div className={styles.frameParent9}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/group-1244830512.svg"
                />
                <img className={styles.financewalletIcon1} alt="" />
              </div>
            </div>
            <div className={styles.offers}>Offers</div>
          </div>
          <img className={styles.icon} loading="lazy" alt="" src="/icon1.svg" />
        </div>
        <div className={styles.frameParent10}>
          <div className={styles.frameWrapper10}>
            <div className={styles.frameParent11}>
              <div className={styles.frameWrapper11}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/group-1244830512.svg"
                />
              </div>
              <div className={styles.analytics}>Analytics</div>
            </div>
          </div>
          <img
            className={styles.frameChild3}
            loading="lazy"
            alt=""
            src="/group-1244830519.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
