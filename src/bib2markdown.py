#!/usr/bin/python

# Usage: python bib2markdown.py infile.bib > outfile.md

import bibtexparser
import sys

with open(sys.argv[1]) as bibtex_file:
    bibtex_str = bibtex_file.read()

bib_database = bibtexparser.loads(bibtex_str)

for entry in bib_database.entries:

	# this is an HTML anchor so we can refer to the reference entry in markdown as:
	# [Foo2017](../REFERENCES#Foo2017)
	print '<a name="{}">'.format(entry['ID'])
	
	# bibtex separates authors with ' and '
	authors = entry['author'].replace(' and ', ', ')
	
	# these keys are (supposed to be) in every entry
	print '**{}**. {}. {}. _{}_.'.format(
		authors, 
		entry['year'], 
		entry['title'], 
		entry['journal']),
	
	# not every entry has these
	if 'volume' in entry:
		print '**{}**'.format(entry['volume']),
		if 'number' in entry:
			print '({}):'.format(entry['number']),
		else:
			print ':',
	else:
		if 'number' in entry:
			print '{}:'.format(entry['number']),
	if 'pages' in entry:
		print '{}.'.format(entry['pages']),
	
	# should appear in every entry:
	print '[[{}](http://doi.org/{})]\n'.format(entry['doi'],entry['doi'])