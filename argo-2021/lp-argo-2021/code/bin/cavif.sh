quality=$1;

for x in ls public/assets/argomentos/**/**/*.jpg; do  cjpg -q $quality -e $x -o ${x%.jpg}.jpg; done

exit 0;
