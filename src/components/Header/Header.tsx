import React, { ReactNode, useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import cx from "classnames";

import { AppHeaderUser } from "./AppHeaderUser";
import { AppHeaderLinks } from "./AppHeaderLinks";

import logoImg from "img/logo_t3.svg";
import logoImgLite from "img/t3-logo-lite.svg";
import logoSmallImg from "img/logo_t3_small.svg";
import { RiMenuLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence as FramerAnimatePresence, motion } from "framer-motion";

import "./Header.scss";
import { Link } from "react-router-dom";
import { isHomeSite } from "lib/legacy";
import { HomeHeaderLinks } from "./HomeHeaderLinks";

// Fix framer-motion old React FC type (solved in react 18)
const AnimatePresence = (props: React.ComponentProps<typeof FramerAnimatePresence> & { children: ReactNode }) => (
  <FramerAnimatePresence {...props} />
);

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

type Props = {
  disconnectAccountAndCloseSettings: () => void;
  openSettings: () => void;
  setWalletModalVisible: (visible: boolean) => void;
  setApprovalsModalVisible: (visible: boolean) => void;
  setDoesUserHaveEmail: (visible: boolean) => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

export function Header({
  disconnectAccountAndCloseSettings,
  openSettings,
  setWalletModalVisible,
  setApprovalsModalVisible,
  setDoesUserHaveEmail,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isNativeSelectorModalVisible, setIsNativeSelectorModalVisible] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  };

  useEffect(() => {
    if (isDrawerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerVisible]);

  return (
    <>
      {isDrawerVisible && (
        <AnimatePresence>
          {isDrawerVisible && (
            <motion.div
              className="App-header-backdrop"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariants}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerVisible(!isDrawerVisible)}
            ></motion.div>
          )}
        </AnimatePresence>
      )}
      {isNativeSelectorModalVisible && (
        <AnimatePresence>
          {isNativeSelectorModalVisible && (
            <motion.div
              className="selector-backdrop"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariants}
              transition={{ duration: 0.2 }}
              onClick={() => setIsNativeSelectorModalVisible(!isNativeSelectorModalVisible)}
            ></motion.div>
          )}
        </AnimatePresence>
      )}
      <header>
        <div className="App-header large">
          <div className="App-header-container-left">
            <Link className="App-header-link-main" to="/">
              {theme === "dark" ? (
                <img src={logoImg} className="big" alt="t3 Logo" />
              ) : (
                <img src={logoImgLite} className="big" alt="t3 Logo" />
              )}

              <img src={logoSmallImg} className="small" alt="t3 Logo" />
            </Link>
            {isHomeSite() ? (
              <HomeHeaderLinks redirectPopupTimestamp={redirectPopupTimestamp} showRedirectModal={showRedirectModal} />
            ) : (
              <AppHeaderLinks redirectPopupTimestamp={redirectPopupTimestamp} showRedirectModal={showRedirectModal} />
            )}
          </div>
          <div className="App-header-container-right">
            <AppHeaderUser
              disconnectAccountAndCloseSettings={disconnectAccountAndCloseSettings}
              openSettings={openSettings}
              setWalletModalVisible={setWalletModalVisible}
              setApprovalsModalVisible={setApprovalsModalVisible}
              setDoesUserHaveEmail={setDoesUserHaveEmail}
              redirectPopupTimestamp={redirectPopupTimestamp}
              showRedirectModal={showRedirectModal}
            />
            <div className="toggle-btn-section">
              <div className={`toggle-checkbox m-vertical-auto`}>
                <input
                  className="toggle-btn__input"
                  type="checkbox"
                  name="checkbox"
                  onChange={handleThemeChange}
                  checked={theme === "light"}
                />
                <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("App-header", "small", { active: isDrawerVisible })}>
          <div
            className={cx("App-header-link-container", "App-header-top", {
              active: isDrawerVisible,
            })}
          >
            <div className="App-header-container-left">
              <div className="App-header-link-main clickable" onClick={() => setIsDrawerVisible(!isDrawerVisible)}>
                <img src={logoImg} className="big" alt="t3 Logo" />
                <img src={logoSmallImg} className="small" alt="t3 Logo" />
              </div>
            </div>
            <div className="App-header-container-right">
              <AppHeaderUser
                disconnectAccountAndCloseSettings={disconnectAccountAndCloseSettings}
                openSettings={openSettings}
                small
                setWalletModalVisible={setWalletModalVisible}
                setApprovalsModalVisible={setApprovalsModalVisible}
                setDoesUserHaveEmail={setDoesUserHaveEmail}
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              />
              <div className="App-header-menu-icon-block" onClick={() => setIsDrawerVisible(!isDrawerVisible)}>
                {!isDrawerVisible && <RiMenuLine className="App-header-menu-icon" />}
                {isDrawerVisible && <FaTimes className="App-header-menu-icon" />}
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isDrawerVisible && (
          <motion.div
            onClick={() => setIsDrawerVisible(false)}
            className="App-header-links-container App-header-drawer"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
            transition={{ duration: 0.2 }}
          >
            {isHomeSite() ? (
              <HomeHeaderLinks
                small
                clickCloseIcon={() => setIsDrawerVisible(false)}
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              />
            ) : (
              <AppHeaderLinks
                small
                openSettings={openSettings}
                clickCloseIcon={() => setIsDrawerVisible(false)}
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
