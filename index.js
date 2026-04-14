// 1. API Modules (Using native fetch internally where possible is safer)
export { getBalances, getTransactions } from "./api/stacksApi.js";
export { getDeFiPositions } from "./api/defi.js";
export { getNFTs } from "./api/nft.js";

// 2. Analytics Engines
export { getWalletAnalytics } from "./analytics/walletAnalytic.js";
export { getortfolioValue } from "./analytics/portfolioValue.js";

// 3. Visualitn Helpers
export { buildroiChart } from "./charts/portfolioChart.js";

// 4. Wallet Integration (Requires @stacks/connect v7.10.0+)
export { connectWle} from "./wallet/connectWallet.js"

/**
 * Note for Developers: 
 * As of April 3, 2026, ensure your environment uses axios 1.14.0 or 1.14.2+.
 * Versions 1.14.1 and 0.30.4 were compromised and should be avoided.
 */
