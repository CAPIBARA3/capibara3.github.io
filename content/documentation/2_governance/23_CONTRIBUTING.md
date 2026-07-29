---
title: 23 Contributing Guidelines
author: joanalnu
---

> [!ABSTRACT]
> The goal of this page is to master the GitHub Workflow. In a scientific collaboration, GitHub is more than a code host. We use it to ensure our research is reproducible, our code is peer-reviewed, and our documentation is version-controlled.

> [!WARNING]- Prerequisites
> You must have completed these tutorials:
> 
> - [[11_unix]]
> - [[12_terminal]]
> - [[13_git]]
> - [[14_github]]

# Why Collaborate via GitHub?

In a distributed system, we work asynchronously, GitHub acts as our "single source of truth," allowing us to share files without version problems, accurately track progress, and communicate in the team without additional tools.


# 1. Branching Strategy

To keep our research stable, we never work on the `main` branch. The `main` branch is the "production" branch, which contains stable and working code with written documentation.

**Feature Branches**
- Naming convention: `<username>/<topic>`
- Example: `alice42/update-readme`, `bob52/include_w0waCDM_model` 

# 2. The Contribution Cycle
Contributing to a research project follows a specific loop: **Issue → Branch → Commit → PR**.

1. **Find or Create an Issue**
Before writing code, ensure there is an Issue describing the problem or feature.
- **Check**: Search existing issues to avoid duplicate work.
- **Claim**: Comment on the issue to let others know you are working on it.
- **Ask**: If you have doubts or are unsure of how to do something, just ask in the issue chat.

2. **Local Setup & Branching**
```bash
# clone the repository to your computer
git clone git@github.com:capibara3/repo-name.git
cd repo-name

# if you already had cloned the repository, update your reference
git pull origin main

# Create your research branch
git checkout -b username/topic
```

3. We use conventional commits to keep our history readable for future researchers:

- `feat(...)`: implementation of new feature
- `fix(...)`: fixing a bug in the code
- `docs(...)`: Updates the documentation or $\LaTeX$ manuscripts.
- `refactor(...)`: Cleaning up code without changing how it works.

> [!EXAMPLE]
> ```bash
> git commit -m "feat(physics): add gamma-ray detector efficiency curve"
> ```

# 3. Pull Requests (Peer Review of Code)

Once your work is ready, you open a Pull Request (PR) to merge your branch into `main`. This is where the "Internal Peer Review" happens.

**PR Requirements**
1. **Linked Issue:** Mention the issue in your PR description (e.g., `Closes #42`)
2. **Documentation:** Ensure any new functions are commented. Add necessary documentation of new features and update old documentation of changed functions.
3. **Tests:** Run your scripts and ensure the output matches your expectations and is correct.
4. **Review:** At least one team member must approve the PR before it is merged.


# 4. Documentation & $\LaTeX$

**Documentation is as important as code.**

- **Code Documentation:** Use docstrings for Python functions so other team members can understand your logic.
- **$\LaTeX$:** For long papers, we use Git to manage `.tex` files. This allows us to track exactly each version of the paper as we write and review it. For $\LaTeX$ manuscripts, there is a specific guide on how to collaborate [[15_local_latex|here]].

> [!EXAMPLE] Python docstring
> Later, when you learn Python, you will know what functions, strings, arguments and output are. However, for early coders or just curious here's an example.
> ```python
> def hubble_param(z, Omega):
> 	"""
> 	Hubble Parameter from Lambda-CDM model
> 	H(z) = H0 * sqrt(Omega_m0*(1+z)^3 + Omega_r0*(1+z)^4 + Omega_Lambda0 + Omega_K0*(1+z)^2)
> 	:param z: redshift scalar or array
> 	:return: values for the hubble parameter in dependence of the parameters and redshift.
> 	"""
> 	Omega_m0, Omega_r0, Omega_Lambda0, Omega_K0, H0 = Omega
> 	E_squared = (Omega_m0 * (1 + z) ** 3
> 		+ Omega_r0 * (1 + z) ** 4
> 		+ Omega_Lambda0
> 		+ Omega_K0 * (1 + z) ** 2)
> 	return H0 * np.sqrt(E_squared)
> ```

# 5. Best Practices for Research Software

- **Commit Frequency:** Small, atomic commits are easier to debug than one massive "Update all files" commit.
- **Stay Updated:** Regularly run `git pull origin main` to ensure you aren't working on outdated code.
- **Code Review Etiquette:** Be constructive, accept criticism, defend your points. Always follow the [[21_CODE_OF_CONDUCT|code of conduct]].

---

> [!TIP]- Pro Tool: GitHub CLI (`gh`)
> For a faster workflow, you can manage issues and PRs directly from your terminal:
> - `gh issue list`: see what needs to be done
> - `gh pr create`: open a new PR
> - `gh pr checkout <number>`: view a teammate's code locally to review it.
>   
>   Visit [cli.github.com](https://cli.github.com) to install and access the documentation.


> [!SUCCESS]
> Great, you can now collaborate and communicate with collaboration members!
> If you were doing the tech foundations tutorial series, this is the next one: [[15_local_latex]].
