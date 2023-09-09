#!/bin/bash

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# COMPILA TODAS AS VERSÕES A|B DOS SEUS RESPECTIVOS BRANCHS E TRÁS PRA ft-laranja
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

git checkout work && \
npm run build && \
rm -rf tmp && \
mkdir -p tmp && \
cp -r application tmp/work && \
git checkout play && \
npm run build && \
cp -r application tmp/play && \
git checkout ft-laranja && \
rm -rf public/{work,play} && \
mv tmp/{work,play} public/ && \
rm -rf tmp;


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# REMOVE AS OCORRÊNCIAS À / EM public/work
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sed -e 's,src="/,src=",g' \
		-e 's,content="/,content=",g' \
		-e 's,href="/,href=",g' \
		public/work/index.html > public/work/index-tmp.html
rm -rf public/work/index.html && mv public/work/index-tmp.html public/work/index.html
# REPÕE A REFERÊNCIA AO SCRIPT DE MAXMIND QUE COMEÇA COM //
sed -e 's,src="/,src="//,g' \
		public/work/index.html > public/work/index-tmp.html
rm -rf public/work/index.html && mv public/work/index-tmp.html public/work/index.html


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# REMOVE AS OCORRÊNCIAS À / EM public/play
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sed -e 's,src="/,src=",g' \
		-e 's,content="/,content=",g' \
		-e 's,href="/,href=",g' \
		public/play/index.html > public/play/index-tmp.html
rm -rf public/play/index.html && mv public/play/index-tmp.html public/play/index.html
# REPÕE A REFERÊNCIA AO SCRIPT DE MAXMIND QUE COMEÇA COM //
sed -e 's,src="/,src="//,g' \
		public/play/index.html > public/play/index-tmp.html
rm -rf public/play/index.html && mv public/play/index-tmp.html public/play/index.html


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# SEND STATUS
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo 'OK... atualize o git';
