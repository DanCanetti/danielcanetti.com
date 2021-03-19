---
postTitle: Host an Eleventy site on Github Pages
#date: Last Modified
date: 2020-08-07
postTag: Web Development
postFeatureImageThumb: /dist/images/eleventygithubpagesthumb.jpg
postFeatureImage: /dist/images/eleventygithubpages.jpg
postFeatureImageRetina: /dist/images/eleventygithubpages@2x.jpg
postExcerpt: Host your Eleventy site for free on Github pages.
---

Github pages allows you to host your site directly from the repo on an Apex domain - essentialy it's free hosting! Even better, you can configure your Eleventy site to output to the `docs` directory Github uses by making a simple config change.

Copy and paste the below into your `eleventy.js` file (if you don't have one create this file in the root of your project), all we're doing here is changing the output from the default `_site` directory to `docs`.

```
module.exports = {
    dir: {
        output: "docs"
    }
};
```

Once you've made this change - the next time you compile 11ty will create the `docs` directory with all your site files in it.

## Some good extra reading

- [Github Pages](/blog/github-pages/)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
- [11ty Configuration](https://www.11ty.dev/docs/config/)

