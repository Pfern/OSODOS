How to make your research reproducible
======================================
Reproducibility is a basic requirement of any scientific endeavour. An experiment is simply invalid if another researcher can not produce (substantially) the same set of results from the same input. Anybody, in the same conditions, should be able to follow specifications and reproduce experiments and results. Likewise, experiments shound be robust and perform equally well, independently of the observer. Note that this is distinct from replication, which might be defined as:
> The ability of a researcher to duplicate the results of a prior study if the same procedures are followed but new data are collected.

The reproducibility crisis and the aspects of addressing it
-----------------------------------------------------------
Currently (2016-2017) there is a declared reproducibility crisis. In the biomedical area, attempts to reproduce experiments with cancer cells, for example, have repeatedly failed. In consequence, some papers have had to be retracted. Several efforts have been put in place to provide systematic reproduction of experiments at various scales at the level of core facilities, laboratories, research institutes, universities and service providers. For example, since 2012, a [PLoS initiative](http://blogs.plos.org/everyone/2012/08/14/plos-one-launches-reproducibility-initiative/) is in place to make this happen in a systematic way.

### Quality assurance and control in laboratory data generation
In the scope of these materials, the concerns are naturally focused on digital data. Elsewhere, we discuss good principles and practices following [data capture](../DATA_CAPTURE). However, in a laboratory that produces measurements one needs to deal with instruments that exhibit drifts and require a variety of standardisation interventions that we generically call calibratons and controls. A good laboratory service keeps a flawless track of those, and becomes capable of responding to auditing operations at any time. The whole procedure is often called quality assurance (QA). 

Industrial production has needed it, in many aspects, ahead of the research world. It has requested very large contributions from statisticians and engineers. Quality assurance is strongly related to quality control (QC) but is not quite the same: QC refers to the detection and evaluation of faults or disturbances, while QA refers to the planning and execution of measures to prevent failures and to respond to their consequences. In many cases it relies on reports from QC. This why one often finds QA and QC together in the same process (QA/QC). An interesting exploration of the meaning of the two terms can be found [here](http://www.onquality.info/2011/10/difference-between-qa-and-qc.html/).

Standardised QA/QC procedures allow for _intercalibration_, a generic way of referrring to experiments performed in reproducible circumstances in different laboratories or facilities. This is a common way of guaranteeing that quality is not assessed differently, therefore facilities can rely on quality to the point of being able to replace each other if needed, when for example there is an imbalance in measurement capacity that can be occasionally used to correct overloads of requests.

People concerned with data quality can find a lot of support from the accumulated knowledge and methodological developments in this field. Using QA/QC procedures to monitor data quality widens the comfort zone for the researcher, who needs to be concerned with the way in which experiments are planned, samples are collected and grouped, etc. Deciding on which (experimental and technical) and how many replicates are needed requires statistical skills that are very often below the required level.  

Here are two tutorials that can be helpful:

- [Design of Experiments (DOE)](https://www.moresteam.com/toolbox/design-of-experiments.cfm)
- [Promoting Responsible Scientific Research](https://www.asm.org/index.php/colloquium-reports/item/4510-promoting-responsible-scientific-research)

### General principles promoting reproducibility in computational research
The result of these developments is that scientists have become much more concerned about reproducibility and have tightened their controls. Scientific societies have studied ways of fighting the lack of reproducibility and issued recommendations (see, for example, the [report produced by the American Academy of Microbiology](https://www.asm.org/index.php/colloquium-reports/item/4510-promoting-responsible-scientific-research)). As well, teams of researchers have formulated their thoughts and documented their approaches for reproducible research. A good example to look at is the paper [Ten Simple Rules for Reproducible Computational Research](../REFERENCES#Sandve2013), which identifies rules that broadly agree with the points we raise in these materials:

1. **For Every Result, Keep Track of How It Was Produced** - a rule for which the authors emphasise the importance, as we do, of designing analyses as [automated workflows](../WORKFLOWS)
2. **Avoid Manual Data Manipulation Steps** a corrolary to the first rule, i.e. automate everything. Manual data manipulation steps cloud the [provenance of data](../DATA_CAPTURE#data-provenance)
3. **Archive the Exact Versions of All External Programs Used** - as we [discuss elsewhere](../VERSIONING#version-numbers), tracking of software versions is an important issue, including for reproducibility. As Sandve et al. also point out, this may be addressed by [virtualisation](../WORKFLOWS#sharing-and-re-use)
4. **Version Control All Custom Scripts** - indeed, the importance of [versioning](../VERSIONING) of all output can not be emphasised enough
5. **Record All Intermediate Results, When Possible in Standardized Formats** - adherence to open standards is vital in numerous contexts, as we discuss in relation to [data capture](../DATA_CAPTURE#minimal-information-standards), [data sharing](../DATA_SHARING#the-fair-guiding-principles), [semantics](../SEMANTICS), and [scientific software](../SCIENTIFIC_SOFTWARE)
6. **For Analyses That Include Randomness, Note Underlying Random Seeds** - wherein the authors again make the case for fully specified [workflows](../WORKFLOWS#workflow-tools), here in connection with the importance of recording all parameters
7. **Always Store Raw Data behind Plots** - another way of saying that manual data manipulation, including in the case of visualisations, must be avoided
8. **Generate Hierarchical Analysis Output, Allowing Layers of Increasing Detail to Be Inspected** - indeed, we note the need to develop an approach that allows you to drill down from the top of the data pyramid to its base in the section on [publishing result data](../DATA_SHARING#publishing-result-data)
9. **Connect Textual Statements to Underlying Results** - we suggest that one of the ways in which this can be done is by adopting an approach that encourages "[literate programming](../SCIENTIFIC_SOFTWARE#literate-programming)"
10. **Provide Public Access to Scripts, Runs, and Results** - the time that publications could get away with vague statements that scripts are "available on request" (which are then not honoured) has passed. We strongly endorse an ethic of [open, freely available source code](../SCIENTIFIC_SOFTWARE#working-with-others)

### Example cases of reproducible research
In these pages we introduce the general principles and useful technologies for open source, open data, and open science. However, it is difficult to give one specific recipe to follow: different studies require different analytical tools, use different data types, and are performed by researchers with different ways of thinking, interests, and technological skills.

Case studies and lessons from the data-intensive sciences: _The Practice of Reproducible Research_:

- https://www.practicereproducibleresearch.org/

