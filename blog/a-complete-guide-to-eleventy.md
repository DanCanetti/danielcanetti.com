---
postTitle: A complete guide to Eleventy
date: Last Modified
postTag: Web Development
postFeatureImage: /images/posts/a-complete-guide-to-eleventy/feature.jpg
postFeatureImageRetina: /images/posts/a-complete-guide-to-eleventy/feature.jpg
postExcerpt: From installation to continuous deployment - everything you need to get started with the static site generator.
---

## What is Eleventy?

[eleventy](https://www.11ty.io/) is a static site generator designed to be a Javascript alternative to Jekyll - it works with multiple languages and ships with it's own server for local development.

## Quick Start

<https://github.com/DanCanetti/eleventy-boilerplate/>

## Installing Eleventy

Eleventy can be downloaded via the command line. Create a new project directory `mkdir [project_name]` and `cd` into it. Once in there install eleventy - `npm install -g @11ty/eleventy`.

Eleventy is now installed in this directory and can be tested by creating a `test.md` file and then running the command `eleventy`. You'll know eleventy is working as it'll show you this: Writing `_site/temp/index.html from ./temp.md`.

### Basic Structure

Eleventy uses a pretty basic file structure and all files, unless indicated otherwise, in the root will be compiled in to the `_site` directory.

### Site directory

This directory is served to the web and is essentially your live site. It holds the compiled pages along with and css and media files you may have.

### Includes directory

Template files are stored here - I typically have the meta, nav, header, footer and any layout files in here.

### Pages

Usually I create any of the major pages as in html, using the templating to pull in any global modules. For example, in the boilerplate I have the `index.html` file and a `blog.html` file - each of these pulls in the meta, nav and footer includes via their page template, we'll cover more on this in the next section.

Subpages, such as blog posts, should be held in a directory created in the root of the site. This directory should not have an underscore before it.

### eleventyignore

Use this file to let eleventy know which files you do not want to compile - a README.md file for example.

### Templating

Using Liquid and json to pull content from pages and posts.

As mentioned in the previous section, each page can be assigned a layout in at the top of the html or markdown file. See below for an example, we'll break this down after.


```
Fig 1.

---
layout: homepage.liquid
pageTitle: Eleventy Boilerplate
pageClass: homepage
FeatureImage: /images/feature.jpg
pageExcerpt: Pabst paleo seitan shoreditch 90's shabby chic.
---
## The page content starts here
```

The layout calls a liquid template from the `_includes` directory. The liquid template creates the outline for the page and can be called on as many pages as you'd like, below is a basic example of what the `homepage.liquid` file might look like:

```
Fig 2.

<!doctype html>
<html lang="en">
<head>
    { % include meta % }
    <title>Eleventy Boilerplate • { { pageTitle } }</title>
</head>
<body class="{{ pageClass }}">
    <div class="wrapper">
        { % include nav % } { { content } }
    </div>
    { % include footer % }
</body>
</html>
```

As you can see in `**Fig 2**`, we're calling the meta from the `_includes` directory in the head of the document. Any include can be called in a template when using liquid as I do - [find out more here](https://www.11ty.io/docs/languages/liquid/).

You'll also notice that we're calling the other variables from the top of the document - remember this template can be applied to multiple pages. In the example liquid file we're calling the `{{ pageTitle }}`, `{{ pageClass }}` and `{{ content }}`. In `**Fig 1**` we've defined the page title and class for this page and these will be populated when the site is compiled. The `{{ content }}` pulls in everything after `**Fig 1**`.

## Subpages

When creating subpages in a directory, such as blog posts, we can create a .json file which will apply the elements from `**Fig 1**` to all files in the directory. For example, we can apply the same liquid template and class to every blog post in the blog directory:

```
Fig 3.

{    
    "layout": "bloglayout.liquid",
    "pageClass": "post",
    "tags": ["posts"]
}
```

You'll notice the `tags` are declared here, a set of files within a tag can be looped through on other pages - this can be used in a variety of ways such as case studies or blog posts.

## Loops

A loop will display certain elements from a group of files. For example, we can loop through all of the blog posts created like this:

```
Fig 4.

<div class="section">
  <div class="content latest-post-grid all">
    <ul>
    { % assign allblogposts = collections.posts % }
    { % for post in allblogposts % }
      <li class="latest-post">
          <a href="{ { post.url } }">{ { post.data.postTitle } }</a><span class="post-date">{ { post.data.postDate } }</span>
      </li>
    { % endfor % }
    </ul>
  </div>
</div>
```

Here we're looping though all the blog posts and by creating a collection from the posts tag. Once we're looping through we can call the variable from each of the posts, in this example (**Fig 4.**) we're creating list element for each post with a link to the posts url. We're also pulling in the `postDate` here, a custom variable added to the liquid template we're calling in the json file. 

Now we have the basic loop in place we can add some 'filters' to tweak the loop such as limit and reverse. 

```
Fig 5.

<div class="section">
  <div class="content latest-post-grid all">
    <ul>
    { % assign allblogposts = collections.posts limit: 2 | reverse % }
    { % for post in allblogposts % }
      <li class="latest-post">
          <a href="{ { post.url } }">{ { post.data.postTitle } }</a><span class="post-date">{ { post.data.postDate } }</span>
      </li>
    { % endfor % }
    </ul>
  </div>
</div>
```

### Reverse

This will change the default loop order from date ascending to date descending.

### Limit

Limit the number of posts shown. A great use is to show the first 2/3 posts or pages on the homepage.

## Sass and Media

I've found the easiest solution to media, javascript and CSS files is to include then directly in the `_site` directory. When developing your pages remember that the `_site` will be the root of the site on compile - for example you should use `/images/feature.jpg` rather than `_site/images/feature.jpg`.

### Node Sass

For the past few years I've been using [Node Sass](https://www.npmjs.com/package/node-sass) on almost every project I work and implement a [SMACSS](http://smacss.com/) methodology for structuring my partials. If you're interested in learning more [reach out](https://twitter.com/Dan_Canetti) or have a look at my [quick start repo](https://github.com/DanCanetti/sass-quick-start).

## Deployment through Github and Netlify

I always use one of these two solutions for hosting my Eleventy sites, by creating a Github repo for your site you'll be able to enjoy the benefits of automated deployment.

### Netlify

My portfolio is hosted here, for free. It's more powerful than Github pages offering tools such as redirects, forms and split testing on the free tier - with more available on the [paid service](https://www.netlify.com/pricing/). I would recommend this solution for sites with more than one page.

<https://www.netlify.com/>

### Github Pages

I'd only recommend this for simple or single page sites. This is also free and you can create as many sites as you like, however your repo must be public. I recently [upgraded to Pro](https://github.com/pricing) and can now create publicly accessible, single page sites from private repos. Keeping my source code private but allowing me to host single page sites for free.

I've [created a bash script](https://github.com/DanCanetti/eleventy-github-pages-deploy) which copies the `_site` directory to create the docs directory required for building sites via Github pages.

<https://pages.github.com/>

## To conclude

For many years I've been focussed on WordPress development, since switching to Eleventy I've been able to tailor the site build to suit what I need and rapidly develop sites without the need for databases and a bloated codebase. I'd definitely recommend giving it a try.

If you feel like you need to hook a CMS into the site have a look at forestry.io. I've hooked it into my wedding website and love it so far.

I hope this article helps get you started, reach out to me if you have any questions. I'll do my best to answer.
