import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "components/Common/SEO";

import Footer from "components/Footer/Footer";
import { getPageTitle } from "lib/legacy";

import "./Ecosystem.css";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { ARBITRUM, AVALANCHE } from "config/chains";
import { t } from "@lingui/macro";
import { getIcon } from "config/icons";

const NETWORK_ICONS = {
  [ARBITRUM]: getIcon(ARBITRUM, "network"),
  [AVALANCHE]: getIcon(AVALANCHE, "network"),
};

const NETWORK_ICON_ALTS = {
  [ARBITRUM]: "Arbitrum Icon",
  [AVALANCHE]: "Avalanche Icon",
};

export default function Ecosystem() {
  const gmxPages = [
    {
      title: "TMX Governance",
      link: "https://gov.gmx.io/",
      linkLabel: "gov.gmx.io",
      about: t`TMX Governance Page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Stats",
      link: "https://t3.finance/#/dashboard",
      linkLabel: "stats.gmx.io",
      about: t`TMX Stats Page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Proposals",
      link: "https://snapshot.org/#/gmx.eth",
      linkLabel: "snapshot.org",
      about: t`TMX Proposals Voting page`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Announcements",
      link: "https://t.me/GMX_Announcements",
      linkLabel: "t.me",
      about: t`TMX Announcements and Updates`,
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const communityProjects = [
    {
      title: "TMX Blueberry Club",
      link: "https://www.blueberry.club/",
      linkLabel: "blueberry.club",
      about: t`TMX Blueberry NFTs`,
      creatorLabel: "@xm92boi",
      creatorLink: "https://t.me/xm92boi",
      chainIds: [ARBITRUM],
    },
    {
      title: "TMX Leaderboard",
      link: "https://www.gmx.house/",
      linkLabel: "gmx.house",
      about: t`Leaderboard for TMX traders`,
      creatorLabel: "@Itburnz",
      creatorLink: "https://t.me/Itburnz",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Positions Bot",
      link: "https://t.me/GMXPositions",
      linkLabel: "t.me",
      about: t`Telegram bot for TMX position updates`,
      creatorLabel: "@zhongfu",
      creatorLink: "https://t.me/zhongfu",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Blueberry Pulse",
      link: "https://blueberrypulse.substack.com/",
      linkLabel: "substack.com",
      about: t`TMX Weekly Updates`,
      creatorLabel: "@puroscohiba",
      creatorLink: "https://t.me/puroscohiba",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "DegenClip",
      link: "https://degenclip.com/gmx",
      linkLabel: "degenclip.com",
      about: t`Community curated tweet collection`,
      creatorLabel: "@ox21l",
      creatorLink: "https://t.me/ox21l",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Yield Simulator",
      link: "https://gmx.defisims.com/",
      linkLabel: "defisims.com",
      about: t`Yield simulator for TMX`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Returns Calculator",
      link: "https://docs.google.com/spreadsheets/u/4/d/1mQZlztz_NpTg5qQiYIzc_Ls1OTLfMOUtmEQN-WW8jj4/copy",
      linkLabel: "docs.google.com",
      about: t`Returns calculator for TMX and TLP`,
      creatorLabel: "@AStoicTrader1",
      creatorLink: "https://twitter.com/AStoicTrader1",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Trading Stats",
      link: "https://t.me/GMXTradingStats",
      linkLabel: "t.me",
      about: t`Telegram bot for Open Interest on TMX`,
      creatorLabel: "@SniperMonke01",
      creatorLink: "https://twitter.com/SniperMonke01",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Staking Bot",
      link: "https://t.me/GMX_Staking_bot",
      linkLabel: "t.me",
      about: t`TMX staking rewards updates and insights`,
      creatorLabel: "@GMX_Staking_bot",
      creatorLink: "https://twitter.com/GMX_Staking_bot",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Staking Calculator",
      link: "https://gmxstaking.com",
      linkLabel: "gmxstaking.com",
      about: t`TMX staking calculator`,
      creatorLabel: "@n1njawtf",
      creatorLink: "https://t.me/n1njawtf",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Hedging Simulator",
      link: "https://www.gmxhedge.com/",
      linkLabel: "gmxhedge.com",
      about: t`Simulate your hedge strategy`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM],
    },
    {
      title: "TMX Swaps",
      link: "https://t.me/GMXSwaps",
      linkLabel: "t.me",
      about: t`Telegram bot for TMX Swaps monitoring`,
      creatorLabel: "@snipermonke01",
      creatorLink: "https://twitter.com/snipermonke01",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Position Calculator",
      link: "https://docs.google.com/spreadsheets/d/1OKCeRGU7l-xGx33-siBw_l8x7vP97y4KKKjA2x5LqhQ/edit#gid=0",
      linkLabel: "docs.google.com",
      about: t`Spreadsheet for position calculations`,
      creatorLabel: "@barryfried1",
      creatorLink: "https://twitter.com/barryfried1",
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const dashboardProjects = [
    {
      title: "TMX Referrals Dashboard",
      link: "https://www.gmxreferrals.com/",
      linkLabel: "gmxreferrals.com",
      about: t`Dashboard for TMX referral stats`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Terminal",
      link: "https://gmxterminal.com",
      linkLabel: "gmxterminal.com",
      about: t`TMX explorer for stats and traders`,
      creatorLabel: "@vipineth",
      creatorLink: "https://t.me/vipineth",
      chainIds: [ARBITRUM],
    },
    {
      title: "TMX Analytics",
      link: "https://gmxstats.com/",
      linkLabel: "gmxstats.com",
      about: t`Financial reports and protocol analytics`,
      creatorLabel: "@CryptoMessiah",
      creatorLink: "https://t.me/LarpCapital",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TokenTerminal",
      link: "https://tokenterminal.com/terminal/projects/gmx",
      linkLabel: "tokenterminal.com",
      about: t`TMX fundamentals`,
      creatorLabel: "@tokenterminal",
      creatorLink: "https://twitter.com/tokenterminal",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "CryptoFees",
      link: "https://cryptofees.info",
      linkLabel: "cryptofees.info",
      about: t`Fees generated by TMX`,
      creatorLabel: "@CryptoFeesInfo",
      creatorLink: "https://twitter.com/CryptoFeesInfo",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Shogun Dashboard (Dune Arbitrum)",
      link: "https://dune.com/shogun/gmx-analytics-arbitrum",
      linkLabel: "dune.com",
      about: t`Protocol analytics`,
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [ARBITRUM],
    },
    {
      title: "Shogun Dashboard (Dune Avalanche)",
      link: "https://dune.com/shogun/gmx-analytics-avalanche",
      linkLabel: "dune.com",
      about: t`Protocol analytics`,
      creatorLabel: "@JamesCliffyz",
      creatorLink: "https://twitter.com/JamesCliffyz",
      chainIds: [AVALANCHE],
    },
    {
      title: "TMX Perpetuals Data",
      link: "https://app.laevitas.ch/altsderivs/GMX/perpetualswaps",
      linkLabel: "laevitas.ch",
      about: t`TMX Perpetuals Data`,
      creatorLabel: "@laevitas1",
      creatorLink: "https://twitter.com/laevitas1",
      chainIds: [ARBITRUM],
    },
    {
      title: "TMX Blueberry Leaderboard",
      link: "https://www.blueberryboard.com",
      linkLabel: "blueberryboard.com",
      about: t`GBC NFTs APR tracker and rewards`,
      creatorLabel: "@kyzoeth",
      creatorLink: "https://twitter.com/kyzoeth",
      chainIds: [ARBITRUM],
    },
    {
      title: "TMX Open Trades Ranking and Stats",
      link: "https://dune.com/HanSolar/gmx-open-trade-ranking-and-stats",
      linkLabel: "dune.com",
      about: t`Open trades ranking and stats`,
      creatorLabel: "@hansolar21",
      creatorLink: "https://twitter.com/hansolar21",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "TMX Everything Dashboard",
      link: "https://dune.com/gmxtrader/gmx-dashboard-insights",
      linkLabel: "dune.com",
      about: t`Overall protocol analytics`,
      creatorLabel: "@gmxtrader",
      creatorLink: "https://twitter.com/gmxtrader",
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const integrations = [
    {
      title: "DeBank",
      link: "debank.com",
      linkLabe: "debank.com",
      about: t`DeFi Portfolio Tracker`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1439711532884152324",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Defi Llama",
      link: "https://defillama.com",
      linkLabel: "defillama.com",
      about: t`Decentralized Finance Dashboard`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1438124768033660938",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Dopex",
      link: "https://dopex.io",
      linkLabel: "dopex.io",
      about: t`Decentralized Options Protocol`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1482445801523716099",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Rook",
      link: "https://www.rook.fi/",
      linkLabel: "rook.fi",
      about: t`MEV Optimizer`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/Rook/status/1509613786600116251",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Jones DAO",
      link: "https://jonesdao.io",
      linkLabel: "jonesdao.io",
      about: t`Decentralized Options Strategies`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1482788805635678212",
      chainIds: [ARBITRUM],
    },
    {
      title: "Yield Yak Optimizer",
      link: "https://yieldyak.com/",
      linkLabel: "yieldyak.com",
      about: t`Yield Optimizer on Avalanche`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1484601407378378754",
      chainIds: [AVALANCHE],
    },
    {
      title: "Vovo Finance",
      link: "https://vovo.finance/",
      linkLabel: "vovo.finance",
      about: t`Structured Products`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/VovoFinance/status/1531517177790345217",
      chainIds: [ARBITRUM],
    },
    {
      title: "Stabilize Protocol",
      link: "https://www.stabilize.finance/",
      linkLabel: "stabilize.finance",
      about: t`Yield Vaults`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/StabilizePro/status/1532348674986082306",
      chainIds: [ARBITRUM],
    },
    {
      title: "DODO",
      link: "https://dodoex.io/",
      linkLabel: "dodoex.io",
      about: t`Decentralized Trading Protocol`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1438899138549145605",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Open Ocean",
      link: "https://openocean.finance/",
      linkLabel: "openocean.finance",
      about: t`DEX Aggregator`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1495780826016989191",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Paraswap",
      link: "https://www.paraswap.io/",
      linkLabel: "paraswap.io",
      about: t`DEX Aggregator`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/paraswap/status/1546869879336222728",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "1inch",
      link: "https://1inch.io/",
      linkLabel: "1inch.io",
      about: t`DEX Aggregator`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/GMX_IO/status/1522247451410845696",
      chainIds: [ARBITRUM, AVALANCHE],
    },
    {
      title: "Firebird Finance",
      link: "https://app.firebird.finance/swap",
      linkLabel: "firebird.finance",
      about: t`DEX Aggregator`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/financefirebird/status/1561767094064238595",
      chainIds: [AVALANCHE],
    },
    {
      title: "Yield Yak Swap",
      link: "https://yieldyak.com/swap",
      linkLabel: "yieldyak.com",
      about: t`DEX Aggregator`,
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/yieldyak_/status/1484458884827947008",
      chainIds: [AVALANCHE],
    },
    {
      title: "Plutus",
      link: "https://plutusdao.io/vaults",
      linkLabel: "plutusdao.io",
      about: t`TLP autocompounding vaults`,
      announcementLabel: "medium.com",
      announcementLink: "https://medium.com/@plutusdao.io/product-release-plutus-vaults-d0b0252cdf03",
      chainIds: [ARBITRUM],
    },
    {
      title: "Beefy.com",
      link: "https://app.beefy.com/",
      linkLabel: "beefy.com",
      about: t`TLP and TMX autocompounding vaults`,
      announcementLabel: "beefy.com",
      announcementLink: "https://beefy.com/articles/earn-glp-with-beefy-s-new-glp-strategy-and-vaults/",
      chainIds: [ARBITRUM, AVALANCHE],
    },
  ];

  const telegramGroups = [
    {
      title: "TMX",
      link: "https://t.me/GMX_IO",
      linkLabel: "t.me",
      about: t`Telegram Group`,
    },
    {
      title: "TMX (Chinese)",
      link: "https://t.me/gmxch",
      linkLabel: "t.me",
      about: t`Telegram Group (Chinese)`,
    },
    {
      title: "TMX (Portuguese)",
      link: "https://t.me/GMX_Portuguese",
      linkLabel: "t.me",
      about: t`Telegram Group (Portuguese)`,
    },
    {
      title: "TMX Trading Chat",
      link: "https://t.me/gambittradingchat",
      linkLabel: "t.me",
      about: t`TMX community discussion`,
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="default-container page-layout">
        <div>
          <div className="section-title-block">
            <div className="section-title-icon" />
            <div className="section-title-content">
              <div className="Page-title">
                <Trans>TMX Pages</Trans>
              </div>
              <div className="Page-description">
                <Trans>TMX ecosystem pages.</Trans>
              </div>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {gmxPages.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Community Projects</Trans>
            </div>
            <div className="Page-description">
              <Trans>
                Projects developed by the TMX community. <br />
                Please exercise caution when interacting with any app, apps are fully maintained by community
                developers.
              </Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider" />
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Dashboards</Trans>
            </div>
            <div className="Page-description">
              <Trans>TMX dashboards and analytics.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Partnerships and Integrations</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects integrated with TMX.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {integrations.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div key={item.title} className="App-card">
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img width="16" key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Announcement</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.announcementLink}>{item.announcementLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Telegram Groups</Trans>
            </div>
            <div className="Page-description">
              <Trans>Community-led Telegram groups.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {telegramGroups.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">{item.title}</div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
