import { Menu } from "@headlessui/react";
import { t, Trans } from "@lingui/macro";
import { helperToast } from "lib/helperToast";
import { FaChevronDown, FaParachuteBox } from "react-icons/fa";
import "./FaucetDropdown.css";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { getExplorerUrl } from "config/chains";
import Token from "abis/Token.json";
import { getTokenBySymbol, getTokens } from "config/tokens";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { useState, useEffect } from "react";
import WETH from "abis/WETH.json";
import BN from "bignumber.js";

function FaucetDropdown() {
  const { active, account, library } = useWeb3React();
  const { chainId } = useChainId();

  const [amount, setAmount] = useState(1000);
  const [wbtcamount, setWbtcAmount] = useState("0.01");
  const [tokens, setTokens] = useState();

  useEffect(() => {
    if (active && account) {
      const getToken = async () => {
        const token = getTokens(chainId);
        if (token) {
          setTokens(token);
        }
      };

      getToken();
    }
  }, [chainId]);

  function mint(tokenSymbol) {
    let ethamount;
    if (active) {
      const token = getTokenBySymbol(chainId, tokenSymbol);

      if (tokenSymbol === "WBTC") {
        ethamount = new BN(0.1).times(1e8).toString();
      } else {
        ethamount = (amount * 10 ** token.decimals).toLocaleString("fullwide", {
          useGrouping: false,
        });
      }

      if (tokenSymbol === "ETH") {
        const contract = new ethers.Contract(token.address, WETH.abi, library.getSigner());
        contract
          .deposit({
            value: ethers.utils.parseEther(wbtcamount),
          })
          .then(async (res) => {
            const txUrl = getExplorerUrl(chainId) + "tx/" + res.hash;
            helperToast.success(
              <div>
                <Trans>
                  Submitted! <ExternalLink href={txUrl}>View status.</ExternalLink>
                </Trans>
                <br />
              </div>
            );
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e);
            let failMsg;
            if (
              ["not enough funds for gas", "failed to execute call with revert code InsufficientGasFunds"].includes(
                e.data?.message
              )
            ) {
              failMsg = (
                <div>
                  <Trans>
                    There is not enough ETH in your account to send this transaction.
                    <br />
                  </Trans>
                </div>
              );
            } else if (e.message?.includes("User denied transaction signature")) {
              failMsg = t`Transaction was cancelled`;
            } else {
              failMsg = t`Mint failed`;
            }
            helperToast.error(failMsg);
          });
      } else {
        const contract = new ethers.Contract(token.address, Token.abi, library.getSigner());
        contract
          .mint(account, ethamount.toString())
          .then(async (res) => {
            const txUrl = getExplorerUrl(chainId) + "tx/" + res.hash;
            helperToast.success(
              <div>
                <Trans>
                  Submitted! <ExternalLink href={txUrl}>View status.</ExternalLink>
                </Trans>
                <br />
              </div>
            );
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e);
            let failMsg;
            if (
              ["not enough funds for gas", "failed to execute call with revert code InsufficientGasFunds"].includes(
                e.data?.message
              )
            ) {
              failMsg = (
                <div>
                  <Trans>
                    There is not enough ETH in your account to send this transaction.
                    <br />
                  </Trans>
                </div>
              );
            } else if (e.message?.includes("User denied transaction signature")) {
              failMsg = t`Transaction was cancelled`;
            } else {
              failMsg = t`Mint failed`;
            }
            helperToast.error(failMsg);
          });
      }
    } else {
      let failMsg;
      failMsg = t`Please connect to metamask`;
      helperToast.error(failMsg);
    }
  }

  return (
    <Menu>
      <Menu.Button as="div">
        <button className="App-cta small transparent faucet-btn">
          <span className="faucet">Faucet</span>
          <FaChevronDown />
        </button>
      </Menu.Button>
      <div>
        <>
          <Menu.Items as="div" className="menu-itemss">
            {tokens?.map((token) => (
              <>
                {!token.isNative && (
                  <Menu.Item>
                    <div
                      key={token.symbol}
                      className="menu-item"
                      onClick={(e) => {
                        mint(token.symbol);
                      }}
                    >
                      <FaParachuteBox />
                      <p>
                        <Trans>{token.symbol}</Trans>
                      </p>
                    </div>
                  </Menu.Item>
                )}
              </>
            ))}
          </Menu.Items>
        </>
      </div>
    </Menu>
  );
}

export default FaucetDropdown;
