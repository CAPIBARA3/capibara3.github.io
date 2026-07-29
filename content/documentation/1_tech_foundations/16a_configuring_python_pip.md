---
title: 16a Configuring Python & Pip
author: joanalnu
---
> [!ABSTRACT]
> To contribute to the CAPIBARA Collaboration, you need a functional Python environment. This tutorial guides you through installing Python and **pip**—the industry-standard package manager used to install essential scientific libraries like NumPy, Pandas, and Matplotlib.

> [!WARNING]- Prerequisites
> Before configuring Python, ensure you are comfortable with the command line:
> - [[11_unix]]
> - [[12_terminal]]

# 1. Introduction

Python is the backbone of modern research and engineering. While many systems come with Python pre-installed, you often need to verify the version and ensure `pip` is available to manage external dependencies.

# 2. Checking Your System

Most macOS and Linux distributions include Python out of the box. Open your terminal and run:

```bash
python3 --version
```

If you see a version number (e.g., `Python 3.10.x`), it is installed. You should also check for `pip`:

```bash
pip3 --version
```

> [!TIP]- Why "python3" instead of "python"?
> On many systems, the command `python` still refers to the obsolete Python 2.7. Always use `python3` and `pip3` to ensure you are using the modern version of the language.

# 3. Installation

If the commands above returned an error, follow the steps for your operating system.

### 3.1 Linux (Ubuntu/Debian)
Update your local package index and install Python via `apt`:
```bash
sudo apt update
sudo apt install python3 python3-pip
```

### 3.2 macOS
The best way to manage Python on macOS is through **Homebrew**.
1. Install Homebrew (if you haven't):
   ```bash
   /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
   ```
2. Install Python:
   ```bash
   brew install python
   ```

# 4. Common `pip` Commands

Once `pip` is installed, you will use it to download the "building blocks" of your code.

| Action | Command |
| :--- | :--- |
| **Install a package** | `pip install <package-name>` |
| **Upgrade a package** | `pip install --upgrade <package-name>` |
| **Uninstall a package** | `pip uninstall <package-name>` |
| **List installed packages** | `pip list` |
| **Show package info** | `pip show <package-name>` |

> [!EXAMPLE]- Practice
> Try installing a common library used for math:
> `pip install numpy`

# 5. Learning Resources

While you follow our internal guides, we recommend these external resources to deepen your understanding:

1. **[Intro to Python Course](https://github.com/omsharansalafia/intropython):** A notebook-based course focusing on scientific Python.
2. **[Official Python Tutorial](https://docs.python.org/3/tutorial/):** The definitive guide from the creators of Python.
3. **[Python Tutor](https://pythontutor.com/):** A great tool to visualize how your code executes line-by-line.

# 6. Verification

To ensure everything is linked correctly, run:
- `which python3`: This shows the file path where Python is installed.
- `python3 -c "print('Ready!')"`: This runs a tiny snippet of code to confirm the engine is working.

> [!SUCCESS]
> Python is now alive on your machine! However, installing every package globally can lead to "dependency hell" where different projects conflict with each other. To avoid this, proceed to [[42_configuring_conda_venv]] to learn about Virtual Environments. Before that you can go to the second part of this tutorial: [16b_python_basics](16_python_basics) to learn the fundamentals of coding Python.
