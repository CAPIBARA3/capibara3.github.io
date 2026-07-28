---
title: 13 Git
author: joanalnu
---
> [!ABSTRACT]
> **Git** is essentially a "Time Machine" for you code. It allows you to save snapshots of your work, experiment with new ideas without breaking your main project, and collaborate with others overwriting their files.

> [!WARNING]- Prerequisites
> You should have completed:
> - [[11_unix]]
> - [[12_terminal]]

# 1. Why Git?

- **Version Control:** Easily go back to a previous version of your code if you break something.
- **Experimentation:** Use "branches" to try out new ideas in a safe sandbox.
- **Collaboration:** Multiple people can work on the same file at the same time.
- **Standards:** Almost every professional software team on the planet uses git.

# 2. Setup & Configuration

First, make sure Git is installed. Type `git --version` in your terminal.

- If you see a version number, you're good!
- If not, download it from [git-scm.com](https://git-scm.com).

**Tell Git who you are**
Before you start "saving" work, Git needs to know who is making the changes. Run these two commands with your information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Tip: Use the same email address you plan to use for GitHub.

# 3. The Basic Workflow

The most important concept in Git is the **Three-Stage Workflow**. You don't just "save" a file: you move it through these steps:

1. **Working Directory:** Where you are currently typing the code.
2. **Staging Area:** `git add <filename>` "marks" files that are ready to be saved.
3. **Local Repository:** `git commit -m "Commit Message" permanently saves those marked files with a clear explanatory message.

> [!TIP]- Unix Folder System
> As we discovered in [[12_terminal]], `../` describes the path to the parent folder. Typing `.` describes the current folder. Thus running `git add .` will add to the stage area every file and folder in your current working directory.

### Essential Commands

| Command                   | What it does                                                             |
| ------------------------- | ------------------------------------------------------------------------ |
| `git init`                | Turns the current folder into a Git repository (starts the Time Machine) |
| `git status`              | Shows which files are changed and what is staged.                        |
| `git add .`               | Stages all changed files for the next save.                              |
| `git commit -m "message"` | Saves your changes with a short description of what you did.             |
| `git log`                 | Shows your history of saves (commits).                                   |
# 4. Branching: Works in parallel

Imagine you want to try a crazy new idea, but don't want to ruin your working code. You create a **Branch**.

- `git branch <name>`: Creates a new branch.
- `git checkout <name>`: Switches you over to that branch.
- `git merge <name>`: Once your experiment is successful, bring those changes back into your main code.

> [!EXAMPLE]- Example: The Cosmic ray Simulator
> Imagine you have a Python Package with a class that defines your cosmic ray  physical model. (The terms package, class, ... are things we will learn later when we do Python.) Then you want to implement a new, more accurate model for cosmic rays. However it is completely new and you don't want to ruin the already working code.
> Then you create a branch in which you can modify or completely rewrite the cosmic ray model class without damaging the previous one. If it goes right, you merge the branch with the main one. If not, you just delete the branch and forget about it.


> [!SUCCESS]
> Now that you are tracking changes locally, it's time to share them with the team: [[14_github]].




# Goal
To configure the Git version control software on your device, learn basic commands and how to use git.

# Prerequisites
- [02 Setting Up Unix](11_unix.md)
- [03 Introduction to the Command Line](12_terminal.md)

## Steps

## 1. Introduction

**Why use Git?**
Git is the most widely used and best version control system in the world, including:

- Version control for tracking changes in code and documentation
- Facilitates collaboration with a clear history of changes
- Enables experimentation with features using branches
- Supports non-linear development through branching
- Seamless integration with GitHub

## 2. Setup

Before starting you will need to download Git from the official website.

1. Download [Git](https://git-scm.com/downloads)
2. Follow the installation instructions for your operating system
3. Verify installation running `git --version` on your terminal

## 3. Execution

## 3.1 Configuring Git

Set up your name and email (these should be your GitHub credentials)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

You can check the configuration by running `git config --list`.

You may also add further configuration details and information, such as your editor or diff tool, if you want to customise your Git experience.

## 4. Git Commands

## 4.1 Basic Git Commands

* `git init`: Initializes a new Git repository in the current directory.
* `git clone [url]`: Clones a repository from a given URL.
* `git add [file]`: Stages a file for the next commit.
* `git add .`: Stages all changes in the current directory and subdirectories.
* `git commit -m "[message]"`: Commits changes with a meaningful commit message.
* `git log`: Displays a log of all commits made to the repository.
* `git status`: Displays the status of the repository, including staged and unstaged changes.

## 4.2 Branching and Merging

* `git branch [branch-name]`: Creates a new branch.
* `git checkout [branch-name]`: Switches to a different branch.
* `git merge [branch-name]`: Merges changes from another branch into the current branch.
* `git branch -d [branch-name]`: Deletes a branch.

## 4.3 Remote Repositories

* `git remote add [name] [url]`: Adds a remote repository.
* `git fetch [remote-name]`: Fetches changes from a remote repository.
* `git push [remote-name] [branch-name]`: Pushes changes to a remote repository.
* `git pull [remote-name] [branch-name]`: Pulls changes from a remote repository and merges them into the current branch.

## 4.4 Undoing Changes

* `git reset [file]`: Unstages a file.
* `git reset --hard`: Discards all changes and resets the repository to the last commit.
* `git revert [commit-hash]`: Reverts a specific commit.

## 4.5 Other Commands

* `git diff`: Displays differences between the current version and the last commit.
* `git tag [tag-name]`: Creates a new tag.
* `git --all`: Displays a graphical representation of the commit history.

# Next Steps
Git allows you to organise and control your files and repositories on your local machine, but you are in a collaboration and will need to share your thoughts! That's why you should continue learning about [05_github](14_github.md).