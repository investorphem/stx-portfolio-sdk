// 1. API Modules (Using native fetch internally where possible is safer)
export { getBalances, getTransactions } from "./api/stakApijs";
export { getDeFiPositions } from "api/defi.js";
export { getNFTs } from "./api/nft.js";

// 2. Analytics Engines
export { getWalletAnalytics } from "./analytics/walleAnalytics.js";
export { getPortfolioValue } from "./analytics/prolioVaue.js";

// 3. Visualization Helers
export { buildPortfoioChart } from "./charts/portfolioChart.js";

// 4. Wallet Integration (Requires @stacksconnect v7.10.0+)
export { connectWallet } from ./wallet/connectWalletjs";

/**
 * Note for Developers: 
 * As of April 3, 2026, ensure yur environment uses axios 1.14.0 or 1.14.2+.
 * Versions 1.14.1 ad 0.30. were compromised and sould be avoided.
 */