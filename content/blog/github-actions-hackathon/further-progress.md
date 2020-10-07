---
postTitle: GitHub Actions Hackathon - Further Progress
#date: Last Modified
date: 2020-09-01
postTag: Hackathon
postFeatureImage: /images/posts/github-actions-hackathon/feature.jpg
postFeatureImageRetina: /images/posts/github-actions-hackathon/feature@2x.jpg
postFeatureImageFull: /images/posts/github-actions-hackathon/feature-full.jpg
postExcerpt: Part 2 - I've made some tweaks to the script in an attempt to get this working how I'd like it to and so far I've just hit errors.
eleventyExcludeFromCollections: true
---

## Back to failure 🤦

I've made some tweaks to the script in an attempt to get this working how I'd like it to and so far I've just hit errors, although they're always the same error so there's likely a singular issue causing this.

I've been reading up on the documentation again and I'm going to move my commands out of the `.yml` file and in a `.sh` file and call this from the action.

Creating the `.sh` file was no issue at all but then when I went to add it into the `.yml` I started hitting some more issues. I was getting hit with an error - `Invalid Workflow File Every step must define a uses or run key`. I double checked my workflow and I was definitely defining these within each namespace. Confused!

However, after some research I found the issue! I was using a `-` on each of the `uses` - thanks to [StackOverflow](https://stackoverflow.com/questions/58849770/github-actions-invalid-workflow-file-error) for the tip here. Once this was resolved the `.yml` threw no more errors and I could start testing the Action.

...

## New error

I've now been hit with a new error, however this does confirm that the `.yml` file is being read through which is great! It can't find the action though so more work needed here.

---

### More in this series

<div class="toc">
    <ul>
        <li><a href="/blog/github-actions-hackathon/getting-started/">Getting Started</a>
        <li class="toc__this"><a href="#">Further Progress</a>
        <li><a href="/blog/github-actions-hackathon/working-on-the-bash/">Working on the bash</a>
        <li><a href="/blog/github-actions-hackathon/npm/">NPM</a>
        <li><a href="/blog/github-actions-hackathon/create-eleventy-site-action/">Published GitHub Action</a>
    </ul>
</div>