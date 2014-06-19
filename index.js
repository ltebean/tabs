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
		each(elements, function(i, el) {
			tabs(el);
		});
	}

	function each(elements, fn) {
		for (var i = elements.length - 1; i >= 0; i--) {
			fn(i, elements[i]);
		}
	}

	function hasClass(el, cls) {
		return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}

	function addClass(el, cls) {
		if (!hasClass(el, cls)) {
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

		each(tabs, function(i, tab) {
			tab.setAttribute('data-tab-index', i);
			tab.addEventListener('click', function(e) {
				var index = e.target.getAttribute('data-tab-index');
				activate(tabs, index);
				activate(panes, index);
			});
		})

		function activate(tabs, index) {
			each(tabs, function(i, tab) {
				if (i != index) {
					removeClass(tab, 'active')
				} else {
					addClass(tab, 'active')
				}
			});
		}
	}
});