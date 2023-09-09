#!/bin/bash

cd code       	&& \
npm install   	&& \
npm run build 	&& \
cp -r "bin/amp" "dist/amp" && \
ls -la
