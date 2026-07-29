# Maintaining the Website

Our website is hosted on [GitHub Pages](https://docs.github.com/en/pages) and built using [Quartz](https://quartz.jzhao.xyz/), which enables us to writte content in the markdown format (the same as in notes, discussions and everywhere in github) to publish a website.

Quartz is a code that compiles the files inside the [content](https://gihtub.com/capibara3/capibara3.github.io/blob/main/content/index.md) directory into HTML/CSS/JS pages, which is how website are written.

## Installation

To edit the website you can either edit the markdown files inside `content` directory directly on `github.com`, or you may want to download the website to have a preview before publishing your changes.

To do so, first clone the repository (assuming you have [[1_tech_foundations/13_git|ssh]] setup):
```shell
git clone git@github.com:capibara3/capibara3.github.io.git
```

## Editing the Website

Then change directory and you can edit the files inside the `content` directory:
```shell
cd capibara3.github.io
ls .
```
will output
```shell
content # -> edit the markdown files here
quartz
...
```

## Pushing Your Changes

Once you have edited your changes, you can preview the website by running
```
npx quartz build --serve
```
and opening [http://localhost:8080](http://localhost:8080) in your browser. This requires you to have the `npm` package manager installed, for that see a tutorial in the quartz documentation.

To share your changes, commit the files and create a pull request:
```shell
git add .
git commit -m "Added that, removed this"
git push origin my_username/my_branch
```

if you have the [GitHub CLI](https://cli.github.com) installed you can create a pull requests running
```shell
gh pr create
```

When the pull request is merged to the `main` branch of `capibara3/capibara3.github.io` and automatic `Action` will publish the updated website on [capibara3.github.io](https://capibara3.github.io). These may take a few minutes (that's why previewing changes is great).

## Resources

Please, consult the documentation of each tool:
- [Quartz Docs](https://quartz.jzhao.xyz/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Markdown](https://www.markdownguide.org/)
