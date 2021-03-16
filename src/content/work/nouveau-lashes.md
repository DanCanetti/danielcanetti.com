---
postTitle: Nouveau Lashes
#date: Last Modified
date: 2020-10-05
postTag: WordPress
postFeatureImage: /dist/images/nouveau-lashes.jpg
postFeatureImageRetina: /dist/images/nouveau-lashes@2x.jpg
postExcerpt: A series of updates across the site to bring in a design and update the build. 
isProject: yes
projectLink: https://nouveaulashes.com/eyelash-treatment-aftercare/
---

</div> <!-- End body__section -->

<div class="body__section body__section--post body__section--project-part body__section--{{ postTag | downcase }}">

Following the successful release of the new e-commerce store, Nouveau Lashes began to update the WordPress end of the website. The site is being worked on section by section and by working closeley with the designers the changes are clearly a vast improvement.

## Aftercare

A new section of the site consisting of several new templates.

[View Aftercare](https://nouveaulashes.com/eyelash-treatment-aftercare/)

## Salon Finder

The salon finder already existed on the site and pull data from an api endpoint. The design was cleaned up and brought inline with the recent changes.

[View Salon Finder](https://nouveaulashes.com/salon-finder/)

</div>

<div id="training-dates-widget" class="project-image">
  <picture>
    <source srcset="/dist/images/training-dates-widget@2x.jpg" media="(min-width: 1000px)">
    <source srcset="/dist/images/training-dates-widget.jpg" media="(min-width: 577px)">
    <img srcset="/dist/images/training-dates-widget-mobile.jpg" alt="Training Dates Widget">
  </picture>
</div>

<div class="body__section body__section--post body__section--project-part body__section--{{ postTag | downcase }}">

## Training Dates Widget

Used on several sites across the group, the Training Dates widget pulls from an api endpoint. Upon implementation on the Nouveau Lashes website the code was refactored and the styling updated.

## Book Eyelash Training

A basic landing page, the dropdown selection populates a URL into the link below and sends the user to a more informative page or to book the training online. The locations section is populated dynamically by pulling in the children of an exsisting page.

[View page](https://nouveaulashes.com/book-eyelash-training/)

</div>

<div class="project-image">
  <picture>
    <source srcset="/dist/images/forms@2x.jpg" media="(min-width: 1000px)">
    <source srcset="/dist/images/forms.jpg" media="(min-width: 577px)">
    <img srcset="/dist/images/forms-mobile.jpg" alt="Nouveau Lashes Webform">
  </picture>
</div>

<div class="body__section body__section--post body__section--{{ postTag | downcase }}">

## Webforms

The new webforms use allow desired fields to be populated for any given page. Validation is perfomted using [parsley](https://parsleyjs.org/) and [recaptcha](https://www.google.com/recaptcha/about/) to prevent spam submission. 

<script src="https://gist.github.com/DanCanetti/25338a95d7bbc7d70d9f0ae2563c6c0d.js?file=forms.js"></script>