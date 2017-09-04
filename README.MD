# imagesGrid

imagesGrid is a simple and lightweight jquery plugin to create responsive justified images grid.

[Demo](https://lynesth.github.io/imagesGrid/docs/)

Your HTML code should look like this:

```HTML
<div class="images-grid">
    <div class="image-wrapper" data-width="500" data-height="450">
        <img class="image-thumb" src="500x450.jpg" />
    </div>
    <div class="image-wrapper" data-width="300" data-height="600">
        <img class="image-thumb" src="300x600.jpg" />
    </div>
    <div class="image-wrapper" data-width="1024" data-height="768">
        <img class="image-thumb" src="1024x768.jpg" />
    </div>
    <div class="image-wrapper" data-width="400" data-height="400">
        <img class="image-thumb" src="400x400.jpg" />
    </div>
    <div class="image-wrapper" data-width="350" data-height="700">
        <img class="image-thumb" src="350x700.jpg" />
    </div>
</div>
```

And your CSS should look like this:

```CSS
.image-thumb {
	max-width: 100%;
}
```


Then you simply have to call the plugin:

```JS
$(".images-grid").imagesGrid();
```

Some options are available (with their default values):

```JS
$(".images-grid").imagesGrid({
	rowHeight: 150,				// The minimum height you want each row of the grid to be
	margin: 1,				// The amount of pixels between each images
	imageSelector: '.image-thumb',		// The class name of the images in your grid
	maxLines: false,			// The maximum number of lines to show (false means all lines should be visible)
	showLastLine: true,			// Should the last line be hidden
	alignLastLine: 'left',			// How should the last line be aligned (only if it is visible). Should be set to justify when using maxLines or if showLastLine is false
	responsive: true			// To disable the grid responsivness (default is true)
});
```

License MIT.
