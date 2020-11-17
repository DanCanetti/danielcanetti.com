---
postTitle: GitHub Actions Hackathon - Published GitHub Action
#date: Last Modified
date: 2020-09-01
postTag: Hackathon
postFeatureImage: /dist/images/githubactions.jpg
postFeatureImageRetina: /dist/images/githubactions@2x.jpg
postExcerpt: Part 5 - Sometimes it can take a lot of doing the incorrect method to put you back on the right path.
eleventyExcludeFromCollections: true
---

Sometimes it can take a lot of doing the incorrect method to put you back on the right path. After taking a break and thinking it through I went back to the original #actionshackathon brief and found a few existing Actions I could add to `.yml` file such as [Setup node](https://github.com/marketplace/actions/setup-node-js-environment). Then I can run the bash commands directly in the `yml` file, hook in the [add commit](https://github.com/marketplace/actions/add-commit) action and pop the created Eleventy site back in the repo.

## Success

I'm all about keeping things simple but often find myself being bogged down in the process as I have along this journey. However in the end I've got the process I was looking for in place by using two existing actions with my 11ty set up in the middle.

### Here's how it flows: 

- Checkout using [`actions/checkout@v2`](https://github.com/actions/checkout)
- Setup node using [`actions/setup-node@v1`](https://github.com/marketplace/actions/setup-node-js-environment)
- Create Eleventy site
- Check in using [`stefanzweifel/git-auto-commit-action@v4`](https://github.com/stefanzweifel/git-auto-commit-action)

### Create Eleventy site

When creating the Eleventy site I set this up as I would for a new project. After installing the npm package I create some files and directories that I use in all my projects.

- An `.eleventyignore` file which ignores the `README` file and `assets` directory.
- An `.eleventy.js` file which sets the output directory to `docs` - perfect for GitHub Pages use
- A `README` file
- A `partials` directory and all the partial `.scss` files that I usually use. I use NodeSass to compile these.
- An `assets` directory, I usually keep all my design and source files in here.

### Published

This action is now published! View it [here](https://github.com/marketplace/actions/create-eleventy-site). Checkout the Repo [here](https://github.com/DanCanetti/Create-Eleventy-Site).

---

### More in this series

<div class="toc">
    <ul>
        <li><a href="/blog/github-actions-hackathon/getting-started/">Getting Started</a>
        <li><a href="/blog/github-actions-hackathon/further-progress/">Further Progress</a>
        <li><a href="/blog/github-actions-hackathon/working-on-the-bash/">Working on the bash</a>
        <li><a href="/blog/github-actions-hackathon/npm/">NPM</a>
        <li class="toc__this"><a href="#">Published GitHub Action</a>
    </ul>
</div>