---
title: 14 GitHub
author: joanalnu
---
> [!ABSTRACT]
> If Git is the "Time Machine" on your computer, **GitHub** is the "Space Station" in the cloud where everyone parks their time machines. It’s the central hub where the **CAPIBARA Collaboration** stores code, tracks bugs, and works together.

> [!WARNING]- Prerequisites
> You should have completed:
> - [[11_unix]]
> - [[12_terminal]]
> - [[13_git]]

# 1. Why GitHub?

- **The Cloud:** Your code is backed up safely online.
- **Collaboration:** It’s like a social network for code. You can "Follow" projects and see what teammates are building.
- **Project Management:** Use "Issues" to track bugs and "Pull Requests" to review code before it goes live.

# 2. Setting Up Your Account

1. **Sign Up:** Go to [GitHub.com](https://github.com/) and create an account.
2. **Join the Team:** Send your username to the coordinators (see tutorial 02). We will invite you to the **CAPIBARA Organization**.
3. **Security:** We highly recommend enabling **Two-Factor Authentication (2FA)** in your settings.

# 3. The GitHub 'Dictionary'

|**Term**|**What it actually means**|
|---|---|
|**Repository (Repo)**|A project folder.|
|**Organization**|A shared workspace for a team (like CAPIBARA).|
|**Fork**|Taking a copy of someone else's project to play with it safely.|
|**Push**|Sending your local saves (commits) _up_ to GitHub.|
|**Pull**|Grabbing new updates from GitHub _down_ to your computer.|
|**Pull Request (PR)**|Asking the boss: "I finished my code, can you check it and add it to the main project?"|
# 4. SSH: Authentification

To talk to GitHub from your terminal without typing your password every 5 minutes (since it is a deprecated function), you need an **SSH Key**. Think of it as a secret handshake between your laptop and GitHub.

1. **Generate the Key:** Open your terminal and run this:
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

2. **Tell your computer about it**
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

3. **Give the "Public" key to GitHub**
	1. Copy your key to your clipboard: `cat ~/.ssh/id_ed25519.pub` (Copy the text that starts with `ssh-ed25519`)
	2. Go to your GitHub SSH Settings (GitHub > Account Settings > SSH and GPG Keys)
	3. Click **New SSH Key**, give it a name (like "My Laptop") and paste the code

4. Run the following command to verify the communication
```bash
ssh -T git@github.com
```

# 5. Local-Remote Essential Commands

Git lives on your computer, but **GitHub** lives on the internet. To move code between them:

- **`git clone <url>`**: Downloads an existing project from the internet to your computer.
- **`git push`**: Sends your local saves (commits) up to the cloud.
- **`git pull`**: Grabs the latest changes from the cloud and brings them to your computer.


> [!SUCCESS]
> You have the tools and the connection. Collaboration on GitHub, be it for code, research, documentation, or paper writing is key. Check out the [[23_CONTRIBUTING|contributing guidelines]] to learn about GitHub and how to use it appropriately. The next tutorial is also a very important one for researchers: [[15_local_latex|LaTeX]].