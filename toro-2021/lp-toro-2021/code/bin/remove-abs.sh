#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# REMOVE AS OCORRÊNCIAS À / EM public
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sed -e 's,src="/,src=",g' \
		-e 's,content="/,content=",g' \
		-e 's,href="/,href=",g' \
		application/index.html > application/index-tmp.html
rm -rf application/index.html && mv application/index-tmp.html application/index.html
# REPÕE A REFERÊNCIA À SCRIPTS EXTERNOS SEM PROTOCOLO (COMO MAXMIND) QUE COMEÇAM COM //
sed -e 's,src="/,src="//,g' \
		application/index.html > application/index-tmp.html
rm -rf application/index.html && mv application/index-tmp.html application/index.html
sed -e 's,content="/,content="//,g' \
		application/index.html > application/index-tmp.html
rm -rf application/index.html && mv application/index-tmp.html application/index.html
sed -e 's,href="/,href="//,g' \
		application/index.html > application/index-tmp.html
rm -rf application/index.html && mv application/index-tmp.html application/index.html

echo "- Todos os caminhos absolutos de / foram substituidos por caminhos relativos";
