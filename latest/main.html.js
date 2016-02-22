tui.util.defineNamespace("fedoc.content", {});
fedoc.content["main.html"] = "<div id=\"main\" class=\"readme\">\n\n\n\n    \n\n\n    <h3> </h3>\n\n\n\n\n\n\n\n\n\n\n    \n\n\n\n\n    <section class=\"main-content\">\n        <article><div class=\"readme\"><h1>File Uploader</h1><p>File Uploader Component<br><br>The component support to upload files to server.</p>\n<h2>Feature</h2><ul>\n<li>X-domain support</li>\n<li>Multiple upload</li>\n<li>Listing uploaded files</li>\n<li>Add files, Remove files</li>\n</ul>\n<h2>Documentation</h2><ul>\n<li><strong>API</strong> : https://nhnent.github.io/tui.component.file-uploader/latest</li>\n<li><strong>Tutorial</strong> : https://github.com/nhnent/tui.component.file-uploader/wiki/File-Uploader-Tutorial</li>\n</ul>\n<h2>Dependency</h2><ul>\n<li>tui-code-snippet: ~1.0.4</li>\n<li>jquery: ~1.8.3</li>\n</ul>\n<h2>Test environment</h2><ul>\n<li>PC<ul>\n<li>IE7~11</li>\n<li>Chrome</li>\n<li>Firefox</li>\n</ul>\n</li>\n</ul>\n<h2>Download/Install</h2><ul>\n<li>Bower:<ul>\n<li>latest : <code>bower install tui-component-file-uploader#master</code></li>\n<li>each version : <code>bower install tui-component-file-uploader[#tag]</code></li>\n</ul>\n</li>\n<li>Download: https://github.com/nhnent/tui.component.file-uploader</li>\n</ul>\n<h2>History</h2><table>\n<thead>\n<tr>\n<th>Version</th>\n<th>Description</th>\n<th>Date</th>\n<th>Developer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href=\"http://nhnent.github.io/tui.component.file-uploader/1.1.0/\">1.1.0</a></td>\n<td><a href=\"https://github.com/nhnent/tui.component.file-uploader/releases/tag/1.1.0\">Refactoring</a></td>\n<td>2016.02</td>\n<td>NHN Ent. FE Dev team <a href=\"&#x6d;&#97;&#105;&#x6c;&#x74;&#111;&#58;&#x64;&#x6c;&#95;&#106;&#97;&#118;&#x61;&#x73;&#99;&#114;&#x69;&#112;&#x74;&#x40;&#110;&#104;&#110;&#x65;&#x6e;&#x74;&#x2e;&#x63;&#x6f;&#x6d;\">&#x64;&#x6c;&#95;&#106;&#97;&#118;&#x61;&#x73;&#99;&#114;&#x69;&#112;&#x74;&#x40;&#110;&#104;&#110;&#x65;&#x6e;&#x74;&#x2e;&#x63;&#x6f;&#x6d;</a></td>\n</tr>\n<tr>\n<td>1.0.2</td>\n<td>fix bugs - batch transfer, file remove</td>\n<td>2016.01</td>\n<td>NHN Ent. FE Dev team <a href=\"&#x6d;&#x61;&#105;&#108;&#116;&#111;&#x3a;&#x64;&#x6c;&#95;&#106;&#x61;&#118;&#97;&#115;&#x63;&#114;&#x69;&#112;&#x74;&#x40;&#x6e;&#x68;&#110;&#x65;&#x6e;&#x74;&#46;&#x63;&#x6f;&#109;\">&#x64;&#x6c;&#95;&#106;&#x61;&#118;&#97;&#115;&#x63;&#114;&#x69;&#112;&#x74;&#x40;&#x6e;&#x68;&#110;&#x65;&#x6e;&#x74;&#46;&#x63;&#x6f;&#109;</a></td>\n</tr>\n<tr>\n<td>1.0.1</td>\n<td>Namespace changed</td>\n<td>2015.10</td>\n<td>NHN Ent. FE Dev team <a href=\"&#x6d;&#97;&#x69;&#108;&#116;&#x6f;&#58;&#x64;&#108;&#x5f;&#106;&#97;&#x76;&#x61;&#115;&#x63;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#104;&#110;&#101;&#x6e;&#x74;&#x2e;&#99;&#111;&#x6d;\">&#x64;&#108;&#x5f;&#106;&#97;&#x76;&#x61;&#115;&#x63;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#104;&#110;&#101;&#x6e;&#x74;&#x2e;&#99;&#111;&#x6d;</a></td>\n</tr>\n<tr>\n<td>1.0.1</td>\n<td>Drag and Drop, folder select, batch transfer</td>\n<td>2015.08</td>\n<td>NHN Ent. FE dev team <a href=\"&#109;&#x61;&#x69;&#x6c;&#116;&#111;&#58;&#100;&#x6c;&#95;&#x6a;&#x61;&#118;&#x61;&#115;&#x63;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#x68;&#x6e;&#101;&#110;&#x74;&#x2e;&#x63;&#111;&#x6d;\">&#100;&#x6c;&#95;&#x6a;&#x61;&#118;&#x61;&#115;&#x63;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#x68;&#x6e;&#101;&#110;&#x74;&#x2e;&#x63;&#111;&#x6d;</a></td>\n</tr>\n<tr>\n<td><a href=\"http://nhnent.github.io/tui.component.file-uploader/1.0.0/\">1.0.0</a></td>\n<td>Release</td>\n<td>2015.07</td>\n<td>NHN Ent. FE dev team <a href=\"&#x6d;&#x61;&#105;&#108;&#x74;&#x6f;&#58;&#x64;&#x6c;&#x5f;&#x6a;&#x61;&#x76;&#97;&#x73;&#x63;&#114;&#x69;&#x70;&#116;&#x40;&#110;&#x68;&#110;&#x65;&#110;&#116;&#46;&#x63;&#111;&#109;\">&#x64;&#x6c;&#x5f;&#x6a;&#x61;&#x76;&#97;&#x73;&#x63;&#114;&#x69;&#x70;&#116;&#x40;&#110;&#x68;&#110;&#x65;&#110;&#116;&#46;&#x63;&#111;&#109;</a></td>\n</tr>\n</tbody>\n</table>\n<h2>LICENSE</h2><p><a href=\"LICENSE\">MIT LICENSE</a></p>\n<h2>Sponsor</h2><ul>\n<li><img src=\"https://cloud.githubusercontent.com/assets/12269563/12287774/8cf4d2c0-ba12-11e5-9fa8-0a9c452cca05.png\" height=\"30\"><br><br><a href=\"https://www.browserstack.com/\">BrowserStack</a> is a cloud based cross browser testing tool</li>\n</ul></div></article>\n    </section>\n\n\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        consts.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>Configuration or default values.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li><a href=\"mailto:dl_javascript@nhnent.com\">NHN Ent. FE Development Team</a></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        pool.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>This is manager of input elements that act like file pool.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li><a href=\"mailto:dl_javascript@nhnent.com\">NHN Ent. FE Development Team</a></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        uploader.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>FileUploader is core of file uploader component.<br>FileManager manage connector to connect server and update FileListView.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li><a href=\"mailto:dl_javascript@nhnent.com\">NHN Ent. FE Development Team</a></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        utils.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>This file contain utility methods for uploader.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li><a href=\"mailto:dl_javascript@nhnent.com\">NHN Ent. FE Development Team</a></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"