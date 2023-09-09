#!/bin/bash
#.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#|
#| URL: http:#git.dcodehom.com.br/dcode/dotfiles
#| Title: Project Deploy Pack
#| Usage: sh install
#| Copyright: 2019 Adrian C. Miranda
#| License: Apache License
#| Version: 1.0.0
#|
#'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# SYM: For reading through a symlink, which is usually not what you want
# (you usually don't want to confuse the user this way)
SYM=$(basename "$(test -L "$0" && readlink "$0" || echo "$0")");
DIR=$(dirname "$0");
ABS=$(cd "$DIR"; pwd);

# Load colors
source "$ABS/colors.cfg";

# Navigate to project
cd "$ABS/..";

# Install npm modules only if necessary
if [[ ! -d "node_modules" ]] || [[ $(ls "node_modules" | wc -l) -eq 0 ]]; then
	if [[ -f "package.json" ]]; then
		rm -rf node_modules/ package-lock.json;
		npm install --verbose;
	fi
fi

# Stop proccess
exit 0;
