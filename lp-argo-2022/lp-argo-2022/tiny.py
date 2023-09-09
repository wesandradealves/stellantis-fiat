#!/usr/bin/env python3

# USAGE: ./tiny.py -k {API KEY} -p {Folder Path}
# version 2.0

import sys
import os
import getopt
import re
import fnmatch
import subprocess
import urllib.request
import platform
import re
import glob

def tinyPNG(path, key):
	accepted_extensions = ["jpg", "jpeg", "png", "webp"]
	files = [f for f in glob.glob(path + "**/*.*", recursive=True) if f.split(".")[-1] in accepted_extensions]
	files.sort()
	rRE = re.compile(r'"url":"(.*?)"')
	i = 0
	t = len(files)
	err = []
	for f in files:
		i += 1
		print("Optimize " + str(i) + " of " + str(t))
		print(f)
		tries = 0
		while tries < 3:
			try:
				print("Trying: " + str(tries + 1))
				rp = os.path.realpath(f)
				if platform.system() == 'Darwin' or platform.system() == 'Linux':
					subprocess.Popen('chmod 0777 {0}'.format(rp), stdout=subprocess.PIPE, shell=True)
				else:
					perms = '0755'
					# os.chmod(rp, int(str(perms), base=8))
					# os.chmod(rp, stat.S_IRWXU)
					os.chmod(rp, 0o777)

				a = subprocess.Popen('curl -i --http1.1 --user api:{0} --data-binary @{1} https://api.tinypng.com/shrink'.format(key, rp), stdout=subprocess.PIPE, shell=True)
				data = a.stdout.read().decode('utf-8')
				o = rRE.search(data)
				urllib.request.urlretrieve(o.group(1), rp)
				break
			except Exception as e:
				print('')
				print("Error: " + str(e))
				print('')
				print('')

				tries += 1
				if tries == 3:
					err.append(f)
		if os.path.isdir(path + '/' + f):
			tinyPNG(path + '/' + f + '/', key)
		print('')
		print('')
		
		if len(err) == 0:
			err = 'Compression completed!'
	return err

def main(argv = None):
	path = ''
	key = 'VJl8NKvgj76HcfyYnvRSP0HvqTfwxMMr'
	if argv == None:
		argv = sys.argv
	try:
		opts, args = getopt.getopt(argv[1:], "p:k:", [""])
		for option, value in opts:
			if option in ("-p"): path = value
			if option in ("-k"): key = value
	except Exception as e:
		print('')
		print("Error: " + str(e))
		print('')
		print('')

		pass
	if len(path) > 0 and path[-1] != '/': path = path + '/'
	print(tinyPNG(path, key))

if __name__ == "__main__":
	try:
		main()
	except Exception as e:
		print('')
		print("Error: " + str(e))
		print('')
		print('')

		pass

