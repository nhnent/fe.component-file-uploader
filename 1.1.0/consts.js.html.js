tui.util.defineNamespace("fedoc.content", {});
fedoc.content["consts.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Configuration or default values.\n * @author NHN Ent. FE Development Team &lt;dl_javascript@nhnent.com>\n */\n'use strict';\n\n/**\n * Uploader config\n */\nmodule.exports.CONF = {\n    FILE_FILED_NAME: 'userfile[]',\n    DROP_ENABLED_CLASS: 'dropEnabled',\n    HIDDEN_FILE_INPUT_CLASS: 'hiddenFileInput',\n    REQUESTER_TYPE_MODERN: 'modernRequester',\n    REQUESTER_TYPE_OLD: 'oldRequester',\n    FORM_TARGET_NAME: 'tuiUploaderHiddenFrame',\n    REMOVE_BUTTON_CLASS: 'removeButton'\n};\n\n/**\n * Default Htmls\n * @type {{input: string, item: string}}\n */\nmodule.exports.HTML = {\n    form: [\n        '&lt;form enctype=\"multipart/form-data\" id=\"tui-uploader-form\" method=\"post\">',\n        '&lt;/form>'\n    ].join(''),\n    submit: '&lt;button class=\"batchSubmit\" type=\"submit\">SEND&lt;/button>',\n    fileInput: '&lt;input type=\"file\" id=\"fileAttach\" {{directory}} name=\"{{fileField}}\" {{multiple}} />',\n    hiddenInput: '&lt;input type=\"hidden\" name=\"{{name}}\" value=\"{{value}}\">',\n    button: '&lt;button type=\"button\">{{text}}&lt;/button>',\n    listItem: [\n        '&lt;li class=\"filetypeDisplayClass\">',\n            '&lt;span class=\"fileicon {{filetype}}\">{{filetype}}&lt;/span>',\n            '&lt;span class=\"file_name\">{{filename}}&lt;/span>',\n            '&lt;span class=\"file_size\">{{filesize}}&lt;/span>',\n        '&lt;/li>'\n    ].join(''),\n    dragAndDrop: '&lt;div class=\"dropzone\">&lt;/div>'\n};\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"