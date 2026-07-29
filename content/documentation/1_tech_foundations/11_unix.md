---
title: 11 Unix
author: joanalnu
---
> [!ABSTRACT]
> The goal of this coding tutorial is to set up a unix-like environment on your computer.
> - **macOS or Linux:** You are already set! Move directly to the next tutorial [[12_terminal]]
> - **Windows:** Follow the steps bellow to create a "sandbox" where you can run Ubuntu safely inside your current Windows system.

# Why do you need a Unix environment?

Most professional software development, cloud servers, and scientific computing tools are built for Unix. Using it across all computers ensures:
- Consistency: avoid the "it works on my computer" problem.
- Better tools: access to industry-standard utilities like Bash, Git, and Docker.
- Seamless Paths: No inconsistency between Windows backslashes (`\`) and Unix forward slashes (`/`).


# 1. Identify your operating system

If you are on macOS:
1. Press `Cmd + Space` , type "Terminal" and hit Enter.
2. Type `uname -s` and press Enter.
3. If it says `Darwin` you environment is ready.

If you are on Linux, you already know.

If you are on Windows, you don't have a Unix-based command line. Instead of creating a full Virtual Machine, we will use Windows Subsystem for Linux (WSL), which is much easier and faster.

# WSL

1. Open PowerShell **as Administrator**: Right-click the Start button and select "Terminal (Admin)" or "PowerShell (Admin)".
2. Install **Ubuntu**: Type `wsl --install` and press Enter.
3. Restart: Once the process finishes, restart your computer.
4. Launch: After restarting, open "Ubuntu" from your Start menu. It will ask you to create a username and password.

You can verify the installation by running the following command: `lsb_release -a`.

> [!SUCCESS]
> Congratulations! You now have a Unix environment ready. Continue learning how to use the [[12_terminal]].
