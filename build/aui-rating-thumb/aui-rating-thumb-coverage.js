if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-rating-thumb/aui-rating-thumb.js']) {
   __coverage__['build/aui-rating-thumb/aui-rating-thumb.js'] = {"path":"build/aui-rating-thumb/aui-rating-thumb.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"(anonymous_2)","line":100,"loc":{"start":{"line":100,"column":18},"end":{"line":100,"column":29}}},"3":{"name":"(anonymous_3)","line":122,"loc":{"start":{"line":122,"column":16},"end":{"line":122,"column":32}}},"4":{"name":"(anonymous_4)","line":141,"loc":{"start":{"line":141,"column":23},"end":{"line":141,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":148,"column":47}},"2":{"start":{"line":10,"column":0},"end":{"line":16,"column":42}},"3":{"start":{"line":32,"column":0},"end":{"line":143,"column":3}},"4":{"start":{"line":101,"column":12},"end":{"line":102,"column":56}},"5":{"start":{"line":104,"column":12},"end":{"line":104,"column":67}},"6":{"start":{"line":106,"column":12},"end":{"line":106,"column":52}},"7":{"start":{"line":108,"column":12},"end":{"line":108,"column":46}},"8":{"start":{"line":109,"column":12},"end":{"line":109,"column":53}},"9":{"start":{"line":110,"column":12},"end":{"line":110,"column":55}},"10":{"start":{"line":123,"column":12},"end":{"line":124,"column":56}},"11":{"start":{"line":126,"column":12},"end":{"line":126,"column":34}},"12":{"start":{"line":128,"column":12},"end":{"line":132,"column":13}},"13":{"start":{"line":129,"column":16},"end":{"line":129,"column":58}},"14":{"start":{"line":130,"column":16},"end":{"line":130,"column":43}},"15":{"start":{"line":131,"column":16},"end":{"line":131,"column":47}},"16":{"start":{"line":145,"column":0},"end":{"line":145,"column":28}}},"branchMap":{"1":{"line":128,"type":"if","locations":[{"start":{"line":128,"column":12},"end":{"line":128,"column":12}},{"start":{"line":128,"column":12},"end":{"line":128,"column":12}}]}},"code":["(function () { YUI.add('aui-rating-thumb', function (A, NAME) {","","/**\r"," * The Rating Utility - The Thumb Rating creates a non-obstrusive star rating\r"," * control with only two options using Thumb Up and Thumb Down icons.\r"," *\r"," * @module aui-rating\r"," */\r","\r","var getCN = A.getClassName,\r","\r","    CSS_ICON = getCN('glyphicon'),\r","    CSS_ICON_THUMBS_DOWN = getCN('glyphicon', 'thumbs', 'down'),\r","    CSS_ICON_THUMBS_UP = getCN('glyphicon', 'thumbs', 'up'),\r","    CSS_RATING_OFF = getCN('rating', 'off'),\r","    CSS_RATING_ON = getCN('rating', 'on');\r","\r","/**\r"," * A base class for ThumbRating, providing:\r"," *\r"," * - A non-obstrusive star rating control using Thumb up and Thumb down icons\r"," * - Could be based on a set of radio input boxes\r"," *\r"," * Check the [live demo](http://alloyui.com/examples/rating/).\r"," *\r"," * @class A.ThumbRating\r"," * @extends A.Rating\r"," * @param {Object} config Object literal specifying widget configuration\r"," *     properties.\r"," * @constructor\r"," */\r","var ThumbRating = A.Component.create({\r","    /**\r","     * Static property provides a string to identify the class.\r","     *\r","     * @property NAME\r","     * @type String\r","     * @static\r","     */\r","    NAME: 'ThumbRating',\r","\r","    /**\r","     * Static property used to define the default attribute\r","     * configuration for the ThumbRating.\r","     *\r","     * @property ATTRS\r","     * @type Object\r","     * @static\r","     */\r","    ATTRS: {\r","\r","        /**\r","         * CSS classes applied on ThumbRating.\r","         *\r","         * @attribute cssClasses\r","         * @type Object\r","         */\r","        cssClasses: {\r","            value: {\r","                down: [CSS_ICON, CSS_ICON_THUMBS_DOWN].join(' '),\r","                element: CSS_RATING_OFF,\r","                hover: CSS_RATING_ON,\r","                off: CSS_RATING_OFF,\r","                on: CSS_RATING_ON,\r","                up: [CSS_ICON, CSS_ICON_THUMBS_UP].join(' ')\r","            }\r","        },\r","\r","        /**\r","         * The size on ThumbRating is always 2 (i.e., thumb up and thumb down).\r","         *\r","         * @attribute size\r","         * @default 2\r","         * @readOnly\r","         * @type Number\r","         */\r","        size: {\r","            value: 2,\r","            readOnly: true\r","        }\r","    },\r","\r","    /**\r","     * Static property used to define which component it extends.\r","     *\r","     * @property EXTENDS\r","     * @type Object\r","     * @static\r","     */\r","    EXTENDS: A.Rating,\r","\r","    prototype: {\r","\r","        /**\r","         * Create the DOM structure for the ThumbRating. Lifecycle.\r","         *\r","         * @method renderUI\r","         * @protected\r","         */\r","        renderUI: function() {\r","            var instance = this,\r","                cssClasses = instance.get('cssClasses');\r","\r","            ThumbRating.superclass.renderUI.apply(this, arguments);\r","\r","            var elements = instance.get('elements');\r","\r","            elements.addClass(cssClasses.off);\r","            elements.item(0).addClass(cssClasses.up);\r","            elements.item(1).addClass(cssClasses.down);\r","        },\r","\r","        /**\r","         * Add the `className` on the the `index` element\r","         * and all the previous Rating elements.\r","         *\r","         * @method fillTo\r","         * @param {Number} index Index to be selected\r","         * @param {String} className Class name to be applied when fill the\r","         *     Rating elements\r","         */\r","        fillTo: function(index) {\r","            var instance = this,\r","                cssClasses = instance.get('cssClasses');\r","\r","            this.clearSelection();\r","\r","            if (index >= 0) {\r","                var el = this.get('elements').item(index);\r","                el.addClass(cssClasses.on);\r","                el.removeClass(cssClasses.off);\r","            }\r","        },\r","\r","        /**\r","         * Empty method, no logic needed on this method on ThumbRating.\r","         *\r","         * @method _syncElements\r","         * @protected\r","         */\r","        _syncElements: function() {}\r","    }\r","});\r","\r","A.ThumbRating = ThumbRating;\r","","","}, '3.1.0', {\"requires\": [\"aui-rating-base\"]});","","}());"]};
}
var __cov_jCZWWJDgGvFIrSL3czgAfw = __coverage__['build/aui-rating-thumb/aui-rating-thumb.js'];
__cov_jCZWWJDgGvFIrSL3czgAfw.s['1']++;YUI.add('aui-rating-thumb',function(A,NAME){__cov_jCZWWJDgGvFIrSL3czgAfw.f['1']++;__cov_jCZWWJDgGvFIrSL3czgAfw.s['2']++;var getCN=A.getClassName,CSS_ICON=getCN('glyphicon'),CSS_ICON_THUMBS_DOWN=getCN('glyphicon','thumbs','down'),CSS_ICON_THUMBS_UP=getCN('glyphicon','thumbs','up'),CSS_RATING_OFF=getCN('rating','off'),CSS_RATING_ON=getCN('rating','on');__cov_jCZWWJDgGvFIrSL3czgAfw.s['3']++;var ThumbRating=A.Component.create({NAME:'ThumbRating',ATTRS:{cssClasses:{value:{down:[CSS_ICON,CSS_ICON_THUMBS_DOWN].join(' '),element:CSS_RATING_OFF,hover:CSS_RATING_ON,off:CSS_RATING_OFF,on:CSS_RATING_ON,up:[CSS_ICON,CSS_ICON_THUMBS_UP].join(' ')}},size:{value:2,readOnly:true}},EXTENDS:A.Rating,prototype:{renderUI:function(){__cov_jCZWWJDgGvFIrSL3czgAfw.f['2']++;__cov_jCZWWJDgGvFIrSL3czgAfw.s['4']++;var instance=this,cssClasses=instance.get('cssClasses');__cov_jCZWWJDgGvFIrSL3czgAfw.s['5']++;ThumbRating.superclass.renderUI.apply(this,arguments);__cov_jCZWWJDgGvFIrSL3czgAfw.s['6']++;var elements=instance.get('elements');__cov_jCZWWJDgGvFIrSL3czgAfw.s['7']++;elements.addClass(cssClasses.off);__cov_jCZWWJDgGvFIrSL3czgAfw.s['8']++;elements.item(0).addClass(cssClasses.up);__cov_jCZWWJDgGvFIrSL3czgAfw.s['9']++;elements.item(1).addClass(cssClasses.down);},fillTo:function(index){__cov_jCZWWJDgGvFIrSL3czgAfw.f['3']++;__cov_jCZWWJDgGvFIrSL3czgAfw.s['10']++;var instance=this,cssClasses=instance.get('cssClasses');__cov_jCZWWJDgGvFIrSL3czgAfw.s['11']++;this.clearSelection();__cov_jCZWWJDgGvFIrSL3czgAfw.s['12']++;if(index>=0){__cov_jCZWWJDgGvFIrSL3czgAfw.b['1'][0]++;__cov_jCZWWJDgGvFIrSL3czgAfw.s['13']++;var el=this.get('elements').item(index);__cov_jCZWWJDgGvFIrSL3czgAfw.s['14']++;el.addClass(cssClasses.on);__cov_jCZWWJDgGvFIrSL3czgAfw.s['15']++;el.removeClass(cssClasses.off);}else{__cov_jCZWWJDgGvFIrSL3czgAfw.b['1'][1]++;}},_syncElements:function(){__cov_jCZWWJDgGvFIrSL3czgAfw.f['4']++;}}});__cov_jCZWWJDgGvFIrSL3czgAfw.s['16']++;A.ThumbRating=ThumbRating;},'3.1.0',{'requires':['aui-rating-base']});