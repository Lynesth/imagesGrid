# imagesGrid

imagesGrid is a simple and lightweight jquery plugin to create responsive justified images grid.

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
.images-grid {
	text-align: justify;
}
.image-wrapper {
	display: inline-block;
	font-size: 0;
	line-height: 0;
}
```


Then you simply have to call the plugin:

```JS
$(".images-grid").imagesGrid();
```

Some options are available:

```JS
$(".images-grid").imagesGrid({
	rowHeight: 250,				// The minimum height you want each row of the grid to be
	margin: 15,				// The amount of pixels between each images
	imageSelector: '.image-thumb',		// The class name of the images in your grid
	responsive: false			// To disable the grid responsivness (default is true)
});
```

License MIT.
