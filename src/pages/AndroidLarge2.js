import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TopNav1 from "../components/TopNav1";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./AndroidLarge2.module.css";

const AndroidLarge2 = () => {
  const navigate = useNavigate();

  const onPersonElementContainerClick = useCallback(() => {
    navigate("/android-large-12");
  }, [navigate]);

  return (
    <div className={styles.androidLarge7}>
      <TopNav1
        statusBarIOSIPhoneMarginLeft="-15px"
        onProfileContainerClick={onPersonElementContainerClick}
      />
      <div className={styles.exclusiveOffersPersonalizedWrapper}>
        <div className={styles.exclusiveOffersPersonalized}>
          Exclusive Offers personalized for you
        </div>
      </div>
      <main className={styles.image}>
        <section className={styles.imageInner}>
          <div className={styles.mainComponentParent}>
            <div className={styles.mainComponent}>
              <div className={styles.image6Wrapper}>
                <img
                  className={styles.image6Icon}
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
              <div className={styles.scripexchangeParent}>
                <div className={styles.scripexchange}>Myntra</div>
                <div className={styles.frameParent}>
                  <div className={styles.scripexchangeGroup}>
                    <div className={styles.scripexchange1}>
                      50% off on tshirts, shorts and summerwear.
                    </div>
                    <div className={styles.expandMoreWrapper}>
                      <img
                        className={styles.expandMoreIcon}
                        alt=""
                        src="/expand-more.svg"
                      />
                    </div>
                  </div>
                  <FormControl
                    className={styles.scripexchange2}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "137px",
                      height: "21px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff3f3",
                        fontSize: 16,
                        fontWeight: "SemiBold",
                        fontFamily: "Outfit",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>Expires April 30 , 2024</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.mainComponent1}>
              <div className={styles.image5Wrapper}>
                <img
                  className={styles.image5Icon}
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <div className={styles.expandMoreIcon1}>
                <div className={styles.scripexchange3}>Just Herbs</div>
                <div className={styles.frameGroup}>
                  <div className={styles.scripexchangeContainer}>
                    <div
                      className={styles.scripexchange4}
                    >{`15% off on Product on a min. Purchase of 3 green tea bags `}</div>
                    <div className={styles.scripExchange}>
                      <img
                        className={styles.expandMoreIcon2}
                        alt=""
                        src="/expand-more.svg"
                      />
                    </div>
                  </div>
                  <FormControl
                    className={styles.scripexchange5}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "137px",
                      height: "21px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff3f3",
                        fontSize: 16,
                        fontWeight: "SemiBold",
                        fontFamily: "Outfit",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>Expires April 30 , 2024</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.mainComponent2}>
              <div className={styles.image7Wrapper}>
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-7@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.scripexchange6}>Swiggy</div>
                <div className={styles.frameContainer}>
                  <div className={styles.scripexchangeParent1}>
                    <div className={styles.scripexchange7}>
                      50% off on your favorite fast food restraunts or dine-ins
                    </div>
                    <div className={styles.expandMoreContainer}>
                      <img
                        className={styles.expandMoreIcon3}
                        alt=""
                        src="/expand-more.svg"
                      />
                    </div>
                  </div>
                  <FormControl
                    className={styles.scripexchange8}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "137px",
                      height: "21px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff3f3",
                        fontSize: 16,
                        fontWeight: "SemiBold",
                        fontFamily: "Outfit",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>Expires April 30 , 2024</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.mainComponent3}>
              <div className={styles.image8Wrapper}>
                <img
                  className={styles.image8Icon}
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <div className={styles.scripexchangeParent2}>
                <div className={styles.scripexchange9}>Tanishq</div>
                <div className={styles.frameParent1}>
                  <div className={styles.scripexchangeParent3}>
                    <div className={styles.scripexchange10}>
                      15% off on your first purchase at Tanishq
                    </div>
                    <div className={styles.expandMoreFrame}>
                      <img
                        className={styles.expandMoreIcon4}
                        alt=""
                        src="/expand-more.svg"
                      />
                    </div>
                  </div>
                  <FormControl
                    className={styles.scripexchange11}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "137px",
                      height: "21px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "21px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff3f3",
                        fontSize: 16,
                        fontWeight: "SemiBold",
                        fontFamily: "Outfit",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>Expires April 30 , 2024</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent5 />
      </main>
    </div>
  );
};

export default AndroidLarge2;
