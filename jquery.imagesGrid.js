;(function($, window, document, undefined) {
    'use strict';

	function imagesGrid(element, options) {
		this.$el = $(element);
		this.options = $.extend({
			rowHeight: 150,
			margin: 1,
			imageSelector: '.image-thumb',
			maxLines: false,
			showLastLine: true,
			alignLastLine: 'left',
			responsive: true
		}, options);

		this.$el.css({paddingBottom: this.options.margin, textAlign: 'justify', fontSize: 0, lineHeight: 0, textAlignLast: this.options.alignLastLine});

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
			margin = parseInt(this.options.margin, 10),
			lines = 0;

		this.$el.children().each(function() {
			var $this = $(this),
			thisWidth = parseInt($this.data('width'), 10),
			thisHeight = parseInt($this.data('height'), 10);
			if (thisHeight !== rowHeight) {
				thisWidth = Math.floor(thisWidth * (rowHeight / thisHeight));
			}
			thisWidth += margin;
			if (self.options.maxLines === false || lines < self.options.maxLines) {
				if (totalWidth + thisWidth > containerWidth) {
					lines++;
					totalWidth -= margin;
					var ratio = containerWidth / totalWidth,
						newHeight = Math.floor(rowHeight * ratio) + 1,
						newTotalWidth = 0,
						len = row.length;
					if (len > 1) {
						while (newTotalWidth > containerWidth || newTotalWidth == 0) {
							newHeight--;
							newTotalWidth = 0;
							while (len--) {
								newTotalWidth += Math.ceil(row[len].width * newHeight / row[len].height);
							}
							len = row.length;
						}
					}
					row.forEach(function(o) {
						o.el.css({marginTop: margin, marginRight: 0, display: "inline-block"}).children(self.options.imageSelector).css({height: newHeight, maxHeight: 'none'});
					});
					row = [];
					totalWidth = 0;
				}
			}

			row.push({
				el: $this,
				width: thisWidth,
				height: thisHeight
			});
			totalWidth += thisWidth;
		});

		row.forEach(function(o) {
			o.el.css({marginTop: margin, marginRight: margin, display: (self.options.showLastLine && self.options.maxLines === false) ? "inline-block" : "none"}).children(self.options.imageSelector).css({height: 'auto', maxHeight: rowHeight});
		});
	}

	$.fn.imagesGrid = function(options) {
		this.each(function() {
			new imagesGrid(this, options);
		});
		return this;
	}
	
})(jQuery, window, document);
