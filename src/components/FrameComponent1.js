import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.ellipseWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-131@2x.png"
          />
        </div>
        <div className={styles.friendCircle}>
          <div className={styles.janeDoe}>Jane Doe</div>
          <div className={styles.janeActivity}>
            <div className={styles.succcessfullyManagedTo}>
              Succcessfully Managed to keep her instagram time to 30 mins.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
