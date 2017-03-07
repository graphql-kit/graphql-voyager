#!/usr/bin/env node
'use strict';
require('shelljs/global');

const RELEASES = './demo-dist/releases/';
const DIST_FILES = [
  './dist/voyager.css',
  './dist/voyager.min.js',
  './dist/voyager.min.js.map',
  './dist/voyager.worker.js'
];

const path = require('path');

set('-e');
set('-v');

// build
exec('npm run build:demo');
exec('npm run build:release');

const version = 'v' + require(path.join(__dirname, '../package.json')).version + '/';
const versionDir = path.join(RELEASES, version);
const v1Dir = path.join(RELEASES, 'v1.x/');
mkdir('-p', versionDir)
mkdir('-p', v1Dir);
cp(DIST_FILES, versionDir);
cp(DIST_FILES, v1Dir);
