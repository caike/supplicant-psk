#!/usr/bin/env node
const run = require("./../lib/supplicant-psk.js");

const ssid = process.argv[2];
const plainTextPassword = process.argv[3];

console.log(run(plainTextPassword, ssid));

