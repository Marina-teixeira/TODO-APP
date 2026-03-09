// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  // Convex publica código em .cjs, precisamos que o Metro olhe para ele
  config.resolver.sourceExts.push("cjs");
  return config;
})();