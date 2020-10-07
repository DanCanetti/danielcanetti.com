---
postTitle: How to run WordPress locally on Mac using Valet
#date: Last Modified
date: 2020-07-22
postTag: Web Development
postFeatureImage: /images/posts/wordpress-valet/feature.jpg
postFeatureImageRetina: /images/posts/wordpress-valet/feature@2x.jpg
postFeatureImageFull: /images/posts/wordpress-valet/feature-full.jpg
postExcerpt: Create and run WordPress websites directly from your Mac via the CLI.
---

I've recently started to learn Laravel and pretty early on the course introduced me to local development, by local I mean directly off the machine, rather than using a tool or VM (Homestead) as I had been doing.

The tool introduced was [Valet](https://laravel.com/docs/7.x/valet), it's described in their documentation as 'a Laravel development environment for Mac minimalists.' Naturally, my next thought was 'if I can run a Laravel application locally, why do I need [MAMP](https://www.mamp.info/en/mamp/mac/) or [Homestead](https://laravel.com/docs/7.x/homestead) to run WordPress sites?' - and thus I set out to see if this was possible.

Yes, it is.

**Please note:** A lot of what I'm about to run through I followed from [this guide](https://wpbeaches.com/setting-up-valet-on-macos-for-local-wordpress-development/). I'm going to include some fixes for issues I ran into but I am in no way taking any credit for their work.

## Installing Homebrew and the required packages

Homebrew is a package manager for MacOS, through this we can install PHP, MySQL and a whole load of other packages -you can [search them all here](https://formulae.brew.sh/cask/). 

Before we get to MySQL and PHP we need to actually install Homebrew. This is pretty straightforward - all we need to do is open up the Terminal and run this command `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`.
 
We now have Homebrew installed and can start to use this to install all the other packages we're going to need:

- Composer: `brew install composer`
- PHP: `brew install php`
- MySQL: `brew install mysql`
- WP CLI: `brew install wp-cli`

We also need to install the package that links WP CLI and Valet together:

- WP CLI Valet Command: `wp package install git@github.com:aaemnnosttv/wp-cli-valet-command.git`

## Expanding the PHP Memory Limits

At this point we're going to tweak our PHP installation to expand the memory. Run `php --ini` to find the config file and then nano into that file, for me this was `nano /usr/local/etc/php/7.3/conf.d/php-memory-limits.ini`. Change limits to 1024M in all 3 places and then restart the service: `brew service restart mysql`.

## The MySQL Issue

In the guide I followed they recommended to run `brew install mysql@5.7` but I later had issues with this when trying to use the WP CLI tool. After an hour of so investigating I found someone else who'd ran into this issue but has found a solution. So, for this guide I'm going to recommend you install the latest version of MySQL and follow the rest of this guide to get up and running.

## Installing Valet

If you like you can follow the [Laravel documentation](https://laravel.com/docs/7.x/valet#installation) for installing Valet as I'll just be dropping that in this guide right about… now!

- Require Valet in Composer: `composer global require laravel/valet`
- Once that's complete we can install Valet: `valet install`

Once Valet is installed, try pinging any `*.test` domain on your terminal using a command such as `ping foobar.test`. If Valet is installed correctly you should see this domain responding on `127.0.0.1`.

Now we know Valet is working we need to tell it where our projects are and this is were we want to generate domains - to do this just navigate to your project folder (using the CLI), for example I'd go `/Documents/Projects/` and then you'll just need to run the `valet park` command.

## The SQL Fix

It was at this stage that I started to run into issues when trying to create a new site via the WP CLI tool that we installed earlier. So, prior to setting up a site lets resolve this pesky SQL 8.x issue that stops the WordPress sites from connecting.

The bug itself is due to an authentication change from `mysql_native_password` to `caching_sha2_password`, there is much more detail about this here.

To fix it all we need to do is access MySQL by running the `mysql -uroot` you'll have seen when Homebrew installed MySQL. Once we're in MySQL run the following command: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';`. What we're doing here is changing the authenticator for the `root` user, I highly recommend you ONLY do this on your local environment.
Once that's done you can exit out of MySQL and we can start looking at the WP CLI installation.

## Setup a WordPress site

Earlier on we installed the WP CLI tool via Homebrew and it's Valet package, now we've got all the other bits and bobs out of the way we can can get our WordPress site installed.

Navigate to your projects folder, once again for me this is `/Documents/Projects/`, and then run `wp valet new wordpressvalet`. You'll see the WP CLI tool doing it's thing and, thanks to the changes we made earlier on the SQL, we shouldn't run into any issues. Once this is complete your site will be available in the browser at [https://wordpresstest.test/](https://wordpresstest.test/). 
That's it, you can now spin up as many WordPress or Laravel projects as you like and run them in the browser directly from your Mac.

---

Hopefully this has been of some help and a big thanks to [WP Beaches](https://wpbeaches.com/) and [Jonathan Desrosiers](https://jonathandesrosiers.com/) for their articles that helped me get all set up and running.

---

## Sources

- [Set Up Valet on macOS for Local WordPress Development](https://wpbeaches.com/setting-up-valet-on-macos-for-local-wordpress-development/)
- [Laravel Valet](https://laravel.com/docs/7.x/valet#installation)
- [Can't connect to local MySQL server through socket homebrew](https://stackoverflow.com/questions/15016376/cant-connect-to-local-mysql-server-through-socket-homebrew)
- [Trouble Connecting to Database When Using MySQL 8.x](https://jonathandesrosiers.com/2019/02/trouble-connecting-to-database-when-using-mysql-8-x/)