This module will show you a way to explore, organize and reference scientific literature of use to your research
----------------------------------------------------------------------------------------------------------------
The number of scientific journals and the papers they publish keeps growing. Because a lot of this publishing
only happens online, the limits to article lengths are also being adhered to less strictly. This has led to
a situation where any normal human being can no longer keep abreast of the developments in their field simply
by scanning "all" the relevant journals. Which ones are relevant? Which ones are nonsensical, or predatory?
How to find what you need? How to get access to what you need? How to organize your own knowledge base? And 
how to do this collaboratively? Here we will address this questions and the principles behind them, illustrated
by some current examples.

When you are just getting into a new research topic, you will want to develop an overview of the different
publications that speak to this topic and discover which of these are open access. One tool that you might like
to know about, the 
[open knowledge maps](https://openknowledgemaps.org/vis.php?id=0813a0b7df9325654116a3322c6d5961&query=metabarcoding&service=base) 
tool, shown in [example 1](#ls1) here gives an overview of the concepts related to the keyword "metabarcoding" 
and the 100 most relevant articles related to it, grouped by text similarity. The bubbles show the results of this 
clustering-by-similarity, and in each of these bubbles, the articles are shown (red icons are open access 
publications). As an exercise, now go to google and search with the same keyword. Notice how most of the results
are not relevant papers, but any website that qualifies by google's proprietary algorithms, and no indication is 
given about openness.

ls1
---
![Example 1, using the Open Knowledge Maps tool to search for a keyword](LS1.png)

The example of the Open Knowledge Maps tool showed a very powerful technique that did not require you to have 
a great deal of rigour in composing your search terms: the tool did it for you. Under some circumstances, for
example once you have learned more about the terminology used in a particular field, you may instead want to be
more precise and specific and use commonly agreed-upon terms with an accepted meaning. One example of this
is in the medical field, where so-called MeSH (medical subject headings) terms are commonly used in composing
search queries in the medical literature. Each MeSH term is defined in a 
[controlled vocabulary](https://en.wikipedia.org/wiki/Controlled_vocabulary) and its meaning(s) organised by 
the higher concept(s) it belongs to. By perusing the concept hierarchy for the MeSH term 
[DNA Barcoding, Taxonomic](https://www.ncbi.nlm.nih.gov/mesh/68058893), we discover there are actually two meanings:

1. a technique for typing organisms by matching against a reference database of marker sequences, or
2. the lab technique where such a specific marker (e.g. COI) is amplified and sequenced

If, for example, we only wanted to retrieve publications from pubmed.gov that match the first definition, we
would compose the query as follows:

    "dna barcoding, taxonomic"[MeSH Terms] "Sequence Analysis, DNA"[Mesh:NoExp] 

This query gives, at time of writing, only 537 high-relevance results, whereas searching for `dna barcoding`
yields 3278.

- use a tool to manage your literature locally (e.g. mendeley desktop to watch PDF folder, enrich database with DOIs)
- use an open source tool to assemble relevant literature in a shared bibliography (example: mendeley groups)
- don't enter relevant literature by hand in the bibliography (example: bookmarklet, unpaywall)
#- don't enter citations by hand into whatever article you're writing (example: word plugin)
#- use the appropriate template for the citation style (example: insert bibliography with style)
#DOIs ORCID

You have now had a chance to look at practical ways of exploring scientific literature. By now, you should be
able to:
- Discover relevant literature
- Manage your literature
- Share literature with collaborators
- Insert citations in manuscripts
- Export correctly formatted bibliographies
- Work around some limitations 
