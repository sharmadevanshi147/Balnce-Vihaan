import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.todaysUsageParent}>
          <b className={styles.todaysUsage}>Today’s Usage</b>
          <div className={styles.image1Parent}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className={styles.hoorayYou}>
              Hooray ! You met your targets !
            </div>
          </div>
        </div>
      </div>
      <div className={styles.depth4Frame0} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.kParent}>
            <div className={styles.k}>10hr</div>
            <div className={styles.div}>7hr</div>
            <div className={styles.div1}>5hr</div>
            <div className={styles.div2}>3hr</div>
            <div className={styles.div3}>2 hr</div>
            <div className={styles.div4}>1 hr</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
                <div className={styles.frameDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
                <div className={styles.frameChild4} />
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameChild5} />
              <div className={styles.frameChild6} />
            </div>
          </div>
        </div>
        <div className={styles.kGroup}>
          <div className={styles.k1}>Mon</div>
          <div className={styles.div5}>Tue</div>
          <div className={styles.div6}>Wed</div>
          <div className={styles.div7}>Thu</div>
          <div className={styles.div8}>Fri</div>
          <div className={styles.div9}>Sat</div>
          <div className={styles.div10}>Sun</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
