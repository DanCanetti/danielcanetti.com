---
postTitle: A year in review
#date: Last Modified
date: 2020-12-30
postTag: Web Development
postFeatureImageThumb: /dist/images/yir-2020thumb.jpg
postFeatureImage: /dist/images/yir-2020.jpg
postFeatureImageRetina: /dist/images/yir-2020@2x.jpg
postExcerpt: 2020 is a year to forget in most aspects, however danielcanetti.com has seen some major improvements and I've learnt some valuable new skills along the way.
---

2020 is a year to forget in most aspects, however danielcanetti.com has seen some major improvements and I've learnt some valuable new skills along the way. You may have noticed a visual change with a simpler layout and cleaner colour pallete, but there's much more to the update and here I'll take a deeper dive into the techincal changes and advancements that have been made to the site.

## The old

Before these updates were made the site was still built on [eleventy](https://www.11ty.dev/), a static site generator, having previously being built on WordPress for a number of years - if you're interested in making the switch, have a look at this [Smashing Magazine article](https://www.smashingmagazine.com/2020/12/wordpress-eleventy-static-site-generator/).

By the end of 2019 the site [danielcanetti.com] had become increasingly bloated and unorganised. I wasn't taking advantage of the simplicity Jamstack offers and found updating the site to be a complicated and time-consuming process riddled with inefficient processes and incorrect build steps which regularly led to build errors.

Add to this the messy and unorganised root directories and that I was manually updating the build directory with js files and images (I was using Node Sass to compile CSS into this directory at least) and the simplicity of Jamstack is lost further.

*Find out more about [Jamstack](https://jamstack.org/).*

## The new

One the biggest issues I had was just how un-organised the site was, my first action was to tidy this up. There were a number of steps to be taken here, firstly I had to figure out how to make sure the build directory was untouched when I was updating the site. Enter [webpack](https://webpack.js.org/).

### Webpack

For those that don't know, webpack 'is a module bundler' with a primary focus on javascript but can become much more powerful with additional loaders. For a while I'd been putting off learning how to use it as it looked quite complicated and I was little scared to just dive into it... but boy am I glad I did.

It turns out it's really simple to use and has been a huge benefit to my development process, I can honestly say it's been just as game-changing for me as Sass - they're both now a core part of any new project I work on.

Of course I moved all the javascript into webpack and I also stopped using the Node Sass compiler in favour of a webpack loader. Finally, I migrated all the images out of the build directory and included them within the webpack using a media loader, all this meant that I now had a `src` directory outside of the build directory (which was still named `_site` from the default 11ty settings). 

The only issue I ran into was the dreaded FOUC [Flash of un-styled content]. To correct this I simple added the [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) to the config and exported the CSS out as a separate file, allowing me to keep the js files set to `defer` on page load and avoid any FOUC.

Once I had everything compiling correctly I wanted to find a way to be able to run 11ty locally (typicaly `eleventy --serve`) and compile webpack (typically `npx webpack`) simultaniously. Thankfully, I was able to follow [this guide](https://statickit.com/guides/eleventy-webpack) from [Statickit](https://statickit.com/) and now all I need to run is `npm run serve` and all compilation happens at the same time (including Sass).

*Find out more about [webpack](https://webpack.js.org/) and [Sass](https://sass-lang.com/).*

### Eleventy templates

Now I have all the static files compiling into my build directory I wanted to consolidate my 11ty template files into the same `src` directory. Thankfully they're really good at support and they gave me a nudge in the right direction, it turns out it was in the 11ty documentation the whole time!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Change the input directory!</p>&mdash; Eleventy (@eleven_ty) <a href="https://twitter.com/eleven_ty/status/1313962871634702337?ref_src=twsrc%5Etfw">October 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I changed the 11ty config to look at the `src` directory and moved all my template files into here, nice and simple. At the same time I changed the output directory to `docs` for a few reasons: 1) It looks cleaner than `_site` 2) I used [Github pages](https://pages.github.com/) for a lot of small brochure sites and it was habit 3) It's a good option to have as a fallback - should I decide to move away from [Netlify](https://www.netlify.com/) (not likely at the moment, I love Netlify) then I can use Github pages as an intermediate/fallback host.

*Find out more about the [11ty documentation](https://www.11ty.dev/docs/), [Github pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/).*

### File cleanup

As mentioned previously the site was messy and unorganised, in all areas. There were unused `include` files and images, the styling had become a jumbled mess - I follow the [SMACSS](http://smacss.com/) methodology for structuring my partials and [BEM](http://getbem.com/) as my naming convention - there was `layout` styling in the `modules` file and vice-versa, along with huge chunks of unused CSS. Finally, there were a couple of 11ty plugins that I did not use still set-up and most of the template files had unused or legacy keys in their front matter which was just, again, messy. 

I tided up all of the images and `includes` as part of the migration to webpack and spent a good few hours cleaning up the front matter and unused template files. The CSS was cleaned up as part of the aforementioned visual update to the site.

*Find out more about [SMACSS](http://smacss.com/), [BEM](http://getbem.com/) and [11ty plugins](https://www.11ty.dev/docs/plugins/).*


## Honourable mentions

### Liquid

I've improved my knowledge of the [liquid templating language](https://shopify.github.io/liquid/basics/introduction/) to refine my loops and limit asset loading to relevant pages.

*Find out more about [liquid](https://shopify.github.io/liquid/basics/introduction/)*.

### Post bundles

To try and improve the user flow and keep the blog clean I've started to bundle some related posts together, this series on my [Github Hackathon](/blog/github-actions-hackathon/) for example.

### Sitemap generator

Using [this helpful post from dev.to](https://dev.to/iarehilton/creating-a-sitemap-in-11ty-2jll) I've created a simple nunjucks template that generates a sitemap as part of the site build process.

*View [creating a sitemap in 11ty](https://dev.to/iarehilton/creating-a-sitemap-in-11ty-2jll)*.

### Changelog

I've added [a nice little 11ty plugin](https://github.com/workeffortwaste/eleventy-plugin-recent-changes/) which generates a changelog for the site. Seemed like a nice resource to have available and it should me keep on top of my commit messaging.

*View [eleventy-plugin-recent-changes](https://github.com/workeffortwaste/eleventy-plugin-recent-changes/)*.

### Awesome websites

Making use of the Todoist API, I added a new page recently which displays a list of great websites I've curated over the past few years. Keep an eye out for a separate post on how this was built, it's coming soon!  

*View the [awesome websites page](/awesome-sites/)*.

## Coming up in 2021

Some great progress has been made in 2020, but there's still more to be done. The biggest change I've made at the end of this year was to step back from some of my freelance work to allow more time for golf, exercise, personal development, and a little downtime.

I'm looking forward to progressing with the Typescript and Angular courses on [Ultimate Courses](https://ultimatecourses.com/) - shout out to [Todd Motto](https://twitter.com/toddmotto) for his excellent work.

There's still some outstanding tasks for this site, including:

- Use my [pi](https://www.raspberrypi.org/) to create a server for [Unami](https://umami.is/docs/about), self-hosted web analytics solution and move away from Google Analytics - [for many reasons](https://dev.to/markosaric/why-you-should-remove-google-analytics-from-your-site-5c7h).
- Dedicated pages for projects with more indepth content and imagery.
- Create a filter for blog posts based on the tags.
- I’m currently using [NoCodeAPI](https://nocodeapi.com/) to create a Telegram message whenever my Netlify build is complete. I’m be looking to build my own API call for this so I can cherry-pick the information I receive in the messages and also separate out build reports and contact form submissions.
- Add pagination to blog posts - no more scrolling forever!
- Blog more!
- Try to use more of my own imagery for blog posts.

---

Thanks for reading and please reach out on [Twitter](https://twitter.com/dan_canetti/) if you have any questions or want to chat about any of the work I've discussed above.

Have a great new year, here's to a better 2021!