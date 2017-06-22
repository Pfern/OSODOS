This module will show you how to do computational analyses in a reproducible and re-usable manner
=================================================================================================
Virtually no research project of interest that includes _in silico_ analysis only uses a single
software tool, operating on a single data set, under a single set of parameters. There will be 
iterations over data sets, sweeps over parameter ranges, and multiple software tools will be 
used. These are all operations whose [reproducibility](../REPRODUCIBILITY) is every bit as vital 
as that of a wet lab procedure. Therefore, the haphazard and manual chaining together of computational
analyses is a recipe for failure. In addition, because research is usually exploratory such that the
right approach only becomes clear after many failed attempts 
(["everything you do, you will probably have to do over again"](A_quick_guide_to_organizing_computational_biology_projects.PDF)), 
manual repetition becomes boring and error prone. Hence, computational analysis should be viewed 
and organised as a workflow that is automated as much as possible so that it can be re-run at will 
and shared with collaborators as well as the wides research community. Here we will consider some of 
the practical approaches and considerations in developing computational analysis workflows.

Organising a computational analysis
-----------------------------------
<a name="w1"></a>
![Example 1, project organisation](W1.png)

A computational analysis workflow chains [software tools](../SCIENTIFIC_SOFTWARE) together in a series
of steps that operate on [data](../DATA_CAPTURE). Although each analysis will be different, some common
file types (source code, compiled executables, data files, configuration files, etc.) are usually 
involved. Hence, a common project organisation such as shown in [example 1](#w1) can probably be applied.
Adopting such a scheme will result in a predictable, self-documenting structure that you can easily 
pick back up even if you return to a project months later.

Workflow tools
--------------
- incremental
- scripting languages
- (snake)make

Sharing and re-use
------------------
- version control
- virtualisation

Accomplishments
---------------


