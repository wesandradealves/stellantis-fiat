quality=$1;

for x in ls public/assets/360/nav/*.jpg; do  cavif -q $quality -e $x -o ${x%.jpg}.avif; done
for x in ls public/assets/features/**/**/*.jpg; do  cavif -q $quality -e $x -o ${x%.jpg}.avif; done
for x in ls public/assets/galeria/**/*.jpg; do  cavif -q $quality -e $x -o ${x%.jpg}.avif; done
for x in ls public/assets/galeria-trekking/**/*.jpg; do  cavif -q $quality -e $x -o ${x%.jpg}.avif; done
for x in ls public/assets/imagens-accordion/**/**/*.jpg; do  cavif -q $quality -e $x -o ${x%.jpg}.avif; done

exit 0;
