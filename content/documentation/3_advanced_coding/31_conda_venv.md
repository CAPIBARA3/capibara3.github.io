---
title: 41 Configuring Conda and Virtual Environments
author: joanalnu
---

> [!ABSTRACT]
> Learn hwo to create, activate, manage and remoe isolated Python environments using **Conda** and **Python's built-in `venv`**. This ensures clean, reproducible setups for different projects without dependency conflicts.

> [!WARNING]- Prerequisites
> - [11_unix](1_teach_foundations/11_unix)
> - [12_terminal](1_tech_foundations/11_terminal)
> - [15_configuring_python_pip](1_tech_foundations/15_configuring_python_pip)

# 1. Introduction

When working on multiple Python projects, you often need different version of specific packages or Python itself. Environments separate versions of packages for different projects to keep them isolated.

**Conda** is a comprehensive environment manager that manages both Python versions and packages. **`venv``** is Python's built-in, lightweight tool that works within a single project directory.

# 2. Setup

### 2.1 Install Conda
* **Miniconda (Recommended):** A minimal, lightweight installed available at [docs.conda.io](https://docs.conda.io/en/latest/miniconda.html).
* **Anaconda:** Includes Conda plus many preinstalled data science packages, available at [anaconda.org](https://www.anaconda.com/products/individual).

### 2.2 Ensure Python is Installed
Run `python3 --version` to check your version. `venv` comes bundled with Python 3.3+.

# 3. Execution Commands

| Action | Conda Command | `venv` Command |
| :--- | :--- | :--- |
| **Create** | `conda create --name myenv` | `python3 -m venv myvenv` |
| **Create (Specific Python) | `conda create --name myenv python=3.10` | *Depends on the host Python version* |
| **Activate** | `conda activate myenv` | `source venv/bin/activate` |
| **Deactivate** | `conda deactivate` | `deactivate` |
| **List Environments | `conda info --envs` or `conda env list` | *Check directory manually* |
| **Remove** | `conda env remove --name myenv` `rm -rf myenv` |

# 4. Troubleshooting

### Conda
* **Command not found:** Conda is not added to your PATH; restart the terminal or reinstall.
* **Environment not activating:** Run `conda init bash` (or zsh/fish) to initialize your shell.
* **Packages won't install:** Try the conda-forge channel: `conda install -c conda-forge <package>`.

### venv
* **Activation script not working:** Fix missing permissions using `chmod +x myenv/bin/activate`.
* **Python points to system:** The environment is not activated; re-run the activation script.

> [!SUCCESS]
> You are ready to manage environments securely. For sharing consistent environments with the team, proceed to [[16_docker]].
