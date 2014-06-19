! function(name, definition) {
	if (typeof module != 'undefined' && module.exports) module.exports = definition();
	else if (typeof define == 'function') define(definition);
	else this[name] = definition();
}('tabs', function() {

	return function(selector) {
		var elements = document.querySelectorAll(selector);
		if (!elements || elements.length == 0) {
			return;
		}
		each(elements, function(el) {
			tabs(el);
		});
	}

	function each(elements, fn) {
		Array.prototype.forEach.call(elements, function(el) {
			fn(el);
		});
	}

	function hasClass(el, cls) {
		return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}

	function addClass(el, cls) {
		if (!hasClass(el, cls)){
			el.className += " " + cls;
		}
	}

	function removeClass(el, cls) {
		if (hasClass(el, cls)) {
			var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			el.className = el.className.replace(reg, '');
		}
	}


	function tabs(container) {
		var tabs = container.querySelectorAll('.tab');
		var panes = container.querySelectorAll('.tab-pane');

		each(tabs, function(tab) {
			tab.addEventListener('click', function(e) {
				var target = e.target.getAttribute('data-target');
				activate(target);
			});
		})

		function activate(target) {
			each(tabs, function(tab) {
				if (tab.getAttribute('data-target') != target) {
					removeClass(tab,'active')
				} else {
					addClass(tab,'active')
				}
			});
			each(panes, function(pane) {
				if (pane.getAttribute('data-content') != target) {
					removeClass(pane,'active')
				} else {
					addClass(pane,'active')
				}
			});
		}
	}
});