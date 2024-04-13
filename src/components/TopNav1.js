import { useMemo } from "react";
import styles from "./TopNav1.module.css";

const TopNav1 = ({ statusBarIOSIPhoneMarginLeft, onProfileContainerClick }) => {
  const topNavStyle = useMemo(() => {
    return {
      marginLeft: statusBarIOSIPhoneMarginLeft,
    };
  }, [statusBarIOSIPhoneMarginLeft]);

  return (
    <div className={styles.topNav} style={topNavStyle}>
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
      <div className={styles.mainContainer}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.profileContainerParent}>
              <div
                className={styles.profileContainer}
                onClick={onProfileContainerClick}
              >
                <div className={styles.frameGroup}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.store1}>Store 1</div>
                  </div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
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
              <h2 className={styles.balnce}>
                <span className={styles.balnce1}>Balnce</span>
                <span className={styles.span}>.</span>
              </h2>
            </div>
          </div>
          <div className={styles.wrapperFrame1244834249}>
            <img
              className={styles.wrapperFrame1244834249Child}
              loading="lazy"
              alt=""
              src="/frame-1244834249@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav1;
