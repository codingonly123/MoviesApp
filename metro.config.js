const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Must point to the CSS file relative to the project root
module.exports = withNativeWind(config, { input: "./src/app/globals.css" });
