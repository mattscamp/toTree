var toTree = (function toTree(global) {
  'use strict';

  function addAttributes(attributes) {
    var attributesObj = {};
    if(attributes) {
      for (var i = 0; i < attributes.length; i++) {
        attributesObj[attributes[i].nodeName] = attributes[i].nodeValue;
      }
    }
    return attributesObj;
  }

  function addChildren(children) {
    var childrenArr = [];
    if(children) {
      for (var i = 0; i < 25; i++) {
        if(children[i] !== undefined && children[i].tagName) {
          childrenArr.push(node(children[i]));
        }
      }
    }
    return childrenArr;
  }

  function node(el) {
    var nodeObj = {};
    nodeObj.tag = el.tagName;
    nodeObj.attributes = addAttributes(el.attributes);
    nodeObj.id = uId();
    nodeObj.index = 0;
    nodeObj.children = addChildren(el.childNodes);
    return nodeObj;
  }

  function toTree(el) {
    var treeObj = {};

    if (!this || this === global) {
      return new toTree(el);
    }

    if(typeof el === 'string') {
      el = document.getElementsByTagName(el);
    }

    treeObj = node(el);

    return treeObj;
  }

  return toTree;

})(this);

if (typeof exports !== 'undefined') {
  module.exports = toTree;
}
