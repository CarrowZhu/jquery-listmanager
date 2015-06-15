# jquery-listmanager
a jquery plugin to provide add,delete,up functions on a list

# Requirement
jquery 1.3.2 +

# Constructor
$.listManager(options)
@return listManager
@param options: JSON object
--list
@Required
jQuery selector used to get the list object

--element
@Required
jQuery selector used to get the element template

--elementInList
@Required
jQuery selector used by the links to get the current element

--add
@optional
jQuery selector used to get the add link in the element, DEFAULT is "a[name='add']"

--delete
@optional
jQuery selector used to get the delete link in the element, DEFAULT is "a[name='delete']"

--up
@optional
jQuery selector used to get the up link in the element, DEFAULT is "a[name='up']"

--setValue: function(element, value)
@Param element: the new element append to list
@Param value: used to set the value of the components in the element
@optional
used to set the value of the components in the element after adding

--preAdd: function(element)
--postAdd: function(element)
--preDelete: function(element)
--postDelete: function(element)
@Param element: the element be added/deleted
@optional
4 hook functions, will be invoked before/after adding/deleting

--show: function(list, add, del, up)
@Param list: a jQuery object which is the list
@Param add: equals to the options.add
@Param del: equals to the options.delete
@Param up: equals to the options.up
@optional
define the visible of the links
DEFAULT:in the 1st line, only the add link can be viewed, otherwise, only the add link is hiden

# Method
--init(values)
@Param values
--undefined: will add an original element to the list
--Object: will add an element to the list the components of which are set by the setValue with the Object
--Array: will add N (size of the Array) elements to the list, the components of each are set by the setValue with the corresponding element of Array.

--clear()
remove all the elements of the list.

--setReadOnly(isReadOnly)
@Param isReadOnly: is the list read only
if true, the buttons will be hiden and the component (:input, select) can not be edited.

# examples
to use the plugin is really simple, please download the demo.html for details.
