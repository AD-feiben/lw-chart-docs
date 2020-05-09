#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

rm -rf docs

cp -rf docs-src/.vuepress/dist lw-chart-docs/
mv docs-src/.vuepress/dist docs

