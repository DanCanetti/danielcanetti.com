---
postTitle: No CSS or JS on Magento 2 after install
date: Last Modified
postTag: Web Development
postFeatureImage: /images/posts/no-ccs-or-js-on-magento-2-after-install/feature.jpg
postFeatureImageRetina: /images/posts/no-ccs-or-js-on-magento-2-after-install/feature.jpg
postExcerpt: I’ve recently looked at setting up Magento 2 with NGINX and ran into a few issues with loading css and js files.
---

Like many other I use Homestead when working on sites locally, typically with an Apache set-up as I’m usually working on WordPress sites. However I’ve recently looked at setting up Magento 2 with NGINX and ran into a few issues with loading css and js files.

This turned out to be because NGINX was ignoring the `.htaccess` file in the `/pub/static/` directory. After some further examination I found that Magento 2 comes as standard with a sample NGINX config file and I simple need to point the site to it.

## Pointing to the correct config

Navigate to `/etc/nginx/sites-available/` and run `sudo nano [your-site-config]`. Use the below config file to point to the `nginx.conf.sample` file provided in Magento 2 — remember to change [your-site-path] to suit your set-up. In Homestead this is usually `/home/vagrant/[your-projects-directory]/[your-site-name]/public/`.

```
upstream fastcgi_backend {
   server  unix:/run/php/php7.1-fpm.sock;
}

server {
    listen 80;
    server_name  magento2.local;

    set $MAGE_ROOT [your-site-path];
    set $MAGE_MODE developer;
    include [your-site-path]/nginx.conf.sample;
}
```

After you’ve changed the config file you’ll need to restart the service: `sudo systemctl restart nginx.service`.

## Homestead Notes

One issue I have come across with Homestead is that it will rebuild the config file whenever the Vagrant box is halted and started. You’ll need to re-do this change each time.

---

***Last Updated:** Tuesday 22nd October — added service restart command.*

***Last Updated:** Tuesday 22nd October —included note on NGINX config rebuild eachtime Homestead is restarted.*