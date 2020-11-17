---
postTitle: GitHub Actions Hackathon - NPM
#date: Last Modified
date: 2020-09-01
postTag: Hackathon
postFeatureImage: /dist/images/githubactions.jpg
postFeatureImageRetina: /dist/images/githubactions@2x.jpg
postExcerpt: Part 4 - So, NPM isn't found. That'll be because it's not installed - which isn't an issue, we need to install Node and that'll install it for us.
eleventyExcludeFromCollections: true
---

So, NPM isn't found. That'll be because it's not installed - which isn't an issue, we need to install Node and that'll install it for us.

How do we install Node? Easy, `apt install nodejs` - except this throws the `apt not found` error. Why? Because I've not built a Javascript action... I've build a Docker Container action 🤦

## Creating a Javascript action?

Hopefully, this shouldn't be too much work. Let's use the action I've already got locally and run NPM install here and push this back up - as advised in the docs [here](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action). BUT, this isn't what I need either as I can't execute my `.sh` script with JS action... what I need to do is use the correct Docker image and I should be able to run the NPM commands.

More progress. I've updated the `.sh` file to include the `apt install nodejs` command. I'm now getting `Unable to locate package nodejs`, as a quick fix I've tried adding sudo but to no avail - as expected to be honest.

## Finding Node

This turned out to be more work than I thought. I'm now learning some parts of Docker to try and install node as part of Dockerfile. After some work I've got this working as part of the Dockerfile, I'm still getting the `npm` not found error though but I think I may be able to get this to work in the Dockerfile too.

## 🎉🎉  We're error free

After adding the npm install to the Dockerfile the process ran all the way through BUT I don't seem to have any directory in the repo as I did before.

---

### More in this series

<div class="toc">
    <ul>
        <li><a href="/blog/github-actions-hackathon/getting-started/">Getting Started</a>
        <li><a href="/blog/github-actions-hackathon/further-progress/">Further Progress</a>
        <li><a href="/blog/github-actions-hackathon/working-on-the-bash/">Working on the bash</a>
        <li class="toc__this"><a href="#">NPM</a>
        <li><a href="/blog/github-actions-hackathon/create-eleventy-site-action/">Published GitHub Action</a>
    </ul>
</div>