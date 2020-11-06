---
postTitle: 0 to WordPress in 4 minutes
#date: Last Modified
date: 2020-02-01
postTag: Web Development
postFeatureImage: /dist/images/zerotowordpress.jpg
postFeatureImageRetina: /dist/images/zerotowordpress@2x.jpg
postExcerpt: Go from nothing to a working local WordPress site in a matter of minutes.
---

## Step One — Preparation
Download both MAMP and WordPress.
- [Download MAMP here](https://en-gb.wordpress.org/download/)
- [Download WordPress here](https://en-gb.wordpress.org/download/)

## Step Two — Setup
Firstly we’re going to set up MAMP. Double click on the installer in your downloads folder and follow the instructions.

*Optional:*
I usually remove the MAMP Pro application by dropping it into the trash as we aren’t going to use this.

Ready to continue? Great! Let’s move on.

Unzip your WordPress download and move it the location you want to base your project. For me this is Documents > Projects. Once you’ve moved the `wordpress` folder rename it to suit your project, e.g. `example-project`.

Go to Applications > MAMP > MAMP (The MAMP application is stored within an MAMP folder). When this opens up, in the top bar of your Mac next to the apple logo click on MAMP > Preferences > Web Server.

From here we can tell MAMP the source for our projects, to keep it simple we’ll tell it to use the WordPress download we moved earlier. Click on `select` and find the folder we moved to Documents > Projects and click `select`. Then click okay and the Preferences window should close.

Now we’re ready to fire up our servers. Click `Start Servers` — both the Apache and MySQL servers should go green and the MAMP homepage should open in the browser.

## Step Three — Installation
Once your servers are running you’ll see the MAMP homepage. From here we’ll need to do a couple of things, firstly we’ll set up a database for your new WordPress site.

### Database Setup
1. Click on Tools > PHPMYADMIN
2. Click *New in the left menu
3. You’ll then see Create Database in the main area
4. Add your database name without spaces (e.g `example_database`)
5. Leave the dropdown next to this as `utf8_general_ci` and hit create
6. Now go back to your MAMP tab. We’re ready to setup WordPress

### WordPress Setup
1. On the MAMP screen click on MYWEBSITE. You should now see the WordPress setup page. Click on Let’s Go.
2. On the next screen we’re going to add your Database credentials.
3. The database name is the one created in the last section (e.g `example_database`)
4. The username is `root` and the password is also `root`
5. Leave the host as `localhost` and leave the prefix as `wp_`
6. Click `submit` then you should see the next screen. Click `run installation`.


## Setting up your WordPress site
Congrats! Your WordPress site should now be installed and you’re ready to get started. All the steps in this section can be changed at a later date, so no need to worry.

1. Enter the site title (e.g. My WordPress Site)
2. Enter the username for your user (e.g. Joe Bloggs)
3. Enter the password — make sure you can remember this as you’ll need to login in shortly!
4. Enter an email — this should be a real email address you have access to in case you need to reset your password.
5. Click `Install WordPress`.

Hooray! You’re good to go! Log in with credentials you created above and get started on your site.

## Common errors and how to solve them
I’ve downloaded and setup MAMP more times than I can count, some times we can hit some unexpected errors. Here are some of the more common errors and how to solve them:

### Port 8888 is being used by another application
Go MAMP > Preferences > Ports and change both Apache and NGINX to 8080. Quit MAMP, re-open and try to start your servers again.

### The MySQL Server won’t start
Quit MAMP. Open up Terminal (Applications > Utilities > Terminal) and enter sudo killall -9 mysqld. Re-open MAMP and try to start your servers again.
