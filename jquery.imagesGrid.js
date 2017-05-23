;(function($, window, document, undefined) {
    'use strict';

	function imagesGrid(element, options) {
		this.$el = $(element);
		this.options = $.extend({
			rowHeight: 150,
			margin: 1,
			imageSelector: '.image-thumb',
			responsive: true
		}, options);

		if (this.options.responsive) {
			var self = this;
			if (window.addEventListener) {
				  window.addEventListener('resize', function() { self.grid(); }, false);
			} else if (window.attachEvent) {
				  window.attachEvent('onresize', function() { self.grid(); });
			}
		}

		this.grid();
	}
	
	imagesGrid.prototype.grid = function() {
		var self = this,
			row= [],
			totalWidth = 0,
			containerWidth = this.$el.width(),
			rowHeight = parseInt(this.options.rowHeight, 10),
			border = parseInt(this.options.margin, 10);

		this.$el.children().each(function() {
			var $this = $(this),
			thisWidth = parseInt($this.data('width'), 10),
			thisHeight = parseInt($this.data('height'), 10);
			if (thisHeight !== rowHeight) {
				thisWidth = Math.floor(thisWidth * (rowHeight / thisHeight));
			}
			thisWidth += border;

			if (totalWidth + thisWidth > containerWidth) {
				totalWidth -= border;
				var ratio = containerWidth / totalWidth,
					newHeight = Math.floor(rowHeight * ratio) + 1,
					newTotalWidth = 0,
					len = row.length;
				if (len > 1) {
					while (newTotalWidth > containerWidth || newTotalWidth == 0) {
						newHeight--;
						newTotalWidth = 0;
						while (len--) {
							newTotalWidth += row[len].width * newHeight / row[len].height;
						}
						len = row.length;
					}
				}
				row.forEach(function(o) {
					o.el.css('marginRight', 0).children(self.options.imageSelector).css({height: newHeight, maxHeight: 'none'});
				});
				row = [];
				totalWidth = 0;
			}

			row.push({
				el: $this,
				width: thisWidth,
				height: thisHeight
			});
			totalWidth += thisWidth;
		});

		row.forEach(function(o) {
			o.el.css('marginRight', border).children(self.options.imageSelector).css({height: 'auto', maxHeight: rowHeight});
		});
	}

	$.fn.imagesGrid = function(options) {
		this.each(function() {
			new imagesGrid(this, options);
		});
		return this;
	}
	
})(jQuery, window, document);
