(function($){
	$.extend({
		listManager: function(options){
		  var _opts = $.extend({
		  		add: "a[name='add']",
		  		delete: "a[name='delete']",
		  		up: "a[name='up']",
		  		show: function(list, add, del, up) {
						$(add + ":eq(0)", list).show();
						$(del + ":eq(0)", list).hide();
						$(up + ":eq(0)", list).hide();
						$(add + ":gt(0)", list).hide();
						$(del + ":gt(0)", list).show();
						$(up + ":gt(0)", list).show();
					}
		  	}, options);
			var _list = $(_opts.list);
			var _element = $(_opts.element);
			
			var _add = function(value) {
				var element = _element.clone(true);
				if (_opts.preAdd && $.isFunction(_opts.preAdd)) {
					_opts.preAdd(element);
				}
				_list.append(element);
				if (value && _opts.setValue && $.isFunction(_opts.setValue)) {
					_opts.setValue(element, value);
				}
				if (_opts.postAdd && $.isFunction(_opts.postAdd)) {
					_opts.postAdd(element);
				}
				_opts.show(_list, _opts.add, _opts.delete, _opts.up);
			}
			
			var _delete = function(element) {
				var element = $(element);
				if (_opts.preDelete && $.isFunction(_opts.preDelete)) {
					_opts.preDelete(element);
				}
				element.remove();
				if (_opts.postDelete && $.isFunction(_opts.postDelete)) {
					_opts.postDelete(element);
				}
				_opts.show(_list, _opts.add, _opts.delete, _opts.up);
			} 
			
			if (_opts.add) {
				$(_opts.add, _element).click(function(){
					_add();
				});
			}
			
			if (_opts.delete) {
				$(_opts.delete, _element).click(function(){
					_delete($(this).parents(_opts.elementInList + ":first"));
				});
			}
			
			if (_opts.up) {
				$(_opts.up, _element).click(function(){
					var down = $(this).parents(_opts.elementInList + ":first");
					var up = down.prev();
					up.before(down);
					_opts.show(_list, _opts.add, _opts.delete, _opts.up);
				});
			}
			
			var _init = function(values) {
				_clear();
				if (!values) {
					_add();
					return;
				}
				if (values instanceof Array) {
					for (var i in values) {
						_add(values[i])
					}
				} else {
					_add(values);
				}
			}
			
			var _clear = function() {
				_list.children().remove();
			}
			
			var _setReadOnly = function(readOnly) {
				if (readOnly) {
					$(":input", _list).attr("readOnly", true);
					$(":input[type='button']", _list).attr("disabled", true);
					$(":input[type='checkbox']", _list).attr("disabled", true);
					$(":input[type='file']", _list).attr("disabled", true);
					$(":input[type='image']", _list).attr("disabled", true);
					$(":input[type='radio']", _list).attr("disabled", true);
					$(":input[type='reset']", _list).attr("disabled", true);
					$(":input[type='submit']", _list).attr("disabled", true);
					$("select", _list).attr("disabled", true);
					$(_opts.add, _list).hide();
					$(_opts.delete, _list).hide();
					$(_opts.up, _list).hide();
				} else {
					$(":input", _list).attr("readOnly", false);
					$(":input[type='button']", _list).attr("disabled", false);
					$(":input[type='checkbox']", _list).attr("disabled", false);
					$(":input[type='file']", _list).attr("disabled", false);
					$(":input[type='image']", _list).attr("disabled", false);
					$(":input[type='radio']", _list).attr("disabled", false);
					$(":input[type='reset']", _list).attr("disabled", false);
					$(":input[type='submit']", _list).attr("disabled", false);
					$("select", _list).attr("disabled", false);
					$(_opts.add, _list).show();
					$(_opts.delete, _list).show();
					$(_opts.up, _list).show();
					_opts.show(_list, _opts.add, _opts.delete, _opts.up);
				}
			}
			
			return {
				init: _init,
				clear: _clear,
				setReadOnly: _setReadOnly
			};
		}
	});
})(jQuery);
