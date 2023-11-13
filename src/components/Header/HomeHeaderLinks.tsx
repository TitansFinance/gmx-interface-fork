import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImgLight from "img/logo_t3-light.svg";
import logoImgDark from "img/logo_t3-dark.svg";
import { ThemeContext } from "store/ThemeProvider";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { HeaderLink } from "./HeaderLink";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

type HomeLink = { label: string; link: string; isHomeLink?: boolean | false };

const HOME_MENUS: HomeLink[] = [
  {
    label: t`App`,
    isHomeLink: true,
    link: "/trade",
  },
  {
    label: t`Protocol`,
    link: "https://github.com/gmx-io",
  },
  {
    label: t`Governance`,
    link: "https://gov.gmx.io/",
  },
  {
    label: t`Voting`,
    link: "https://snapshot.org/#/gmx.eth",
  },
  {
    label: t`Docs`,
    link: "https://gmxio.gitbook.io/gmx/",
  },
];

export function HomeHeaderLinks({ small, clickCloseIcon, redirectPopupTimestamp, showRedirectModal }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <Link className="App-header-link-main" to="/">
            <img src={theme.isLight ? logoImgLight : logoImgDark} alt="t3 Logo" />
          </Link>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX color={"black"} style={{ color: "blue" }} />
          </div>
        </div>
      )}
      {HOME_MENUS.map(({ link, label, isHomeLink = false }) => {
        return (
          <div key={label} className="App-header-link-container">
            {isHomeLink ? (
              <HeaderLink
                to={link}
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              >
                {label}
              </HeaderLink>
            ) : (
              <ExternalLink href={link}>{label}</ExternalLink>
            )}
          </div>
        );
      })}
    </div>
  );
}
