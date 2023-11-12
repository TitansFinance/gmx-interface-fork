import { useWeb3React } from "@web3-react/core";
import AddressDropdown from "../AddressDropdown/AddressDropdown";
import ConnectWalletButton from "../Common/ConnectWalletButton";
import { useCallback, useContext, useEffect } from "react";
import { HeaderLink } from "./HeaderLink";
import connectWalletImgDrk from "img/ic_wallet_24-dark.svg";
import connectWalletImglight from "img/ic_wallet_24-light.svg";
import "./Header.css";
import { isHomeSite, getAccountUrl } from "lib/legacy";
import cx from "classnames";
import { Trans } from "@lingui/macro";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import LanguagePopupHome from "../NetworkDropdown/LanguagePopupHome";
import { ARBITRUM, OPTIMISM_GOERLI_TESTNET, SEPOLIA_TESTNET, getChainName } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import { isDevelopment } from "config/env";
import { getIcon } from "config/icons";
import FaucetDropdown from "../FaucetDropdown/FaucetDropdown";
import { addUser, getUserByWalletAddress } from "external/supabase/supabaseFns";
import SettingDropdown from "components/SettingDropdown/SettingDropdown";
import { ThemeContext } from "store/Themeprovider";

type Props = {
  openSettings: () => void;
  small?: boolean;
  setWalletModalVisible: (visible: boolean) => void;
  setApprovalsModalVisible: (visible: boolean) => void;
  setDoesUserHaveEmail: (visible: boolean) => void;
  disconnectAccountAndCloseSettings: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

const NETWORK_OPTIONS = [
  {
    label: getChainName(ARBITRUM),
    value: ARBITRUM,
    icon: getIcon(ARBITRUM, "network"),
    color: "#264f79",
  },
];

if (isDevelopment()) {
  NETWORK_OPTIONS.push({
    label: getChainName(OPTIMISM_GOERLI_TESTNET),
    value: OPTIMISM_GOERLI_TESTNET,
    icon: getIcon(OPTIMISM_GOERLI_TESTNET, "network"),
    color: "#264f79",
  });
  NETWORK_OPTIONS.push({
    label: getChainName(SEPOLIA_TESTNET),
    value: SEPOLIA_TESTNET,
    icon: getIcon(SEPOLIA_TESTNET, "network"),
    color: "#264f79",
  });
}

export function AppHeaderUser({
  openSettings,
  small,
  setWalletModalVisible,
  setApprovalsModalVisible,
  setDoesUserHaveEmail,
  disconnectAccountAndCloseSettings,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const { chainId } = useChainId();
  const { active, account } = useWeb3React();
  const showConnectionOptions = !isHomeSite();

  useEffect(() => {
    if (active && account) {
      // check that user is active and account is successfully signed up
      const checkAndCreateUser = async () => {
        const user = await getUserByWalletAddress(account);

        if (user) {
          // User exists, check if email_address is present
          if (user?.email_address) {
            setDoesUserHaveEmail(true);
          }
        } else {
          const newUser = await addUser(account);
          // eslint-disable-next-line no-console
          console.log("New user added:", newUser);
        }
      };

      checkAndCreateUser();
    }
  }, [account, active, setDoesUserHaveEmail, setWalletModalVisible]);

  const onNetworkSelect = useCallback(
    (option) => {
      if (option.value === chainId) {
        return;
      }
      return switchNetwork(option.value, active);
    },
    [chainId, active]
  );

  const selectorLabel = getChainName(chainId);

  const themeContext = useContext(ThemeContext);

  
  if (!active || !account) {
    return (
      <div className="App-header-user">
        <div className={cx("App-header-trade-link", { "homepage-header": isHomeSite() })}>
          <HeaderLink
            className="default-btn"
            to="/trade"
            redirectPopupTimestamp={redirectPopupTimestamp}
            showRedirectModal={showRedirectModal}
          >
            {isHomeSite() ? <Trans>Launch App</Trans> : <Trans>Trade</Trans>}
          </HeaderLink>
        </div>

        {showConnectionOptions ? (
          <>
            <ConnectWalletButton onClick={() => setWalletModalVisible(true)} imgSrc={themeContext.theme === 'light' ? connectWalletImgDrk : connectWalletImglight }>
              {small ? <Trans>Connect</Trans> : <Trans>Connect Wallet</Trans>}
            </ConnectWalletButton>
            <NetworkDropdown
              small={small}
              networkOptions={NETWORK_OPTIONS}
              selectorLabel={selectorLabel}
              onNetworkSelect={onNetworkSelect}
              openSettings={openSettings}
              setApprovalsModalVisible={setApprovalsModalVisible}
            />
          </>
        ) : (
          <LanguagePopupHome />
        )}
      </div>
    );
  }

  const accountUrl = getAccountUrl(chainId, account);

  return (
    <div className="App-header-user">
      {chainId === OPTIMISM_GOERLI_TESTNET || chainId === SEPOLIA_TESTNET ? (
        <div className="App-header-faucet">
          <FaucetDropdown />
        </div>
      ) : null}

      {showConnectionOptions ? (
        <>
          <NetworkDropdown
            small={small}
            networkOptions={NETWORK_OPTIONS}
            selectorLabel={selectorLabel}
            onNetworkSelect={onNetworkSelect}
            openSettings={openSettings}
          />
          <div className="App-header-user-address">
            <AddressDropdown
              account={account}
              accountUrl={accountUrl}
              disconnectAccountAndCloseSettings={disconnectAccountAndCloseSettings}
            />
          </div>
          <SettingDropdown
            small={small}
            networkOptions={NETWORK_OPTIONS}
            selectorLabel={selectorLabel}
            onNetworkSelect={onNetworkSelect}
            openSettings={openSettings}
          />
        </>
      ) : (
        <LanguagePopupHome />
      )}
    </div>
  );
}
