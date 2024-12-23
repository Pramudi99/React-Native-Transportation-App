const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add this to handle symlinks correctly and avoid excluding files
config.resolver.blockList = /.*\/node_modules\/.*\/node_modules\/expo\/node_modules/;

module.exports = config;
