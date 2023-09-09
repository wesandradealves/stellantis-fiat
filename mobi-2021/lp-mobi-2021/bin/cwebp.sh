quality=$1;

for x in ls public/assets/360/nav/*.jpg; do  cwebp -q $quality $x -o ${x%.jpg}.webp; done
for x in ls public/assets/features/**/**/*.jpg; do  cwebp -q $quality $x -o ${x%.jpg}.webp; done
for x in ls public/assets/galeria/**/*.jpg; do  cwebp -q $quality $x -o ${x%.jpg}.webp; done
for x in ls public/assets/galeria-trekking/**/*.jpg; do  cwebp -q $quality $x -o ${x%.jpg}.webp; done
for x in ls public/assets/imagens-accordion/**/**/*.jpg; do  cwebp -q $quality $x -o ${x%.jpg}.webp; done

exit 0;
