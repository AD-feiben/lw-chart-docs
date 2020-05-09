#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

rm -rf docs
rm -rf lw-chart-docs

mkdir lw-chart-docs

cp -rf ~/test/lightweight-chart/dist lw-chart-docs/dist/
cp -rf docs-src/.vuepress/dist lw-chart-docs/docs/
mv docs-src/.vuepress/dist docs

