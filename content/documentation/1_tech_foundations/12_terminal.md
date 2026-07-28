---
title: 12 Terminal
author: joanalnu
---
> [!ABSTRACT]
> The **Terminal** (also called Command Line or Shell) is a text-based way to talk to your computer. Instead of clicking icons, you type instructions. It's faster, customisable and more powerful.

> [!WARNING]- Prerequisites
> You should have completed:
> - [[11_unix]]
> 

# 1. Opening the Terminal

Before you can time, you need to open the terminal:
- **macOS:** Press `Cmd + Space`, type "Terminal" and hit Enter.
- **Linux/WSL:** Press `Ctrl + Alt + T`.

# 2. Navigation

Think of the terminal as a "File Explorer" (Explorer/Finder) without the windows. You are always inside a folder.

- `pwd` (print working directory): Shows the path to the folder you are currently standing in.
- `ls`(list): Shows the list of files and folders inside you current location.
- `cd <folder>`(change directory): Moves into a folder.

> [!TIP]- Change Directory
> Let's say you have the structure `Username/Documents/` (this is called a path), and you are currently in `username/`.
> 
> Running `cd Documents/` will move you into the `Username/Documents/` folder.
> 
> To return, you run `cd ..`. `../` describes the path to the mother directory.

# 3. Managing Files & Folders

- `mkdir <name>`(make directory): creates a new folder.
- `touch <filename>`: create a new, empty file.
- `rm <filename>`(remove): Deletes a file.
- `rmdir <folder>`: Deletes an empty folder.
- `rm -rf <folder`: Forces delete of a non-empty folder.

> [!DANGER] Remove Commands
> Running a remove command (`rm`, `rmdir`or `rm -rf`), **fully deletes** a file or directory. **It is not moved to a trash bin**, once run it is completely gone. Be very careful!

> [!TIP]- Flags
> If you have noticed, the last command: `rm -rf` consists of the remove command with an extra component preceded by a minus (`-`). These are called flags and are used to provide extra information to the command (`rm`). For example, we will later see how to install dependencies:
> ```bash
> pip install SomePackage # this installs a Python package
> pip install --upgrade SomePackage # this re-install the lastest version of the package
> pip install -U # this flag is the short version of --upgreade (not only 1 '-')
> ```

# 4. Reading and Editing

You don't need to open Notepad or TextEdit to see what's inside a file.
- `cat <filename>`: Dumps the entire text of a file into your terminal so you can read it.
- `nano <filename>`: Opens a simple, "old-school" text editor inside the terminal.
	- Press `Ctrl+O` and Enter to save, and `Ctrl + X`to exit.

These text editors are very basic and, especially for beginners, you may consider using a dedicated text editor application (like Visual Studio Code or PyCharm). These are applications that allow you to manage files and edit them more intuitively. They also have a built in terminal (i.e., you can open the terminal from the application itself).

> [!TIP]- Pro Text Editing
> The ultimate command line text editor is Vim or NeoVim. It requires a steep learning curve and some basic understanding of the functioning of computers, thus it is not recommended for beginners. If you want to know more contact @joanalnu (GAMMA PI).

# 5. Understanding the System

Unix organises files like a tree. Everything starts at the **Root** (`/`).
- `/`: The very top level (there is no mother directory).
- `~`: Short-hand for your **Home** folder (where your personal files live, normally the user folder in the computer)
- `sudo` (SuperUser Do): Use this before a command if you get a "Permission Denied" error. It's communicates you are the administrator and it will prompt you to enter your password.

# 6. Beginner Tips

- **Tab Completion:** Start typing a folder name and hit the`Tab`key: the terminal finishes the word for you.
- `clear`: Use this when the screen gets to messy.
- `man <command>`: If you forget how a command works, type `man` followed by the command (e.g., `man ls`, `man rm`) to see the manual. Press `q`to quit the manual.

> [!SUCCESS]
> Now that you can move files around, let's learn how to track changes to your code with [[13_git]].
