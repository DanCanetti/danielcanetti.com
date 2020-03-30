---
postTitle: Installing Craft CMS in Homestead
#date: Last Modified
date: 2019-10-31
postTag: Web Development
postFeatureImage: /images/posts/craft-cms-and-homestead/feature.jpg
postFeatureImageRetina: /images/posts/craft-cms-and-homestead/feature@2x.jpg
postFeatureImageFull: /images/posts/craft-cms-and-homestead/feature-full.jpg
postExcerpt: An extract from a larger guide I’m working on for installing Laravel/Homestead.
---

## Prerequisites

- A working Laravel/Homestead environment.

## Installation

In the Homestead.yaml file create a new site mapping to this directory:
`to: /home/vagrant/[project_dir]/[project_name]/public/web`.

Create new homestead site
`composer create-project --prefer-dist laravel/laravel [project_name]`

Create a new database for the Homestead site called `craft_homestead`

Create a second database for the Craft installation called `craft`

Navigate to your new site’s public directory and edit the `.env` file. Add the credentials for the `craft_homestead` database.

Navigate to the Homestead directory and run `vagrant ssh`. Now move into the new project directory `cd [project_dir]/[project_name]` and run the migration: `php artisan migrate`. Once this has completed `exit` the ssh connection.

Navigate to your new site’s public directory and empty the contents
`cd [project_name]/public then run sudo rm -rf *`

Move back to the root of the new site and install Craft in the public directory
`composer create-project craftcms/craft public/`

You can now run the Craft setup wizard from the browser, go to `http://[project_name]/index.php?p=admin/install`. When prompted for the database details enter the credentials for the `craft` database we created earlier.

Once installed your site will be ready at `http://[project_name]/`.

## Updating php.ini directives

Once installed Craft may show some errors in the Requirements area of the *System Report* — `admin > Utilities > System Report`. To fix these we need to make changes to the php.ini file on the vm.

Navigate to the Homestead directory and run `vagrant ssh`.

The php version Craft is using can be found at the top of the System Report page.

Edit the php.ini file `sudo nano /etc/php/[php_version]/fpm/php.ini`.

On Mac use `control + w` and search for `memory_limit`. Change this to 256.

Again using `control + w`, search for `max_execution_time`. Change this to 120.

Exit nano by using `control + x`, answer `y` to save the file and hit `enter` to save over the existing file.

`exit` the ssh connection and reload the machine using `vagrant reload`. Once the machine has restarted refresh the System Report page and the Requirements should now show as valid.

---

***Last Updated:** Thursday 31st October — Added detail on updating the php.ini directives.*