---
postTitle: GitLab Pages
postDate: 6th February 2019
date: 2019-02-06
postFeatureImage: /images/posts/gitlab-pages/feature.jpg
postExcerpt: GitLab pages allow you to publish static websites directly from a repository in GitLab. I mainly use them to host static HTML staging sites.
---

GitLab is a git-repository manager with some differences to GitHub, although the recent [GitHub announcements](https://blog.github.com/2019-01-07-new-year-new-github/) bring the two more in line with one another.

If you’re not aware of GitLab pages, they allow you to [publish static websites directly from a repository](https://docs.gitlab.com/ee/user/project/pages/) in GitLab. There are some limitations, mainly that Pages do not support server-side languages such as PHP, but I mainly use them to host static HTML staging sites. Once set-up correctly pages are generated when the codebase is pushed onto the server and pages can be specific to a branch, for example I use the staging branch to generate the page.

Setting up a GitLab page is a relatively straightforward process. I’ll walk you through the process of setting up a standard HTML config and [point out where I got stuck](https://stackoverflow.com/questions/54227311/pages-not-showing-in-settings-after-successful-pipeline) when first setting this up.

## Prerequisites:

* As mentioned above, the repo must not use server-side languages. [See here for a complete list of supported languages](https://gitlab.com/pages) with example config files.
* A working repo with at least an index.html file.

## The .gitlab-ci.yml file

This is the config file that will deploy the codebase to GitLab pages once pushed to the server, the below mostly consists of the html template GitLab generates and the only change I’ve made is to limit this to the staging branch of the project.

```
pages:
  stage: deploy
  script:
  - mkdir .public
  - cp -r * .public
  - mv .public public
  artifacts:
    paths:
    - public
  only:
    - staging
```

## Creating a .gitlab-ci.yml file

1. To generate this file for yourself, go to your repository and add a new file to the repo by clicking on the `+` and selecting `new file`.
2. At the top of the next page you can select a template from the `choose type` dropdown, select `.gitlab-ci.yml` then click the `Apply a GitLab CI Yaml template` button and select the project type you’re working on. For this example we’ll choose `HTML`.
3. A file very similar to the above should then be generated — you’ll notice the only difference is the `staging` branch I use.
4. Commit the file to your repo, then navigate to `CI/CD` on the left navigation and you should see the pipeline is running.
5. Once this has completed you should see the `Pages` option as appeared in the `Settings` menu on the left side. Inside here you should see a message which states `Congratulations! your pages are served under:` and a link to your page.
6. You’re done!

## Some things to be aware of

You can copy your `.gitlab-ci.yml` file to other projects, as long as you call your branch the same name it should work just fine.

If you Group your projects, **GitLab Pages can only be generated from repos in the top level of a group**, I got stuck trying to generate Pages from a subgroup and this is not supported.

Once you see the `Congratulations!` message it may take a short while for the propagation to take place before you actually see your page. Before then you’ll be served with a 404 page, that’s perfectly normal and you’ve done nothing wrong.
