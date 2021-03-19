---
postTitle: GitHub Actions Hackathon - Working on the bash
#date: Last Modified
date: 2020-09-01
postTag: Hackathon
postFeatureImageThumb: /dist/images/githubactionsthumb.jpg
postFeatureImage: /dist/images/githubactions.jpg
postFeatureImageRetina: /dist/images/githubactions@2x.jpg
postExcerpt: Part 3 - After the last error it was clear that it wasn't finding the `.sh` script in the Action. To resolve this I've amended the `.yml` and changed where to find the bash file - pointing it to the root instead. 
eleventyExcludeFromCollections: true
---

After the last error it was clear that it wasn't finding the `.sh` script in the Action. To resolve this I've amended the `.yml` and changed where to find the bash file - pointing it to the root instead. 

After testing, the error had changed to say `Can't find 'action.yml', 'action.yaml' or 'Dockerfile' under '[dir]'. Did you forget to run actions/checkout before running your local action?`. As far as I know I'm running the checkout correctly but it's a new error to tackle... we seem to be getting somewhere.

Just to make sure I've checked the logs and it is indeed checking out the Repo okay. I've read up some more and it seems like I might need a Dockerfile, which I've now created using [this](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action) from the documentation which will run Linux. I've also renamed the `main.yml` to `action.yml`. 

## Docker error - `"exec: \"/create.sh\": permission denied`

I've been working directly in the GitHub repo for this build so far. To resolve this I'm going to pull this down to my machine and update the permissions on this `.sh` file.

## Major progress! One more issue to fix.

That's done it. The Docker container get's build successfully and the directory and files are created. The only remaining issue is `/create.sh: line 5: npm: not found`.

---

### More in this series

<div class="toc">
    <ul>
        <li><a href="/blog/github-actions-hackathon/getting-started/">Getting Started</a>
        <li><a href="/blog/github-actions-hackathon/further-progress/">Further Progress</a>
        <li class="toc__this"><a href="#">Working on the bash</a>
        <li><a href="/blog/github-actions-hackathon/npm/">NPM</a>
        <li><a href="/blog/github-actions-hackathon/create-eleventy-site-action/">Published GitHub Action</a>
    </ul>
</div>