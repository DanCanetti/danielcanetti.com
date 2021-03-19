---
postTitle: Github Pages
#date: Last Modified
date: 2020-05-03
postTag: Web Development
postFeatureImageThumb: /dist/images/githublargethumb.jpg
postFeatureImage: /dist/images/githublarge.jpg
postFeatureImageRetina: /dist/images/githublarge@2x.jpg
postExcerpt: Github pages allows you to host your site directly from the repo. Here's how to set this up for your site.
---

GitHub pages allows you to host your site directly from the repo. It'll build initially with a GitHub url which is great when creating staging or demo sites, but you can also set these up with an Apex domain and run as a live site.

[Learn more about GitHub Pages](https://pages.github.com/).

## Prerequisites:

* The repo must not use server-side languages such as PHP.
* A repo with at least an index.html file.

## Setting up pages

The first thing we want to do is tell GitHub that we want to create a site from this repo. To do this head to your repo and then to the settings tab. About half way down this page there's a GitHub Pages option, to create a page you'll need to select a source from the dropdown, by default this is set to `None`:

1. `master branch` - choose this option if you want to build directly from the branch.
2. `mast branch /docs folder` - choose this option if you have other items in your repo you don't want on the site. For example, I usually compile my 11ty sites into a docs folder.

Once you've chosen an option you should see a green box show above this select saying `Your site is published at https://[GitHub Userame].github.io/[Repo Name]/`

That's it - your site should be ready to use. But what if we want to use an apex domain for this site, such as `www.dummyname.com`?

## Using an apex domain with GitHub Pages

Once your site is built you'll see an option for **Custom Domain** show underneath, here's where you can add the domain you wish to use for the site. Once you've added this also check the **Enforce HTTPS** option beneath, I can't think of a reason why you wouldn't want to do this.

**Note:** You will need to perform a pull of the repo after this has been added as a `CNAME` file is created in the source directory (either repo or docs folder).

Now you've added the domain we need to point the domain to the site by changing your DNS settings. You'll need to add the below IP addresses, all as A records for the domain. 

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Domain propogation can take up to 24 hours depending on the provider, so you might want to put this to oneside now until tomorrow. Keep giving the domain a refresh and eventually you should see the site is ready to go.

### Using Cloudflare

I use Cloudflare to manage my domains and I highly recommend it as the propogation is almost immediate.

**Note:** If you are using Cloudflare to manage your DNS you need to *turn off* proxying for these A records as this can cause issues with GitHub Pages.

### Optional

I typically set up a non-www redirect to www (or vice versa) using Cloudflare page rules. Set up this redirect to which ever domain you've added as the Custom Domain in GitHub - I.E. If you've added www.customdomain.com then add a non-www redirect to www.


### Some things to be aware of

1. It can take a few minutes for the site to show after GitHub says it's ready. This is normal.
2. When you tick Enforce HTTPS it can take a while for the SSL to be generated.
3. Even if your repo is private the GitHub Pages site will be public and accessible from the web.
