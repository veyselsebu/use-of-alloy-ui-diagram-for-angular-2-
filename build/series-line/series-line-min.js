YUI.add("series-line",function(e,s){e.LineSeries=e.Base.create("lineSeries",e.CartesianSeries,[e.Lines],{drawSeries:function(){this.drawLines()},_setStyles:function(s){return s.line||(s={line:s}),e.LineSeries.superclass._setStyles.apply(this,[s])},_getDefaultStyles:function(){return this._mergeStyles({line:this._getLineDefaults()},e.LineSeries.superclass._getDefaultStyles())}},{ATTRS:{type:{value:"line"}}})},"patched-v3.18.1",{requires:["series-cartesian","series-line-util"]});