---
postTitle: GitHub Actions Hackathon - Getting started
#date: Last Modified
date: 2020-08-18
postTag: Hackathon
postFeatureImage: /dist/images/githubactions.jpg
postFeatureImageRetina: /dist/images/githubactions@2x.jpg
postExcerpt: Part 1 - The action I'm building will allow users to create a new, blank Eleventy site including all the files and directories I usually use/create when creating a new site.
eleventyExcludeFromCollections: true
---

Despite using GitHub almost every day I've no real experience with GitHub actions, but this year I'm trying use each of the Dev hackathons to expand my skills and understanding of new technologies. 

I decided once again to base this around Eleventy as it's a tool I'm using a lot at the moment and I love giving back and contributing to this community where I can. 

## The Action

The action I'm building will allow users to create a new, blank Eleventy site including all the files and directories I usually use/create when creating a new site:

- `.eleventyignore` to ignore the `README.md` file and `_assets` directory.
- `.eleventy.js` to change the build dir to `docs` for GitHub pages.
- `.gitignore` - it'll get used eventually!
- `README.md`
- An `_assets` directory for design files
- A `partials` directory for Sass partial files (these are then compiled into the `_site/docs` directory.

## First steps

I had a look at the [documentation](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#manually-running-a-workflow) and created a pretty basic workflow file using the template provided. I then set about creating the new site with a series of simple `npm` and `linux` commands.

All looked good - let's run it and see what happens.

### Attempt One

**ERROR** - `mkdir: missing operand`.

Well, that was to be expected. Easy fix, I just removed the `mkdir` part of the script - we don't actually *need* this anyway as we need the `docs` directory we're creating to be in the root of the branch.

### Attempt Two

**ERROR** - Process completed with exit code 128.

This one was a little more complicated. I'd tried to run git commands to add the new site to the repo - but it needed to validate who the user is (obviously). I did some research and came across an [existing action](https://github.com/marketplace/actions/add-commit) that can help here.

I added this to my workflow, hardcoded my details for now, and ran the action again.

### Attempt Three

**SUCCESS** 🎉🎉

No errors thrown on this run... but when I check the repo, there's been no files created or added. More work needed.

---

### More in this series

<div class="toc">
    <ul>
        <li class="toc__this"><a href="#">Getting Started</a>
        <li><a href="/blog/github-actions-hackathon/further-progress/">Further Progress</a>
        <li><a href="/blog/github-actions-hackathon/working-on-the-bash/">Working on the bash</a>
        <li><a href="/blog/github-actions-hackathon/npm/">NPM</a>
        <li><a href="/blog/github-actions-hackathon/create-eleventy-site-action/">Published GitHub Action</a>
    </ul>
</div>