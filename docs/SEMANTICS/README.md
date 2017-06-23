Be explicit about what you mean in your data, and use common terminology and standards
======================================================================================
In a number of locations in these pages we refer to cases where there is a common understanding
among stakeholders of the meaning of certain terms. For example, in discussing 
[community conventions in open source software development](../SCIENTIFIC_SOFTWARE#community-conventions),
certain specific keywords are used in package names and metadata files describing packages; in the issuing 
of [version numbers](../VERSIONING#version-numbers) for software, where the different parts of a version 
number contain embedded meaning about how one version differs from the next; in literature search, where 
search terms might be anchored to specific interpretations, as in the case of 
[MeSH terms](../LITERATURE_STUDY#medical-subject-headings-mesh); in the description of experiments, where 
[minimal information standards](../DATA_CAPTURE#minimal-information-standards) define checklists of what 
to report about an assay. These are all instances where a community has defined the
[semantics](https://en.wikipedia.org/wiki/Semantics) of terms, usually for the purpose of integrating 
information (articles, software) from different sources. In an open world where we want to share our 
research output with others and others to use our data in turn, similar challenges (and solutions) arise 
when integrating research data. Here we will discuss some of the general principles to guide is in making
our data more amenable to integration.

How to structure data
---------------------
Sometimes your data is [captured](../DATA_CAPTURE) by a machine in such a way that you might never edit
it "by hand" and it is automatically structured according to community standards (such as 
[FASTQ](https://dx.doi.org/10.1093/nar/gkp1137) in the case of high-throughput DNA sequencing). In other
cases, you might collect and collate data by the hand, for example in the field, or while scanning
through the literature or perusing online resources. A common approach is then to enter data in a 
spreadsheet. In this, there are certainly tidy and untidy ways to do this.

<a name="s1"></a>
![Example 1, untidy versus tidy data](journal.pcbi.1005097.g001.PNG)

Consider [example 1](#s1). _Dataset A is untidy because it mixes observational units (species, location of 
observations, measurements about individuals), the units are mixed and listed with the observations, more 
than one variable is listed (both latitude and longitude for the coordinates, and genus and species for the 
species names), and several formats are used in the same column for dates and geographic coordinates. 
Dataset B is an example of a tidy version of dataset A that reduces the amount of information that is 
duplicated in each row, limiting chances of introducing mistakes in the data. By having species in a 
separate table, they can be identified uniquely using the Taxonomic Serial Number (TSN) from the Integrated 
Taxonomic Information System (ITIS), and it makes it easy to add information about the classification of 
these species. It also allows researchers to edit the taxonomic information independently from the table 
that holds the measurements about the individuals. Unique values for each observational unit facilitate 
the programmatic combination of information using "join" operations. With this example, if the focus of the 
study for which these data were collected is based upon the size measurements of the individuals (weight 
and length), information about "where", "when", and "what" animals were measured can be considered metadata. 
Using the tidy format makes this distinction clearer._ (reproduced from 
[Hart et al., 2016](https://doi.org/10.1371/journal.pcbi.1005097))

Assuming you follow this advice faithfully, your next decision will be what file format to store your data 
in. Although you might be very productive in a spreadsheet editor such as Microsoft Excel, resist the
temptation to store your data in Excel's proprietary file format (`.xls` or `.xlsx`). Not only is Excel 
format readable by fewer programs than a plain text format such as 
[tab-separated values](https://en.wikipedia.org/wiki/Tab-separated_values), which reduces the ways in which
the data can be re-used without further conversion, the risk that your data will be unintentionally altered 
(corrupted) by Excel is very real:
[gene name errors (because of this) are widespread in the scientific literature](http://doi.org/10.1186/s13059-016-1044-7).
The point of structuring your data in "tidy" form as tabular, plain text will be immediately obvious once you 
(or a collaborator) tries to analyse the data by including it, for example, in a 
[computational analysis workflow](../WORKFLOWS): software such as the R environment for statistical computing,
will simply refuse to read untidy data correctly, and your chosen platform for data [versioning](../VERSIONING) 
or [sharing](../DATA_SHARING) will likely also not display the data correctly.

But what does it all mean?
--------------------------


Examples of useful ontologies and controlled vocabularies
---------------------------------------------------------
- [Gene name](http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=7419)
- [Sequence Ontology](http://www.sequenceontology.org/)
- Gene Ontology
- DarwinCore vocabulary
- DublinCore vocabulary
- MeSH terms
- ISA

Accomplishments
---------------
- You should be persuaded to tidily structure your data
- You should know to use open, simple data formats


