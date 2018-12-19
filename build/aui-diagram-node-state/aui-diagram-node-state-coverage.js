if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-diagram-node-state/aui-diagram-node-state.js']) {
   __coverage__['build/aui-diagram-node-state/aui-diagram-node-state.js'] = {"path":"build/aui-diagram-node-state/aui-diagram-node-state.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"(anonymous_2)","line":84,"loc":{"start":{"line":84,"column":29},"end":{"line":84,"column":40}}},"3":{"name":"(anonymous_3)","line":102,"loc":{"start":{"line":102,"column":29},"end":{"line":102,"column":40}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":119,"column":48}},"2":{"start":{"line":12,"column":0},"end":{"line":114,"column":3}},"3":{"start":{"line":85,"column":12},"end":{"line":85,"column":32}},"4":{"start":{"line":87,"column":12},"end":{"line":89,"column":14}},"5":{"start":{"line":91,"column":12},"end":{"line":91,"column":37}},"6":{"start":{"line":93,"column":12},"end":{"line":93,"column":28}},"7":{"start":{"line":103,"column":12},"end":{"line":111,"column":14}},"8":{"start":{"line":116,"column":0},"end":{"line":116,"column":38}}},"branchMap":{},"code":["(function () { YUI.add('aui-diagram-node-state', function (A, NAME) {","","/**\r"," * A base class for DiagramNodeState.\r"," *\r"," * @class A.DiagramNodeState\r"," * @extends A.DiagramNode\r"," * @param {Object} config Object literal specifying widget configuration\r"," *     properties.\r"," * @constructor\r"," */\r","var DiagramNodeState = A.Component.create({\r","\r","    /**\r","     * Static property provides a string to identify the class.\r","     *\r","     * @property NAME\r","     * @type String\r","     * @static\r","     */\r","    NAME: 'diagram-node',\r","\r","    /**\r","     * Static property used to define the default attribute\r","     * configuration for the `A.DiagramNodeState`.\r","     *\r","     * @property ATTRS\r","     * @type Object\r","     * @static\r","     */\r","    ATTRS: {\r","\r","        /**\r","         * The height of the node.\r","         *\r","         * @attribute height\r","         * @default 40\r","         * @type Number\r","         */\r","        height: {\r","            value: 40\r","        },\r","\r","        /**\r","         * The type of the node.\r","         *\r","         * @attribute type\r","         * @default 'state'\r","         * @type String\r","         */\r","        type: {\r","            value: 'state'\r","        },\r","\r","        /**\r","         * The width of the node.\r","         *\r","         * @attribute width\r","         * @default 40\r","         * @type Number\r","         */\r","        width: {\r","            value: 40\r","        }\r","    },\r","\r","    /**\r","     * Static property used to define which component it extends.\r","     *\r","     * @property EXTENDS\r","     * @type String\r","     * @static\r","     */\r","    EXTENDS: A.DiagramNode,\r","\r","    prototype: {\r","        hotPoints: A.DiagramNode.CIRCLE_POINTS,\r","\r","        /**\r","         * Renders the shape boundary.\r","         *\r","         * @method renderShapeBoundary\r","         */\r","        renderShapeBoundary: function() {\r","            var instance = this;\r","\r","            var boundary = instance.boundary = instance.get('graphic').addShape(\r","                instance.get('shapeBoundary')\r","            );\r","\r","            boundary.translate(5, 5);\r","\r","            return boundary;\r","        },\r","\r","        /**\r","         * Gets the shape boundary definitions.\r","         *\r","         * @method _valueShapeBoundary\r","         * @protected\r","         */\r","        _valueShapeBoundary: function() {\r","            return {\r","                radius: 15,\r","                type: 'circle',\r","                stroke: {\r","                    weight: 7,\r","                    color: 'transparent',\r","                    opacity: 0\r","                }\r","            };\r","        }\r","    }\r","});\r","\r","A.DiagramNodeState = DiagramNodeState;\r","","","}, '3.1.0', {\"requires\": [\"aui-diagram-node\"]});","","}());"]};
}
var __cov_SISIuPURvlmnEOjMaWvvJA = __coverage__['build/aui-diagram-node-state/aui-diagram-node-state.js'];
__cov_SISIuPURvlmnEOjMaWvvJA.s['1']++;YUI.add('aui-diagram-node-state',function(A,NAME){__cov_SISIuPURvlmnEOjMaWvvJA.f['1']++;__cov_SISIuPURvlmnEOjMaWvvJA.s['2']++;var DiagramNodeState=A.Component.create({NAME:'diagram-node',ATTRS:{height:{value:40},type:{value:'state'},width:{value:40}},EXTENDS:A.DiagramNode,prototype:{hotPoints:A.DiagramNode.CIRCLE_POINTS,renderShapeBoundary:function(){__cov_SISIuPURvlmnEOjMaWvvJA.f['2']++;__cov_SISIuPURvlmnEOjMaWvvJA.s['3']++;var instance=this;__cov_SISIuPURvlmnEOjMaWvvJA.s['4']++;var boundary=instance.boundary=instance.get('graphic').addShape(instance.get('shapeBoundary'));__cov_SISIuPURvlmnEOjMaWvvJA.s['5']++;boundary.translate(5,5);__cov_SISIuPURvlmnEOjMaWvvJA.s['6']++;return boundary;},_valueShapeBoundary:function(){__cov_SISIuPURvlmnEOjMaWvvJA.f['3']++;__cov_SISIuPURvlmnEOjMaWvvJA.s['7']++;return{radius:15,type:'circle',stroke:{weight:7,color:'transparent',opacity:0}};}}});__cov_SISIuPURvlmnEOjMaWvvJA.s['8']++;A.DiagramNodeState=DiagramNodeState;},'3.1.0',{'requires':['aui-diagram-node']});