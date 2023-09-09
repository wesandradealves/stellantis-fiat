#!/bin/bash

appCleanup() {
	local dist=$1;
	rm -rf node_modules/ $dist;
	source ./code/bin/build.sh;
}

appBuildAndRun() {
	local name=$1;
	local port=$2;
	cd $(pwd);
	{ docker stop $(docker ps -a -q --filter="name=$name"); } ||
	{ printf "$name was stopped!\n"; }
	docker rm $name;
	docker rmi $name;
	docker build --tag $name .;
	docker run --publish $port:80 --detach --name $name $name;
	printf "opening: http://localhost:$port\n";
	open "http://localhost:$port";
}

appCleanup application/;
appBuildAndRun jeep-renegade 9000;
