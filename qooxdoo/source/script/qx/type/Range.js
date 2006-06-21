/* ************************************************************************

   qooxdoo - the new era of web development

   Copyright:
     2004-2006 by Schlund + Partner AG, Germany
     All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.org

   Authors:
     * Sebastian Werner (wpbasti)
       <sw at schlund dot de>
     * Andreas Ecker (ecker)
       <ae at schlund dot de>

************************************************************************ */

/* ************************************************************************

#module(range)

************************************************************************ */

/*!
  This manager is used by all objects which needs ranges like qx.ui.form.Spinner, ...
*/
qx.OO.defineClass("qx.type.Range", qx.core.Target,
function()
{
  qx.core.Target.call(this);
});

qx.OO.addProperty({ name : "value", type : qx.constant.Type.NUMBER, defaultValue : 0 });
qx.OO.addProperty({ name : "min", type : qx.constant.Type.NUMBER, defaultValue : 0 });
qx.OO.addProperty({ name : "max", type : qx.constant.Type.NUMBER, defaultValue : 100 });
qx.OO.addProperty({ name : "step", type : qx.constant.Type.NUMBER, defaultValue : 1 });

qx.Proto._checkValue = function(propValue) {
  return Math.max(this.getMin(), Math.min(this.getMax(), Math.floor(propValue)));
};

qx.Proto._modifyValue = function(propValue, propOldValue, propData)
{
  if (this.hasEventListeners(qx.constant.Event.CHANGE)) {
    this.dispatchEvent(new qx.event.type.Event(qx.constant.Event.CHANGE), true);
  };

  return true;
};

qx.Proto._checkMax = function(propValue) {
  return Math.floor(propValue);
};

qx.Proto._modifyMax = function(propValue, propOldValue, propData)
{
  this.setValue(Math.min(this.getValue(), propValue));

  if (this.hasEventListeners(qx.constant.Event.CHANGE)) {
    this.dispatchEvent(new qx.event.type.Event(qx.constant.Event.CHANGE), true);
  };

  return true;
};

qx.Proto._checkMin = function(propValue) {
  return Math.floor(propValue);
};

qx.Proto._modifyMin = function(propValue, propOldValue, propData)
{
  this.setValue(Math.max(this.getValue(), propValue));

  if (this.hasEventListeners(qx.constant.Event.CHANGE)) {
    this.dispatchEvent(new qx.event.type.Event(qx.constant.Event.CHANGE), true);
  };

  return true;
};
