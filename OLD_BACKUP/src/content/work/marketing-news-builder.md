---
postTitle: Marketing News Builder
#date: Last Modified
date: 2016-06-07
postTag: Javascript - Archived
postFeatureImage: /dist/images/marketing-news-builder.jpg
postFeatureImageRetina: /dist/images/marketing-news-builder@2x.jpg
postExcerpt: A tool quickly developed in jQuery to allow the marketing team to create the weekly newsletter by adding standard sections in order and exporting the code. 
isProject: yes
projectLink: https://github.com/DanCanetti/marketing-news-builder
---

A tool quickly developed in jQuery to allow the marketing team to create the weekly newsletter by adding standard sections in order and exporting the code. 

The newsletter consisted of the same content blocks each week which were almost all always a title section followed by a text section and some buttons. It was dropped together into a template each week so to save time I quickly created the MN (Marketing News) Builder to allow the marketing team to put this together themselves.

</div>

<div class="project-image">
  <picture>
    <source srcset="/dist/images/mn-builder@2x.jpg" media="(min-width: 1000px)">
    <source srcset="/dist/images/mn-builder.jpg" media="(min-width: 577px)">
    <img srcset="/dist/images/mn-builder-mobile.jpg" alt="Marketing News Builder">
  </picture>
</div>

<div class="body__section body__section--post body__section--{{ postTag | downcase }}">

## How it works

The builder just uses jQuery to append each option into a table and the newsletter is built up row by row. The header and footer didn't change so the content was dropped within these elements.

Once complete the user can generate and then copy the code for the newsleter and drop it into ICM, the tool we used to send out our maketing emails, here the text can be updated for the week and images/links changed for the buttons.

</div>
<div class="body__section body__section--post body__section--{{ postTag | downcase }}">