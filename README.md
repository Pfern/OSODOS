OSODOS: Open Science, Open Data, Open Source
===============================================
About this project
------------------
This repository contains reading/teaching materials that touch on the following topics:
- Open Access scholarly publishing
- Open Source software development
- Open Data integration and sharing

These materials are intended to be freely disseminated as an e-book and/or a website, which can be accessed at:
- http://osodos.org
- http://pfern.github.io/OSODOS/gitbook/

Directory layout
----------------
- **data** - contains any structured data files that are needed for publishing the materials. This includes
  machine readable bibliographic data, and possibly other types of data, such as tables or lists.
- **docs** - contains i) the prose itself, in markdown format ii) any embedded images, iii) the prose as 
  generated HTML.
- **node_modules** - contains `Node.js` dependencies. As this is 3rd party code that we haven't touched this
  should probably be removed.
- **src** - contains any scripts needed for publishing the materials. This includes scripts for processing the
  bibliography.
- **book.json** - a configuration file in JSON format for the [gitbook](https://www.gitbook.com/) generator.
- **\_config.json** - a configuration file for the `gh-pages` website. This is possibly an orphaned file to
  be deleted (as we use the gitbook as a website).

How to build/publish
--------------------
1. Check to see if the [Mendeley library](https://www.mendeley.com/community/osodos/) has newer records than 
   the [markdown bibliography](https://github.com/Pfern/OSODOS/blob/master/docs/REFERENCES/README.md). If yes,
   export the Mendeley library to BibTeX (using the Mendeley Desktop program) and commit it to the repository,
   overwriting the [current bibtex export](https://github.com/Pfern/OSODOS/blob/master/data/references.bib).
2. Run the [conversion script](https://github.com/Pfern/OSODOS/blob/master/src/bib2markdown.py), i.e.:
   `python src/bib2markdown.py data/references.bib > docs/REFERENCES/README.md`

Disclaimers, terms and conditions
---------------------------------
This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
