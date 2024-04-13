import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Android Large - 9" to the project
  }, []);

  const onAnalyticsBoxContainerClick = useCallback(() => {
    navigate("/android-large-7");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.timerIconParent}>
                          <div className={styles.timerIcon} />
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
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper6}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-12448305121.svg"
                      />
                    </div>
                    <div className={styles.friends}>Friends</div>
                  </div>
                </div>
                <img
                  className={styles.userUsersGroup}
                  loading="lazy"
                  alt=""
                  src="/user--users-group1.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper7}>
              <div
                className={styles.frameParent4}
                onClick={onFrameContainerClick}
              >
                <div className={styles.frameWrapper8}>
                  <div className={styles.financeWalletParent}>
                    <div className={styles.financeWallet}>
                      <div className={styles.frameParent5}>
                        <img
                          className={styles.frameInner}
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
            <div
              className={styles.analyticsBox}
              onClick={onAnalyticsBoxContainerClick}
            >
              <div className={styles.financeWalletGroup}>
                <div className={styles.financeWallet1}>
                  <div className={styles.frameParent6}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-1244830512.svg"
                    />
                    <img className={styles.financewalletIcon1} alt="" />
                  </div>
                </div>
                <div className={styles.offers}>Offers</div>
              </div>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className={styles.friendProfile}>
            <div className={styles.friendProfileInner}>
              <div className={styles.analyticsBarParent}>
                <div className={styles.analyticsBar}>
                  <img
                    className={styles.analyticsBarChild}
                    alt=""
                    src="/group-1244830512.svg"
                  />
                </div>
                <div className={styles.analytics}>Analytics</div>
              </div>
            </div>
            <img
              className={styles.friendProfileChild}
              loading="lazy"
              alt=""
              src="/group-1244830519.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
