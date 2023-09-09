quality=$1;

for x in ls public/assets/argomentos/**/**/*.jp*g; do  cwebp -q $quality $x -o ${x%.jp*g}.webp; done

exit 0;
