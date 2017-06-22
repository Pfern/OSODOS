This module will show you ways to improve scientific software code and script development
=========================================================================================
Research in the life sciences is increasingly [computational](https://doi.org/10.1371/journal.pbio.2002050), which, 
because all research is about expanding what is known, means that the development and application of new 
computational methods is part of the field. Even if you are primarily a bench scientist or a field worker, you should 
have some awareness of scientific computing. How is software code written and how can you do this collaboratively? 
How to use the code of others? How to share your own? How to improve your code, and make it verifiable and testable?
Here we will address these questions and some of the approaches and community standards that are in current usage.

Picking the right tools
-----------------------
All source code, and a lot of research data (molecular sequence data, tabular data, analysis logs, etc.), consists of 
plain text files. Programs that are intended for composing prose and tables for human readers (such as Microsoft 
Word and Excel) are wholely unsuitable for operating on such text files: they might do things such as automatically 
convert "simple" quotes to “smart” ones, which might invalidate your data; convert between different, local 
conventions for decimal points, which are commas in some countries; attempt to run spell checks on data, which 
clutters the screen with useless information; attempt to export to proprietary file formats. The first, right tool to
either locate on your computer or install if it isn't there, is a [text editor](https://en.wikipedia.org/wiki/Text_editor).
There are good, free, lighweight editors for every operating system, for example:

- On Windows there is [notepad++](https://notepad-plus-plus.org/) and [editpad](https://www.editpadlite.com/)
- On OSX there is [BBedit](https://www.barebones.com/products/bbedit/)
- On Linux there are numerous options, [gedit](http://www.gedit.org/) being a common one on GNOME, for example

Aside from plain text data files, text editors are also useful for working on source code. In many cases, a text editor
will recognise the programming language (for example by the file extension of the source code file, e.g. `*.py` for
python and `*.R` for R) and will colorise the syntax accordingly and allow blocks of code to be collapsed or expanded.
However, for any project that comprises multiple files - and this is nearly always the case, if we consider input and
output data files, configuration files, as well as source code - a text editor will not suffice. Hence, the next, right
tool for the job will be an [integrated development environment](https://en.wikipedia.org/wiki/Integrated_development_environment)
or IDE.

An IDE allows you to organise sets of files into projects such that the dependencies between the files are managed. An
IDE will typically have a deeper understanding of the programming language you are using, so that it may spot problematic
syntax and logic errors, and may suggest functions and variables for code completion. Also, an IDE will allow you to execute
your code line by line, which helps in localising problems and in stepping through an analysis workflow. Lastly, an IDE
will be able to visualise different things, such as complex data structures.

<a name="ss1"></a>
![Example 1, the graphical user interface of the most popular integrated development environment for R, RStudio](SS1.png)
_Example 1 (ss1) - the graphical user interface of the most popular integrated development environment for R, RStudio. The
top left pane organises files, the bottom left pane [evaluates R statements line by line](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
 (e.g. to test out commands), the top right pane visualises complex data structures, and the bottom right pane allows for
viewing various things such as help documentation or statistical plots._

Just like text editors, numerous IDEs exist. For most programming languages there are very good, free options. For example,
for the R language for statistics there is [RStudio](https://www.rstudio.com) (shown in [example 1](#ss1)), for Python 
there is [pycharm](https://www.jetbrains.com/pycharm/), for Java there is [eclipse](https://www.eclipse.org/), and so on.

A slightly different take on source code development that is more geared towards analysis workflows than to application
development is provided by the [literate programming](https://en.wikipedia.org/wiki/Literate_programming) paradigm. In this
way of working, source code is primarily a prose document, interspersed with bits of executable code and dynamic 
visualisations. This is found in R programming in the guise of [RMarkdown](http://rmarkdown.rstudio.com/) (an example of
this is the [working document](https://github.com/ropensci/RNeXML/blob/master/manuscripts/manuscript.Rmd) that formed the
basis of [the publication for the RNeXML library](http://doi.org/10.1111/2041-210X.12469)). The [Jupyter](http://jupyter.org/) 
system facilitates the same way of working but accommodates more programming languages.

<a name="ss2"></a>
![Example 2, example output of the "Welcome to Python" notebook](SS2.png)
_Example 2 (ss2) - example output of the "Welcome to Python" notebook. Note that the curves will look a bit different every time._

As an exercise of literate programming, try the [Welcome to Python](https://try.jupyter.org/) notebook. Modify the code to draw
five (instead of four) curves, labeling the additional one `E`. An example of what the expected output might look like is 
shown in [example 2](#ss2).

Open sourcing your code
---------------------
- build on the shoulders of others
- adopt community conventions
- pick a permissive license
- publish your code
- collect feedback


Make it verifiable
------------------
- provide test data
- use continuous integration

Accomplishments
---------------
