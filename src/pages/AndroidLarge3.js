import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge3.module.css";

const AndroidLarge3 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/android-large-13");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/android-large-7");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Android Large - 2" to the project
  }, []);

  return (
    <div className={styles.androidLarge12}>
      <div className={styles.topNavBar}>
        <div className={styles.topNav}>
          <header className={styles.statusBarIosIphone}>
            <div className={styles.action}>
              <div className={styles.time}>9:41</div>
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.right}>
                <img
                  className={styles.iconMobileSignal}
                  loading="lazy"
                  alt=""
                  src="/icon--mobile-signal.svg"
                />
                <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
                <img
                  className={styles.statusbarBatteryIcon}
                  loading="lazy"
                  alt=""
                  src="/-statusbarbattery.svg"
                />
              </div>
            </div>
          </header>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.store1}>Store 1</div>
            </div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevron-down.svg"
            />
          </div>
          <div className={styles.topNavInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.wrapperGroup1244830185Parent}>
                    <div className={styles.wrapperGroup1244830185}>
                      <img
                        className={styles.wrapperGroup1244830185Child}
                        alt=""
                        src="/group-1244830185.svg"
                      />
                    </div>
                    <img
                      className={styles.personIcon}
                      loading="lazy"
                      alt=""
                      src="/person.svg"
                    />
                  </div>
                  <h3 className={styles.balnce}>
                    <span className={styles.balnce1}>Balnce</span>
                    <span className={styles.span}>.</span>
                  </h3>
                </div>
              </div>
              <div className={styles.wrapperWalletCash}>
                <img
                  className={styles.walletCashIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1244834249@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.topNavBarChild}
          loading="lazy"
          alt=""
          src="/group-1244830534@2x.png"
        />
      </div>
      <main className={styles.frameMain}>
        <section className={styles.frameSection}>
          <div className={styles.johnDoeParent}>
            <div className={styles.johnDoe}>John Doe</div>
            <div className={styles.age19}>Age : 19 , Male</div>
          </div>
          <div className={styles.walletPointsContainer}>
            <p className={styles.walletPoints}>Wallet Points : 3600</p>
            <p className={styles.asCash}>(1200 as Cash)</p>
          </div>
        </section>
        <section className={styles.frameWrapper1}>
          <div className={styles.instanceParent}>
            <button className={styles.groupButton} onClick={onGroupButtonClick}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild} />
                <div className={styles.loginWrapper}>
                  <div className={styles.login}>Define Targets</div>
                </div>
              </div>
            </button>
            <button className={styles.frameWrapper2}>
              <div className={styles.frameParent1}>
                <div className={styles.frameItem} />
                <div className={styles.loginContainer}>
                  <div className={styles.login1}>Redeem as Cash</div>
                </div>
              </div>
            </button>
            <button
              className={styles.frameWrapper3}
              onClick={onGroupButton2Click}
            >
              <div className={styles.frameParent2}>
                <div className={styles.frameInner} />
                <div className={styles.loginFrame}>
                  <div className={styles.login2}>Explore Offers</div>
                </div>
              </div>
            </button>
          </div>
        </section>
        <div className={styles.frameDiv}>
          <div className={styles.logoutWrapper} onClick={onGroupContainerClick}>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AndroidLarge3;
