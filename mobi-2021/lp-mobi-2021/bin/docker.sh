
timestamp=$(date +%Y%m%d_%H%M%S);
log_path="`pwd`";
filename=dockerCleanup_$timestamp.log;
log=$log_path/$filename;
cd $log_path;

dockerSpaceBefore() {
    CURRENTSPACE=`docker system df`;
    echo "Current Docker Space:" >> $log;
    echo $CURRENTSPACE >>$log;
}

dockerFind() {
    echo "#####################################################################" >> $log;
    echo "Finding images" >> $log;
    echo "#####################################################################" >> $log;
    REMOVEIMAGES=`docker images | grep " [days|months|weeks]* ago" | awk '{print $3}'`;
    echo "Listing images that needs to be cleaned up" >> $log;
    echo $REMOVEIMAGES >>$log;
}

dockerCleanup() {
    echo "#####################################################################" >> $log;
    echo "Cleaning images" >> $log;
    echo "#####################################################################" >> $log;
    sudo docker rmi -f ${REMOVEIMAGES};
}

dockerSpaceAfter() {
    CURRENTSPACE=`docker system df`;
    echo "Current Docker Space, after clean up:" >> $log;
    echo $CURRENTSPACE >>$log;
}

appCleanup() {
    rm -rf node_modules/ $1
}

appBuildAndRun() {
    source ./code/bin/build.sh;
    docker build --tag $1 . && \
    docker run --publish 9000:80 --detach --name $1 $1;
    open http://localhost:9000;
}

dockerSpaceBefore;
dockerFind;
dockerCleanup;
dockerSpaceAfter;
appCleanup dist/;
appBuildAndRun mobi-landing;
