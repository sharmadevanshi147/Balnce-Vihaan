import { useMemo } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({
  janeDoe,
  succcessfullyManagedToKee,
  propPadding,
  propHeight,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding1,
    };
  }, [propHeight, propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.ellipseWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/ellipse-131@2x.png"
        />
      </div>
      <div className={styles.janeDoeParent} style={frameDiv1Style}>
        <div className={styles.janeDoe}>{janeDoe}</div>
        <div className={styles.succcessfullyManagedToKeepWrapper}>
          <div className={styles.succcessfullyManagedTo}>
            {succcessfullyManagedToKee}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
