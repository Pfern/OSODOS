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
pick back up even if you return to a project months later. In this example, the basic layout is as follows:

- **doc** - contains documentation files leading up to a scholarly manuscript
- **data** - data files and metadata (i.e. data about data), here as README text files
- **src** - source code for compiled executables
- **bin** - compiled executables and scripts (i.e. the `$PATH` for the workflow)
- **results** - outcomes of analysis steps

Some of these folder names match those in UNIX-like operating systems (such as Linux) and play roughly the
same role. This is, of course, no coincidence - but rather a mnemonic aid.

Workflow tools
--------------
As we noted above, a computational analysis workflow chains tools together, which is best not done by
hand. To automate this, numerous options exist. Here are some of the obvious, commonly used ones:

- **shell scripting** - on most operating systems (also on Windows), programs can be invoked on the
  command line shell, and these same invocations can be stored in a text file that can thus execute a
  series of program operations automatically. On many operating systems, shell programming is flexible 
  enough to accommodate simple conditionals ("do this if that is true") and loops ("do this for all files"), 
  which could easily be all you need if all the complex logic is encapsulated with the software tools
  you are using. A very good for shell scripting on OSX and UNIX-like operating systems is
  [here](http://tldp.org/LDP/abs/html/).
- **make tools** - one step up in terms of syntax is to use tools like [make](https://en.wikipedia.org/wiki/Make_(software)). 
  Originally developed for
  compiling software, `make` (and tools like it) also issue invocations on the command line, but they
  are more intelligent in handling dependencies between steps (i.e. step B can only be invoked if
  step A has completed successfully) and allow you to label intermediate steps so that you can run
  a specific command defined somewhere in a larger input file for `make`, called a `Makefile`. This
  allows you to work incrementally, so that the output of one step can be checked before moving on
  to the next.
- **scripting languages** - a number of open source, general purpose scripting languages exist that
  can both invoke other programs on the command line, and do complex operations on data themselves.
  These languages include [Python](https://www.python.org/), [Perl](https://www.perl.org/) and
  [Ruby](https://www.ruby-lang.org/en/). More domain specific and originally geared towards statistics 
  is the [R](https://www.r-project.org/) programming language, which can also be used to chain
  software tools together. Although these languages are a departure from familiar 
  command line syntax, they are extremely flexible, well documented, and have large, helpful user 
  bases. It is a very useful skill to pick up at least one of them.
- **literate programming environments** - as discussed in more detail in the section on 
  [scientific software](../SCIENTIFIC_SOFTWARE), several environments exist that allow you to mix
  prose, visualisations and programming logic. Although these are more specialised tools as opposed
  to general scripting languages, the ability to document workflow logic in prose, operate 
  incrementally and include visualisations is extremely useful.
- **visual workflow tools** - touted as a way to build complex computational analysis workflows
  without having to write any code, several visual workflow tools are also available. [Example 2](#w2)
  shows the visual workflow interface of [Galaxy](https://galaxyproject.org/). The advantage of these
  tools is that, indeed, analysis steps can be enacted with mouse clicks. The disadvantage is that 
  to enable this kind of "button-press bioinformatics", the underlying code to make the right 
  invocations still needs to be written by _someone_, so these tools are not very flexible or innovative.
  They are very good for standard operating procedures in labs, but not as much for novel research.

<a name="w2"></a>
![Example 2, visual workflow in Galaxy](W2.png)

Sharing and re-use
------------------
- version control
- virtualisation

Accomplishments
---------------


