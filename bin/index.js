#! /usr/bin/env node
const { exec, execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`);
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }

    return true;
}

const repoName = 'https://github.com/johnliveeoroncillo/tsnode-rest-boilerplate.git';
const folderName = 'tsnode-rest-boilerplate';
const gitCheckoutCommand = `git clone --depth 1 ${repoName}`;
// const installCommand = `cd ${folderName}`;

console.log(`Cloning the repository`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

// console.log(`Installing dependencies`);
// const installedDeps = runCommand(installCommand);
// if (!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready to use my boilerplate`);
console.log(`Install dependencies first! cd ${folderName} && npm i && npm i -g typescript ts-node`);
console.log(`[DEVELOPMENT] cd ${folderName} && npm run dev`);
console.log(`[BUILD] cd ${folderName} && npm run build`);
console.log(`[PRODUCTION] cd ${folderName} && npm run start`);