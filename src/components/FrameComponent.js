import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='offersText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/android-large-7");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Android Large - 10" to the project
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.componentChild} />
      <footer className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.home}>Home</div>
                        <img
                          className={styles.iconFrame}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <img className={styles.generalHome1} alt="" />
                    <img
                      className={styles.generalHome2}
                      alt=""
                      src="/general--home-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div
                  className={styles.frameParent1}
                  onClick={onFrameContainerClick}
                >
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameWrapper5}>
                        <img
                          className={styles.frameItem}
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
              <div className={styles.frameWrapper6}>
                <div
                  className={styles.frameParent3}
                  onClick={onFrameContainer2Click}
                >
                  <div className={styles.frameWrapper7}>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper8}>
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
                className={styles.frameParent6}
                onClick={onFrameContainer3Click}
              >
                <div className={styles.frameParent7}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameParent8}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1244830512.svg"
                      />
                      <img className={styles.financewalletIcon1} alt="" />
                    </div>
                  </div>
                  <div className={styles.offers} data-scroll-to="offersText">
                    Offers
                  </div>
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div
              className={styles.frameParent9}
              onClick={onFrameContainer1Click}
            >
              <div className={styles.frameWrapper10}>
                <div className={styles.frameParent10}>
                  <div className={styles.frameWrapper11}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-1244830512.svg"
                    />
                  </div>
                  <div className={styles.analytics}>Analytics</div>
                </div>
              </div>
              <img
                className={styles.frameChild2}
                loading="lazy"
                alt=""
                src="/group-1244830519.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent;
