---
title: 15 Local LaTeX
author: joanalnu
---
> [!ABSTRACT]
> If Markdown is a quick handwritten note (what we use on GitHub), $\LaTeX$ is a professional printing press. It is the industry standard across all academia for scientific publishing because it handles mathematics symbols, bibliographies, layouts and more automatically.

> [!WARNING]- Prerequisites
> - [[11_unix]]
> - [[12_terminal]]
> - [[14_github]]

# 1. Why Local $\LaTeX$?

While tools like Overleaf exist, working **locally**, i.e. on your computer, gives you:

- **Speed:** No waiting for browser refreshes or lags
- **Git Integration:** Track changes to your paper just like you track changes to your code.
- **Power:** Avoid the compile timeout of the free version of Overleaf.

# 2. Installation

There are a lot of $\TeX$ distributions for different operating systems. Here, we recommend installing `BasicTeX` (macOS) and `TeX Live Small` (Linux/WSL), since they are very lightweight installations saving space while keeping essential engines.

## 2.1 Linux & WSL (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install texlive-latex-base texlive-latex-extra texlive-binaries
```

## 2.2 macOS

1. Install BasicTeX and update the TeX Live Manager
```bash
brew install --cask basictex
sudo tlmgr update --self
```

2. Install packages:
If you ever see a compilation error claiming "`missing <package-name>.sty`", run the following command to install it:

```bash
sudo tlmgr install <package-name>
```

## 2.3 Editor

You can edit $\LaTeX$  files as regular text files from your chosen text editor (VSCode, NeoVim, ...). You can also use the $\LaTeX$ Workshop extension, which provides auto-completion and built-in PDF viewer.


# $\LaTeX$ Dictionary

| Term          | Meaning                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| `.tex`        | Your source code file. This is written in $\TeX$                                                              |
| `.bib`        | The bibliography files. This is where you write/copy your references in Bib$\TeX$.                            |
| Preamble      | The top of the file where you load packages and configuration. This is the content before `\begin{document}`. |
| Compilation   | The process of turning your code into a PDF.                                                                  |
| Aux/Log files | These files are created during compilation: ignore/hide these.                                                |

# 4. Compile a PDF

To compile a PDF we use the `pdflatex` command. Normally this is what you will run

```bash
pdflatex paper.tex # Generate the PDF
bibtex paper # Link the references
pdflatex paper.tex # Load the references
pdflatex paper.tex # Finalize the layout (ToC, labels, etc)
```

# 5. Collaboration

$\LaTeX$ files are plain text, which makes them perfect for Git.

1. **Clone & Branch**: Never work directly on `main`.
```bash
git clone git@github.com:capibara3/<repo-name>.git
git switch -c <new-branch-name>
```

2. **Write:** Make your changes in the `.tex` file and compile the updated PDF

> [!TIP]
> To learn _how_ to write math and structures in $\LaTeX$, check out the [Introduction to LaTeX](https://github.com/CAPIBARA3/papers/tree/main/Introduction_to_LaTeX) tutorial on GitHub. This is not a tutorial in the documentation because it is embedded in a $\LaTeX$ file.

3. **Commit & Push:** Add only the `.tex`, `.bib`, and `.pdf` files. Avoid the `log` and `out` files, use `.gitignore` to ignore them.

> [!TIP]- `.gitignore` Template
> ```text
> # copy this to your .gitignore file
> *.aux
> *.log
> *.out
> *.toc
> *.blg
> *.bbl
> ```

# 6. Peer Review Rules

When you open a **Pull request**:

- **Addition-only:** if you are just adding text in your section, a team lead can merge it quickly just checking it complies with the paper standards.
- **Modifying/Deleting:** if you are changing someone else's paragraph or equations, you **must** tag them as a reviewer and resolve the 'conflict of interest' in the comments before merging.

> [!SUCCESS]
> You are now equipped to produce publication-quality documents. By keeping your $\LaTeX$ local and your commits clean, you make your progress and science easier to follow and to communicate with other team members and externally. Next up: [[16_python_basics]].