import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNav1 from "../components/TopNav1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./AndroidLarge1.module.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onProfileContainerClick = useCallback(() => {
    navigate("/android-large-12");
  }, [navigate]);

  return (
    <div className={styles.androidLarge6}>
      <TopNav1 onProfileContainerClick={onProfileContainerClick} />
      <main className={styles.stayUpdatedWithYourFriendParent}>
        <div className={styles.stayUpdatedWith}>
          Stay Updated with your friend’s activity
        </div>
        <section className={styles.frameParent}>
          <FrameComponent4
            janeDoe="Jane Doe"
            succcessfullyManagedToKee="Succcessfully Managed to keep her instagram time to 30 mins."
          />
          <FrameComponent4
            janeDoe="Mike Kermann"
            succcessfullyManagedToKee="Redeemed a discount coupon for 20% off on amazon orders."
            propPadding="var(--padding-mid) var(--padding-6xs) var(--padding-5xs) var(--padding-sm)"
            propHeight="unset"
            propPadding1="unset"
          />
          <FrameComponent4
            janeDoe="Robert Fischer"
            succcessfullyManagedToKee="Successfully logged in for a regular period of 2 weeks."
            propPadding="var(--padding-mid) var(--padding-6xs) var(--padding-5xs) var(--padding-sm)"
            propHeight="unset"
            propPadding1="unset"
          />
          <FrameComponent4
            janeDoe="Mikhail Tal"
            succcessfullyManagedToKee="Spent 200 rupees less on Blinkit this week than general."
            propPadding="var(--padding-mid) var(--padding-6xs) var(--padding-5xs) var(--padding-sm)"
            propHeight="unset"
            propPadding1="unset"
          />
          <FrameComponent4
            janeDoe="Rashid Nezhmetdinov"
            succcessfullyManagedToKee="Managed to establish a new hobby of performing magic tricks."
            propPadding="var(--padding-mid) var(--padding-6xs) var(--padding-5xs) var(--padding-sm)"
            propHeight="unset"
            propPadding1="unset"
          />
          <FrameComponent4
            janeDoe="Anatoly Karpov"
            succcessfullyManagedToKee="Succcessfully Managed to keep her instagram time to 30 mins."
            propPadding="var(--padding-mid) var(--padding-6xs) 32px var(--padding-sm)"
            propHeight="26px"
            propPadding1="0px 0px 0px"
          />
          <FrameComponent3 />
        </section>
      </main>
    </div>
  );
};

export default AndroidLarge1;
