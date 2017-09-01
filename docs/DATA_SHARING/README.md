Data Sharing in the scientific community
========================================
Collaboration is a natural, essential element in research. However, sharing of resources amongst scientists should be a lot easier than it is, as it finds expected and unexpected barriers everywhere. In recent years, issues surrounding scientific data sharing have received a lot of attention, and this has led both to a better understanding of the right principles and practices that should surround such sharing as well as to better infrastructure. 

The FAIR Guiding Principles
---------------------------
The principles that (should) guide scientific data sharing are abbreviated as **FAIR**, which stands for _Findable, Accessible, Interoperable, Reusable_. What is meant by this is outlined below, and discussed in much greater detail in [[Wilkinson2016](../REFERENCES#Wilkinson2016)].

> To be **Findable**:
> - F1. (meta)data are assigned a [globally unique and persistent identifier](../VERSIONING)
> - F2. data are described with rich metadata (defined by R1 below)
> - F3. metadata clearly and explicitly include the identifier of the data it describes
> - F4. (meta)data are registered or indexed in a searchable resource
>
> To be **Accessible**:
> - A1. (meta)data are retrievable by their identifier using a standardized communications protocol
> - A1.1 the protocol is open, free, and universally implementable
> - A1.2 the protocol allows for an authentication and authorization procedure, where necessary
> - A2. metadata are accessible, even when the data are no longer available
>
> To be **Interoperable**:
> - I1. (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
> - I2. (meta)data use [vocabularies](../SEMANTICS) that follow FAIR principles
> - I3. (meta)data include qualified references to other (meta)data
>
> To be **Reusable**:
> - R1. meta(data) are richly described with a plurality of accurate and relevant attributes
> - R1.1. (meta)data are released with a clear and accessible data usage license
> - R1.2. (meta)data are associated with detailed provenance
> - R1.3. (meta)data meet domain-relevant community standards

Many different standards, databases, and policies can be adopted and combined to develop practices that comply with these general principles. These are collected on [FAIRSharing](https://fairsharing.org/), which also contains an extensive educational section. 

Assuming that we are persuaded by the wisdom of these FAIR principles, we may want to adopt them in our own research when it comes to sharing our data in various contexts. Among these contexts we can at least distinguish between the sharing of raw and intermediate data (for example, within a collaborative network) and the publishing of our "final", result data, i.e. when we finished with our analyses and want to share our conclusions with the world. 

In either case, many of the FAIR principles can be implemented following guidelines we establish elsewhere on these pages. For example, to be properly Findable, our data should treated at least according to our suggestions in the section on [versioning](../VERSIONING); and to be Interoperable and Reusable we should describe our data collection process following reporting standards such as described in the section on [data capture](../DATA_CAPTURE), we should express the meaning of our data and metadata using clear, unambiguous [semantics](../SEMANTICS), and we should adopt open, community standards for representing our data, as we elaborate on in the section on [open source](../SCIENTIFIC_SOFTWARE). 

What remains to be discussed are the options for making our data Accessible, and for this there are different technologies to choose from depending on whether we are sharing raw and intermediate data or whether we are publishing result data. In the following sections we will discuss these options.

Sharing raw and intermediate data
---------------------------------
Sharing data to enable collaboration across disparate locations is a path that you might like to start exploring by using some guidance, e.g. as outlined in [[Boland2017](../REFERENCES#Boland2017)].

Publishing result data
----------------------
The final outcomes of a data-intensive research project in terms of data are referred to as "result data". For example, for a genome re-sequencing project, these might be the specific gene variants detected in the individuals that were sequenced (e.g. see [this pyramid](../VERSIONING#v3)). These are the data that scientific conclusions (such as presented in a scholarly publication) will probably be most intimately based on, and the pressures to share these data will therefore come from more sides than in the case of raw or intermediate data:

1. Funding agencies more and more require that these data are shared. Research projects funded by such agencies probably need to submit a [data management plan](../DATA_MANAGEMENT) for approval to the agency that describes how this will be handled. (The NIH, the US funding agency for medical research, has published a list of [frequently asked questions](https://grants.nih.gov/grants/policy/data_sharing/data_sharing_faqs.htm) surrounding data sharing that researchers might ask a funding agency.)
2. Many journals require that data discussed in a paper are deposited in a data repository such that the paper refers to a public, clearly identifiable, data record. (In addition to policies of individual journals, community initiatives to establish author guidelines to this end are being developed, see [[Nosek2015](../REFERENCES#Nosek2015)].)
3. A publication based on open, reusable data is more likely to be cited (e.g. by 9% in the case of microarray data [[Piwowar2013](../REFERENCES#Piwowar2013)]), so there is also an aspect of enlightened self interest to depositing result data. Along this vein, a growing trend is towards "[data publications](../REFERENCES#Chavan2011)", where the paper is mostly just an advertisement for a re-usable data set.
4. Data sets themselves might be citable, which is a vision that is being advanced, for example, by the [Joint Declaration of Data Citation Principles](https://www.force11.org/group/joint-declaration-data-citation-principles-final) and by infrastructural initiatives such as [DataCite](https://www.datacite.org/) and the [Data Citation Index](http://wokinfo.com/products_tools/multidisciplinary/dci/).

These different pressures have created a need for online data repositories, and in response a bewildering array of choices has arisen. Broadly speaking, these can be subdivided in generic data repositories that will accept many different data types but will not process (e.g. validate, index, visualize) these in great detail, and domain-specific repositories that do a lot more with the data. The choices are discussed below.

### Generic data repositories
In what concerns platforms to share various types of data, a researcher has access to a reasonable amount of choice. At present (August 2017), we invite you to explore a number of repositories. Often they are complemented with a series of services that offer some specific advantages, such as linking to publications, providing licensing options, offering digital object identifiers (DOI). They differ quite considerably in their policies, level of curation and organization methods. Specificity also occurs in the case of repositiories orientated towards certain communities of users. Such is the case of digital libraries, for example.

- **Dryad Digital Repository** "The Dryad Digital Repository is a curated resource that makes the data underlying scientific publications discoverable, freely reusable, and citable. Dryad provides a general-purpose home for a wide diversity of datatypes." http://datadryad.org/

- **FigShare** "As governments and funders of research see the benefit of open content, the creation of recommendations, mandates and enforcement of mandates are coming thick and fast. figshare has always led the way in enabling academics, publishers and institutions to easily adhere to these principles in the most intuitive and efficient manner." Mark Hahnel, Founder and CEO, figshare https://figshare.com/

- **Zenodo** "Zenodo helps researchers receive credit by making the research results citable and through OpenAIRE integrates them into existing reporting lines to funding agencies like the European Commission. Citation information is also passed to DataCite and onto the scholarly aggregators." https://zenodo.org/

- **Dataverse** "Dataverse is an open source web application to share, preserve, cite, explore, and analyze research data. It facilitates making data available to others, and allows you to replicate others' work more easily. Researchers, data authors, publishers, data distributors, and affiliated institutions all receive academic credit and web visibility." https://dataverse.org/

- **EUDAT** "EUDAT offers heterogeneous research data management services and storage resources, supporting multiple research communities as well as individuals, through a geographically distributed, resilient network distributed across 15 European nations and data is stored alongside some of Europe’s most powerful supercomputers." https://eudat.eu/

- **Mendeley Data** "Mendeley Data is a secure cloud-based repository where you can store your data, ensuring it is easy to share, access and cite, wherever you are." https://data.mendeley.com/

### Domain-specific repositories
In addition to the generic data repositories listed above, a very large number of domain-specific data repositories and databases exists. Such repositories accept only a limited number of data types - for example, DNA sequences - that need to be provided in specific formats and with specific metadata. This means that, probably, not all different data and results generated by a research project can be uploaded to the same repository, and that uploading is sometimes cumbersome and complicated. On the other hand domain-specific repositories can provide more services tailored to a specific data type (such as BLAST searching of uploaded DNA sequences), and perhaps do things with the data such as synthesizing it in a meta-analysis or a computed consensus. Nature publishes an [online list](https://www.nature.com/sdata/policies/repositories) of a variety of data repositories, while [re3data](http://www.re3data.org/) provides a searchable database of repositories.

Licensing, Attribution and Openness in Data Repositories
--------------------------------------------------------
Data made available via open repositories enables a series of attractive opportunities for researchers. First, the opportunity for attaching an attribution to the work of capturing, storing and curating data. Credit is assigned to the depositor following well established and understod rules, in general one of the variants of the Creative Commons licensing scheme https://creativecommons.org/licenses/ 

Data sharing in this way also enables reuse and, in particular, reprocessing. This exposure of data to other resarchers, students and the public is gaining popularity. It is obvious that others may find more from the same data by using different tools with different parameter settings and options, and it is interesting to observe that it can be used preserving attribution. On the other hand, the opportunities that arise when combining heterogeneous datasets may allow for important steps that would be much more difficult otherwise. 
