#!/bin/bash

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# COMPILA TODAS AS VERSÕES A|B DOS SEUS RESPECTIVOS BRANCHS E TRÁS PRA master
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

git checkout hom && \
npm run build && \
rm -rf tmp && \
mkdir -p tmp && \
cp -r application tmp/1 && \
git checkout ft-neutro && \
npm run build && \
cp -r application tmp/2 && \
git checkout master && \
rm -rf public/{1,2} && \
mv tmp/{1,2} public/ && \
rm -rf tmp;


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# REMOVE AS OCORRÊNCIAS À \ EM public/1
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sed -e 's,src="/,src=",g' \
		-e 's,content="/,content=",g' \
		-e 's,href="/,href=",g' \
		public/1/index.html > public/1/index-tmp.html
rm -rf public/1/index.html && mv public/1/index-tmp.html public/1/index.html
# REPÕE A REFERÊNCIA AO SCRIPT DE MAXMIND QUE COMEÇA COM //
sed -e 's,src="/,src="//,g' \
		public/1/index.html > public/1/index-tmp.html
rm -rf public/1/index.html && mv public/1/index-tmp.html public/1/index.html


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# REMOVE AS OCORRÊNCIAS À \ EM public/2
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sed -e 's,src="/,src=",g' \
		-e 's,content="/,content=",g' \
		-e 's,href="/,href=",g' \
		public/2/index.html > public/2/index-tmp.html
rm -rf public/2/index.html && mv public/2/index-tmp.html public/2/index.html
# REPÕE A REFERÊNCIA AO SCRIPT DE MAXMIND QUE COMEÇA COM //
sed -e 's,src="/,src="//,g' \
		public/2/index.html > public/2/index-tmp.html
rm -rf public/2/index.html && mv public/2/index-tmp.html public/2/index.html


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# SEND STATUS
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo 'OK... atualize o git';
