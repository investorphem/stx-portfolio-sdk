/**
 * Stacks Network Configuration
 * Updated for Epoch 3.4 Activation (April 2, 2026)
 */

export const STACKS_API_MAINNET = "https://api.hiro.so";
export const STACKS_API_TESTNET = "https://api.testnet.hiro.so";

// Default network setting
export const NETWORK = "mainnet";

// Helper to get the base URL based on the current network
export const getApiUrl = (network = NETWORK) => {
  return network === "mainnet" ? STACKS_API_MAINNET : STACKS_API_TESTNET;
};

/**
 * Security Notice:
 * This SDK is compatible with axios 1.14.0 or 1.14.2+.
 * Avoid versions 1.14.1 and 0.30.4 due to the March 31 compromise.
 */
export const SDK_VERSION = "1.0.8";
