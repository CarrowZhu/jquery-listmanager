# jquery-listmanager<br>
a jquery plugin to provide add,delete,up functions on a list<br>
<br>
# Requirement<br>
jquery 1.3.2 +<br>
<br>
# Constructor<br>
$.listManager(options)<br>
@return listManager<br>
@param options: JSON object<br>
--list<br>
@Required<br>
jQuery selector used to get the list object<br>
<br>
--element<br>
@Required<br>
jQuery selector used to get the element template<br>
<br>
--elementInList<br>
@Required<br>
jQuery selector used by the links to get the current element<br>
<br>
--add<br>
@optional<br>
jQuery selector used to get the add link in the element, DEFAULT is "a[name='add']"<br>
<br>
--delete<br>
@optional<br>
jQuery selector used to get the delete link in the element, DEFAULT is "a[name='delete']"<br>
<br>
--up<br>
@optional<br>
jQuery selector used to get the up link in the element, DEFAULT is "a[name='up']"<br>
<br>
--setValue: function(element, value)<br>
@Param element: the new element append to list<br>
@Param value: used to set the value of the components in the element<br>
@optional<br>
used to set the value of the components in the element after adding<br>
<br>
--preAdd: function(element)<br>
--postAdd: function(element)<br>
--preDelete: function(element)<br>
--postDelete: function(element)<br>
@Param element: the element be added/deleted<br>
@optional<br>
4 hook functions, will be invoked before/after adding/deleting<br>
<br>
--show: function(list, add, del, up)<br>
@Param list: a jQuery object which is the list<br>
@Param add: equals to the options.add<br>
@Param del: equals to the options.delete<br>
@Param up: equals to the options.up<br>
@optional<br>
define the visible of the links<br>
DEFAULT:in the 1st line, only the add link can be viewed, otherwise, only the add link is hiden<br>
<br>
# Method<br>
--init(values)<br>
@Param values<br>
--undefined: will add an original element to the list<br>
--Object: will add an element to the list the components of which are set by the setValue with the Object<br>
--Array: will add N (size of the Array) elements to the list, the components of each are set by the setValue with the corresponding element of Array.<br>
<br>
--clear()<br>
remove all the elements of the list.<br>
<br>
--setReadOnly(isReadOnly)<br>
@Param isReadOnly: is the list read only<br>
if true, the buttons will be hiden and the component (:input, select) can not be edited.<br>
<br>
# examples<br>
to use the plugin is really simple, please download the demo.html for details.

![image](https://github.com/CarrowZhu/jquery-listmanager/blob/master/demo.png)
