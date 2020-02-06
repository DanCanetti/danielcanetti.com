---
postTitle: Wordpressify
date: Last Modified
postTag: Web Development
postFeatureImage: /images/posts/wordpressify/feature.jpg
postExcerpt: A step-by-step guide to setting up WordPressify, a modern workflow for your WordPress development, and MySQL locally on Mac.
---

WordPressify is a modern workflow for your WordPress development, with an integrated web server, that ties into GitHub, BitBucket and GitLab via [WP Pusher](https://wppusher.com/).

## Setting up MySQL Locally

The easiest approach to setting up WordPressify is to have a local instance of MySQL installed, this runs on the Mac and can be controlled MySQL from System Preferences.

* Download MySQL Community Server from the [official site](https://dev.mysql.com/downloads/mysql/).
* Follow the installation instructions.

## Connecting to local MySQL via Sequel Pro

I prefer to use Sequel Pro to connect to MySQL rather than using the command line. You can [download Sequel Pro for free here](https://www.sequelpro.com/).

* Open Sequel Pro.
* Choose the Socket option.
* Enter the Username and Password you created during the MySQL install.
* You should now be connected.

## Preparing to install WordPressify.

* Create a new database.
* Create a new user or assign a current user the correct privileges.
* Keep note of the database name, username, and password. You’ll need these on the next step.

## Installing WordPressify

These instructions can be found on the [WordPressify website](https://www.wordpressify.co/), I’ve included here for ease of use. I have a folder which I use for my Laravel Homestead sites and install each instance in here to keep my workflow simple.

* Using the command line navigate to your desired root directory.
* Using the command line navigate to your desired root directory - `git clone https://github.com/luangjokaj/wordpressify`.
* Install the NPM dependancies - `npm install`.
* Change the template name. Open the gulpfile.js and edit this line: `const themeName = 'wordpressify';`.
* Download the latest version of WordPress - `npm run install:wordpress`.
* Start the workflow and complete the WordPress Install - `npm run dev`.
* Connecting to local MySQL during the WordPress Install.
  * Add the database, username, and password.
  * Use `127.0.0.1` as the host.
* Add your site name, user name and password for the initial user.
* Your site should now be installed using WordPressify.
