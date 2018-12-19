if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datatable-checkbox-cell-editor/aui-datatable-checkbox-cell-editor.js']) {
   __coverage__['build/aui-datatable-checkbox-cell-editor/aui-datatable-checkbox-cell-editor.js'] = {"path":"build/aui-datatable-checkbox-cell-editor/aui-datatable-checkbox-cell-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":65}}},"2":{"name":"(anonymous_2)","line":70,"loc":{"start":{"line":70,"column":26},"end":{"line":70,"column":37}}},"3":{"name":"(anonymous_3)","line":82,"loc":{"start":{"line":82,"column":28},"end":{"line":82,"column":39}}},"4":{"name":"(anonymous_4)","line":97,"loc":{"start":{"line":97,"column":27},"end":{"line":97,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":111,"column":70}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":67}},"3":{"start":{"line":16,"column":0},"end":{"line":106,"column":3}},"4":{"start":{"line":71,"column":12},"end":{"line":71,"column":32}},"5":{"start":{"line":73,"column":12},"end":{"line":73,"column":63}},"6":{"start":{"line":83,"column":12},"end":{"line":83,"column":32}},"7":{"start":{"line":84,"column":12},"end":{"line":84,"column":43}},"8":{"start":{"line":86,"column":12},"end":{"line":88,"column":13}},"9":{"start":{"line":87,"column":16},"end":{"line":87,"column":40}},"10":{"start":{"line":98,"column":12},"end":{"line":98,"column":32}},"11":{"start":{"line":99,"column":12},"end":{"line":99,"column":43}},"12":{"start":{"line":101,"column":12},"end":{"line":103,"column":13}},"13":{"start":{"line":102,"column":16},"end":{"line":102,"column":74}},"14":{"start":{"line":108,"column":0},"end":{"line":108,"column":42}}},"branchMap":{"1":{"line":86,"type":"if","locations":[{"start":{"line":86,"column":12},"end":{"line":86,"column":12}},{"start":{"line":86,"column":12},"end":{"line":86,"column":12}}]},"2":{"line":86,"type":"binary-expr","locations":[{"start":{"line":86,"column":16},"end":{"line":86,"column":23}},{"start":{"line":86,"column":27},"end":{"line":86,"column":41}}]},"3":{"line":101,"type":"if","locations":[{"start":{"line":101,"column":12},"end":{"line":101,"column":12}},{"start":{"line":101,"column":12},"end":{"line":101,"column":12}}]}},"code":["(function () { YUI.add('aui-datatable-checkbox-cell-editor', function (A, NAME) {","","var CheckboxCellEditor,\r","    CSS_CELLEDITOR_ELEMENT = A.getClassName('celleditor', 'element'),\r","    CSS_CELLEDITOR_OPTION = A.getClassName('celleditor', 'option');\r","\r","/**\r"," * CheckboxCellEditor class.\r"," *\r"," * @class A.CheckboxCellEditor\r"," * @extends A.BaseOptionsCellEditor\r"," * @param {Object} config Object literal specifying widget configuration\r"," * properties.\r"," * @constructor\r"," */\r","var CheckboxCellEditor = A.Component.create({\r","\r","    /**\r","     * Static property provides a string to identify the class.\r","     *\r","     * @property NAME\r","     * @type String\r","     * @static\r","     */\r","    NAME: 'checkboxCellEditor',\r","\r","    /**\r","     * Static property used to define the default attribute\r","     * configuration for the `A.CheckboxCellEditor`.\r","     *\r","     * @property ATTRS\r","     * @type Object\r","     * @static\r","     */\r","    ATTRS: {\r","\r","        /**\r","         * Defines the selected state of an option.\r","         *\r","         * @attribute selectedAttrName\r","         * @default 'checked'\r","         * @type String\r","         */\r","        selectedAttrName: {\r","            value: 'checked'\r","        }\r","    },\r","\r","    /**\r","     * Static property used to define which component it extends.\r","     *\r","     * @property EXTENDS\r","     * @type Object\r","     * @static\r","     */\r","    EXTENDS: A.BaseOptionsCellEditor,\r","\r","    prototype: {\r","        ELEMENT_TEMPLATE: '<div class=\"' + CSS_CELLEDITOR_ELEMENT + '\"></div>',\r","        OPTION_TEMPLATE: '<input class=\"' +\r","            CSS_CELLEDITOR_OPTION + '\" id=\"{id}\" name=\"{name}\" type=\"checkbox\" value=\"{value}\"/>',\r","        OPTION_WRAPPER: '<label class=\"checkbox\" for=\"{id}\"> {label}</label>',\r","\r","        /**\r","         * Gets the `A.CheckboxCellEditor` input value.\r","         *\r","         * @method getElementsValue\r","         * @return {String} Input value.\r","         */\r","        getElementsValue: function() {\r","            var instance = this;\r","\r","            return instance._getSelectedOptions().get('value');\r","        },\r","\r","        /**\r","         * Syncs the name attribute of the form input.\r","         *\r","         * @method _syncElementsFocus\r","         * @protected\r","         */\r","        _syncElementsFocus: function() {\r","            var instance = this;\r","            var options = instance.options;\r","\r","            if (options && options.size()) {\r","                options.item(0).focus();\r","            }\r","        },\r","\r","        /**\r","         * Syncs the name attribute of the form input.\r","         *\r","         * @method _syncElementsName\r","         * @protected\r","         */\r","        _syncElementsName: function() {\r","            var instance = this;\r","            var options = instance.options;\r","\r","            if (options) {\r","                options.setAttribute('name', instance.get('elementName'));\r","            }\r","        }\r","    }\r","});\r","\r","A.CheckboxCellEditor = CheckboxCellEditor;\r","","","}, '3.1.0', {\"requires\": [\"aui-datatable-base-options-cell-editor\"]});","","}());"]};
}
var __cov_5XK6XYUEBV9JgTZ89Ta$Hg = __coverage__['build/aui-datatable-checkbox-cell-editor/aui-datatable-checkbox-cell-editor.js'];
__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['1']++;YUI.add('aui-datatable-checkbox-cell-editor',function(A,NAME){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.f['1']++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['2']++;var CheckboxCellEditor,CSS_CELLEDITOR_ELEMENT=A.getClassName('celleditor','element'),CSS_CELLEDITOR_OPTION=A.getClassName('celleditor','option');__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['3']++;var CheckboxCellEditor=A.Component.create({NAME:'checkboxCellEditor',ATTRS:{selectedAttrName:{value:'checked'}},EXTENDS:A.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+CSS_CELLEDITOR_ELEMENT+'"></div>',OPTION_TEMPLATE:'<input class="'+CSS_CELLEDITOR_OPTION+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="checkbox" for="{id}"> {label}</label>',getElementsValue:function(){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.f['2']++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['4']++;var instance=this;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['5']++;return instance._getSelectedOptions().get('value');},_syncElementsFocus:function(){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.f['3']++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['6']++;var instance=this;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['7']++;var options=instance.options;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['8']++;if((__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['2'][0]++,options)&&(__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['2'][1]++,options.size())){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['1'][0]++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['9']++;options.item(0).focus();}else{__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['1'][1]++;}},_syncElementsName:function(){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.f['4']++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['10']++;var instance=this;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['11']++;var options=instance.options;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['12']++;if(options){__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['3'][0]++;__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['13']++;options.setAttribute('name',instance.get('elementName'));}else{__cov_5XK6XYUEBV9JgTZ89Ta$Hg.b['3'][1]++;}}}});__cov_5XK6XYUEBV9JgTZ89Ta$Hg.s['14']++;A.CheckboxCellEditor=CheckboxCellEditor;},'3.1.0',{'requires':['aui-datatable-base-options-cell-editor']});