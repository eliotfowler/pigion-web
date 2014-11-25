angular.module('templates-app', ['dashboard/dashboard.tpl.html', 'dashboard/passwordTool/passwordTool.tpl.html', 'dashboard/userUpload/userUpload.tpl.html', 'download/download.tpl.html', 'landing/landing.tpl.html', 'login/login.tpl.html']);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<link href=\"assets/dashboard.css\" rel=\"stylesheet\"/>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"drop-zone ng-scope\" ng-file-drop=\"onFileSelect($files)\" ng-file-drag-over-class=\"drop-hover\">\n" +
    "    <span>drop files here</span>\n" +
    "\n" +
    "    <a href=\"javascript:;\" class=\"animatedBorderBox\">\n" +
    "        <div class=\"background\"></div>\n" +
    "        <div class=\"content\">HOVER</div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "    <div class=\"container container-fluid\">\n" +
    "\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <a class=\"navbar-brand pull-left\" href=\"#\"><img src=\"assets/images/logo.png\" class=\"logo\"></a>\n" +
    "\n" +
    "                <li class=\"active\"><a href=\"#\"><i class=\"fa fa-bars fa-lg\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-th-large fa-lg\"></i></a></li>\n" +
    "                <li class=\"sort-active\"><a href=\"#\">Date</a></li>\n" +
    "                <!--\n" +
    "                                <li><a href=\"#\">Downloads</a></li>\n" +
    "                                <li><a href=\"#\">Expiring</a></li>\n" +
    "                -->\n" +
    "\n" +
    "                <li class=\"dropdown pull-right white\">\n" +
    "                    <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">Andrew <span class=\"caret\"></span></a>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                        <li><a href=\"#\">Action</a></li>\n" +
    "                        <li><a href=\"#\">Another action</a></li>\n" +
    "                        <li><a href=\"#\">Something else here</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a href=\"#\">Separated link</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"pull-right\"><a href ng-click=\"toggleCheatSheet()\" class=\"small-link\">Hot Keys</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div id=\"files-information\">\n" +
    "        <div class=\"center-wrapper\">\n" +
    "            <div class=\"center-subheader\">\n" +
    "                <input class=\"upload-button\" type=\"file\" ng-file-select=\"onFileSelect($files)\">\n" +
    "                <span> or Drag files in to upload</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <ul class=\"horizontal\">\n" +
    "            <li>\n" +
    "                <ng-pluralize class=\"file-tidbit\"\n" +
    "                              count=\"files.length\"\n" +
    "                              when=\"{'0':'No files',\n" +
    "                                     '1':'1 file',\n" +
    "                                     'other':'{} files'}\">\n" +
    "                </ng-pluralize>\n" +
    "            </li>\n" +
    "            <li><span class=\"file-tidbit\">{{totalFileSize}}kb</span></li>\n" +
    "            <li><span class=\"file-tidbit\">{{userAllTimeFiles}} delivered</span></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"files-section\">\n" +
    "        <div class=\"file-in-files\" ng-repeat=\"i in files\">\n" +
    "            <user-upload file=i></user-upload>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("dashboard/passwordTool/passwordTool.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/passwordTool/passwordTool.tpl.html",
    "<div class=\"password file-info-bit\" ng-mouseover=\"hovering = true\" ng-mouseleave=\"hovering = false\">\n" +
    "    <i ng-show=\"!!hasPassword || !!hovering\" class=\"fa fa-lock pw-icon\"></i>\n" +
    "    <i ng-show=\"!hasPassword && !hovering\" class=\"fa fa-unlock pw-icon\"></i>\n" +
    "    <i ng-show=\"!!hasPassword || !!hovering\"\n" +
    "       ng-class=\"{hovering: hovering}\"\n" +
    "       ng-repeat=\"i in getNumPasswordBubbles() track by $index\"\n" +
    "       class=\"fa fa-circle\">\n" +
    "    </i>\n" +
    "    <span ng-show=\"!hasPassword && !hovering\">no password</span>\n" +
    "    <span href ng-show=\"!!hasPassword && !!hovering\">x</span>\n" +
    "</div>");
}]);

angular.module("dashboard/userUpload/userUpload.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/userUpload/userUpload.tpl.html",
    "<div class=\"progress-background\">\n" +
    "    <progressbar max=\"max\" value=\"dynamic\"></progressbar>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"outer-container\">\n" +
    "\n" +
    "    <div class=\"file-preview\">\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"middle-section col-sm-8\">\n" +
    "        <div class=\"row col-sm-12 file-title\">\n" +
    "            <span class=\"file-name\">{{file.name}}</span><span class=\"file-extension\">.{{file.extension}}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row col-sm-12 file-info\">\n" +
    "            <div class=\"downloads file-info-bit\">\n" +
    "                <i class=\"fa fa-download fa-lg\"></i>\n" +
    "                <ng-pluralize class=\"download-text\"\n" +
    "                              ng-show=\"file.maxDownloads < 0\"\n" +
    "                              count=\"file.numDownloads\"\n" +
    "                              when=\"{'0':'0 times',\n" +
    "                                     '1':'1 time',\n" +
    "                                     'other':'{} times'}\">\n" +
    "                </ng-pluralize>\n" +
    "                <span ng-hide=\"file.maxDownloads < 0\" class=\"download-text\">{{file.numDownloads}} of {{file.maxDownloads}}</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <password-tool has-password=\"!!file.password\"></password-tool>\n" +
    "\n" +
    "            <div class=\" time file-info-bit\">\n" +
    "                <i class=\"fa fa-clock-o\"></i>\n" +
    "                <span am-time-ago=\"date\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row col-sm-12 file-size\">\n" +
    "            <span ng-show=\"!newFile || (newFile && !!doneUploading)\">{{file.size | bytes}}</span>\n" +
    "            <span ng-show=\"(newFile && !doneUploading)\">{{percentUploaded}}% uploaded</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"right-ops\">\n" +
    "        <div class=\"delete\">\n" +
    "            <i class=\"fa fa-trash fa-lg\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"copy\">\n" +
    "            <p>copy</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("download/download.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("download/download.tpl.html",
    "<link href=\"assets/download.css\" rel=\"stylesheet\"/>\n" +
    "\n" +
    "<div class=\"pigion-ad col-xs-12 col-sm-6\">\n" +
    "    <img src=\"assets/images/p_download_logo.png\" class=\"logo\">\n" +
    "\n" +
    "    <div class=\"tagline\">\n" +
    "        <span>The last share tool you</span>\n" +
    "        <span>will ever need</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"learn-more\">\n" +
    "        <a type=\"button\" href=\"http://pigion-web.herokuapp.com\" class=\"btn btn-lg btn-success download\">Learn More</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"file-container col-xs-12 col-sm-6\">\n" +
    "    <div class=\"file-type-container\">\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"file-info\">\n" +
    "        <span class=\"file-name\">{{fileName}}</span><span class=\"file-extension\">.{{fileExtension}}</span>\n" +
    "        <span class=\"file-size\">{{fileInfo.contentSize | bytes}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"file-download\">\n" +
    "        <a type=\"button\" ng-href={{downloadUrl}} class=\"btn btn-lg btn-success download\">Download</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("landing/landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/landing.tpl.html",
    "<link href=\"assets/landing.css\" rel=\"stylesheet\"/>\n" +
    "\n" +
    "<div id=\"mobile-nav\">\n" +
    "    <div class=\"container clearfix\">\n" +
    "        <div>\n" +
    "\n" +
    "            <div class=\"navigationButton sixteen columns clearfix\">\n" +
    "                <img src=\"assets/images/mobile-nav.png\" alt=\"Navigation\" width=\"29\" height=\"17\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"navigationContent sixteen columns clearfix\">\n" +
    "                <ul>\n" +
    "                    <li><a href=\"#section1\">Home</a></li>\n" +
    "                    <li><a href=\"#section2\">Features</a></li>\n" +
    "                    <li><a href=\"#section3\">Blog</a></li>\n" +
    "                    <li><a href=\"/#/login\">Sign In</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<header class=\"clearfix\">\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <div id=\"logo\" class=\"col-sm-3\"><img src=\"assets/images/logo_circ.png\" alt=\"\"><h3 id=\"logo-name\">Pigion</h3></div>\n" +
    "\n" +
    "        <nav id=\"navigation\" class=\"col-sm-9\">\n" +
    "            <ul class=\"clearfix\">\n" +
    "                <li><a class=\"current\" href=\"#section1\">Home</a></li>\n" +
    "                <li><a href=\"#section2\">Features</a></li>\n" +
    "                <li><a href=\"#section3\">Blog</a></li>\n" +
    "                <li><a href=\"/#/login\">Sign In</a></li>\n" +
    "            </ul>\n" +
    "        </nav>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<section id=\"section1\">\n" +
    "    <div class=\"content container\">\n" +
    "        <div class=\"row\">\n" +
    "            <h2>Welcome to the last share tool you will ever need.</h2>\n" +
    "        </div>\n" +
    "        <div class=\"row hero\">\n" +
    "\n" +
    "            <img src=\"assets/images/apple_bg.png\">\n" +
    "\n" +
    "            <div class=\"brand_select\">\n" +
    "                <li class=\"brand_apple\">\n" +
    "                    <img src=\"assets/images/apple_on.png\">\n" +
    "                </li>\n" +
    "                <li class=\"brand_android\">\n" +
    "                    <img src=\"assets/images/android_off.png\">\n" +
    "                </li>\n" +
    "                <li class=\"brand_windows\">\n" +
    "                    <img src=\"assets/images/windows_off.png\">\n" +
    "                </li>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--\n" +
    "                <div class=\"col-xs-1 col-md-4\">\n" +
    "                    <div class=\"device\">\n" +
    "                        <img src=\"http://placehold.it/120x90\" alt=\"\" />\n" +
    "                        <img src=\"http://placehold.it/90x70\" alt=\"\" />\n" +
    "                        <img src=\"http://placehold.it/30x50\" alt=\"\" />\n" +
    "                    </div>\n" +
    "                    <h4>Apple</h4>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-1 col-md-4\">\n" +
    "                    <div class=\"device\">\n" +
    "                        <img src=\"http://placehold.it/90x70\" alt=\"\" />\n" +
    "                        <img src=\"http://placehold.it/30x50\" alt=\"\" />\n" +
    "                    </div>\n" +
    "                    <h4>Android</h4>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-1 col-md-4\">\n" +
    "                    <div class=\"device\">\n" +
    "                        <img src=\"http://placehold.it/90x70\" alt=\"\" />\n" +
    "                        <img src=\"http://placehold.it/120x90\" alt=\"\" />\n" +
    "                    </div>\n" +
    "                    <h4>Windows</h4>\n" +
    "                </div>\n" +
    "                -->\n" +
    "        </div>\n" +
    "        <!--\n" +
    "        <ul class=\"action sixteen columns\">\n" +
    "            <li><a class=\"button\" href=\"#\">Download Now</a></li>\n" +
    "        </ul>\n" +
    "        -->\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"section2\">\n" +
    "    <div class=\"content overview container\">\n" +
    "        <h2 class=\"sixteen columns\">Simplicity at its finest.</h2>\n" +
    "        <p class=\"sub-heading twelve columns offset-by-four\">Pigion makes sharing fun again. With its breadth of features and being open source, Pigion will assist you in all your sharing needs.</p>\n" +
    "        <br class=\"clear\">\n" +
    "\n" +
    "        <div class=\"content-box col-sm-4\">\n" +
    "            <img src=\"assets/images/lock.png\" alt=\"\">\n" +
    "            <h3>Secure Sharing</h3>\n" +
    "            <p>Password protect any file you want to share.</p>\n" +
    "        </div>\n" +
    "        <div class=\"content-box col-sm-4\">\n" +
    "            <img src=\"assets/images/keys.png\" alt=\"\">\n" +
    "            <h3>Dead simple sharing</h3>\n" +
    "            <p>Simply press ⌘ + ^ + c to upload any file on OSX or ^ + ⇧ + C on Windows.</p>\n" +
    "        </div>\n" +
    "        <div class=\"content-box col-sm-4\">\n" +
    "            <img src=\"assets/images/git.png\" alt=\"\">\n" +
    "            <h3>Open Source</h3>\n" +
    "            <p>Always know what is happening when uploading files because Pigion's source is totally open.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"section3\">\n" +
    "\n" +
    "    <div class=\"content container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <h3>Host your own data, but let us carry it</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4 col-sm-offset-2\">\n" +
    "                <h1>20,476</h1>\n" +
    "                <span>Pigion links sent</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"links_sent_bg\"></div>\n" +
    "    <!--\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-5\">\n" +
    "                    <h3>Host your own data, but let us carry it</h3>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-4 col-sm-offset-3\">\n" +
    "                    <h1>20,476</h1>\n" +
    "                    <span>Pigion links sent</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    -->\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"section4\">\n" +
    "    <div class=\"subscribe contatiner\">\n" +
    "        <h2>Exclusive Access</h2>\n" +
    "        <form action=\"#\" method=\"post\" class=\"clearfix\">\n" +
    "            <input type=\"text\" name=\"email\" value=\"\" class=\"text\" placeholder=\"Email\">\n" +
    "            <input type=\"submit\" value=\"Subscribe now\" name=\"subscribe\" class=\"submit\" id=\"subscribe\">\n" +
    "            <p class=\"sub-heading twelve columns offset-by-four\">If you want to be one of the first people to use Pigion, just pop your email in the box.</p>\n" +
    "            <div class=\"notification success closeable sixteen columns\">\n" +
    "                <p><strong>Success!</strong> You will be one of the first people to use Pigion.</p>\n" +
    "            </div>\n" +
    "            <div class=\"notification error closeable sixteen columns\">\n" +
    "                <p><strong>Oops!</strong> Something is wrong, maybe double checking your email will help.</p>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div class=\"small-border\"></div>\n" +
    "        <ul class=\"social-list clearfix\">\n" +
    "            <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/facebook.png\"></a></li>\n" +
    "            <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/twitter.png\"></a></li>\n" +
    "            <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/linkedin.png\"></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<footer>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"footer-author col-xs-6\">\n" +
    "            <img src=\"assets/images/logo_circ.png\" class=\"f_logo\">\n" +
    "            <p>made by</p>\n" +
    "            <p class=\"us\">Eliot Fowler + Andrew Acree</p>\n" +
    "        </div>\n" +
    "        <div class=\"footer-copyright col-xs-6\">\n" +
    "            <p class=\"copyright\">© 2014 Just Cause. All Rights Reserved. </p>\n" +
    "            <ul class=\"footer-action\">\n" +
    "                <li><a class=\"small\" href=\"#\">Privacy Policy</i></a></li>\n" +
    "                <li><a id=\"top\" class=\"small\" href=\"#\">Terms of Service</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<!--<link href=\"/assets/css/bootstrap.min.css\" rel=\"stylesheet\"/>-->\n" +
    "\n" +
    "<div class=\"center\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <img src=\"assets/images/logo.png\" class=\"logo\">\n" +
    "    </div>\n" +
    "\n" +
    "    <form class=\"form-horizontal\" autocomplete=\"off\" method=\"POST\" ng-submit=\"login();\" id=\"fade\" novalidate>\n" +
    "        <div class=\"control-group s_field\" id=\"username_field\">\n" +
    "            <!--<label class=\"control-label\" for=\"username\">Email</label>-->\n" +
    "            <div class=\"controls\">\n" +
    "                <input type=\"text\" id=\"username\" name=\"username\" ng-model=\"username\" value=\"\" placeholder=\"Email\" class=\"input-xlarge\"  autocomplete=\"off\">\n" +
    "                <!--<span class=\"help-block\">Required</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-group s_field\" id=\"password_field\">\n" +
    "            <!--<label class=\"control-label\" for=\"password\">Password</label>-->\n" +
    "            <div class=\"controls\">\n" +
    "                <input type=\"password\" id=\"password\" name=\"password\" ng-model=\"password\" placeholder=\"Password\" class=\"input-xlarge\"  autocomplete=\"off\">\n" +
    "                <!--<span class=\"help-block\">Required</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-actions\">\n" +
    "            <button type=\"submit\" class=\"btn btn-primary special_b\">SIGN IN</button>\n" +
    "\n" +
    "            <a href=\"#/reset\" class=\"btn2 username\">username?</a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"sign_up\">\n" +
    "            <a href=\"/signup\">Sign Up</a>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"b_foot\"></div>");
}]);
