// Images - Icons
import favicon from './images/icons/favicon.ico';
import favicon16 from './images/icons/favicon-16x16.png';
import favicon32 from './images/icons/favicon-32x32.png';
import favicon96 from './images/icons/favicon-96x96.png';
import android36 from './images/icons/android-icon-36x36.png';
import android48 from './images/icons/android-icon-48x48.png';
import android72 from './images/icons/android-icon-72x72.png';
import android96 from './images/icons/android-icon-96x96.png';
import android144 from './images/icons/android-icon-144x144.png';
import android192 from './images/icons/android-icon-192x192.png';
import apple from './images/icons/apple-icon.png';
import appleprecompressed from './images/icons/apple-icon-precomposed.png';
import apple57 from './images/icons/apple-icon-57x57.png';
import apple60 from './images/icons/apple-icon-60x60.png';
import apple72 from './images/icons/apple-icon-72x72.png';
import apple76 from './images/icons/apple-icon-76x76.png';
import apple114 from './images/icons/apple-icon-114x114.png';
import apple120 from './images/icons/apple-icon-120x120.png';
import apple144 from './images/icons/apple-icon-144x144.png';
import apple152 from './images/icons/apple-icon-152x152.png';
import apple180 from './images/icons/apple-icon-180x180.png';
import ms70 from './images/icons/ms-icon-70x70.png';
import ms144 from './images/icons/ms-icon-144x144.png';
import ms150 from './images/icons/ms-icon-150x150.png';
import ms310 from './images/icons/ms-icon-310x310.png';

// CSS
import './_scss/main.scss';

// JS
import $ from 'jquery';

// Awesome Websites
$.ajax({
  url: 'https://api.todoist.com/rest/v1/tasks?project_id=2244262525',
  type: 'GET',
  beforeSend: function (xhr) {
    xhr.setRequestHeader('Authorization', 'Bearer 33f22738b05f81309169eb418bcb10e32e8b59cb');
  },
  data: {},
  success: function (result) {
    $.each(result, function (key, value) {
      // Parse Markdown
      var converter = new showdown.Converter(),
        fullurl = value.content,
        parsedurl = converter.makeHtml(fullurl);
      // Get URL for Favicon
      var getname = /\[([^)]+)\]/;
      var sitename = getname.exec(value.content);
      var getsitename = sitename.toString().split(',')[1];
      var parsestart = parsedurl.replace('<p><a href="https://', '');
      var parseend = parsestart.substr(0, parsestart.lastIndexOf('/"'));
      // Append to list
      $('.website-list').append('<li><img height="16" width="16" src="https://www.google.com/s2/favicons?domain=' + parseend + '" />' + parsedurl + '</li>');
      $(".website-list li a").attr("target", "_blank");
    });
  },
  error: function () {
    console.log('Error getting websites.');
  },
});