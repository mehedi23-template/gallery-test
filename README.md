### Package CDN link
```html
<script defer src="https://cdn.jsdelivr.net/gh/mehedi23-template/gallery-test@main/main.js" ></script>
```

### HTML installation
```html
    <div class="gallery">
        <div class="grid_img">
            <img src="img.jpg" alt="">
        </div>
        <div class="grid_img">
            <img src="img_2.jpg" alt="">
        </div>
    </div>
```

### Js installation
```js
new gallery(".gallery" , {
    gap : "10px", // gap between the boxes
    box : 5, // how many box you want
    boxHeight : "200px" // the boxes height
});
```

### Customize options

| Options       | Type          | Value                    |
| ------------- | ------------- | ------------------------ |
| gap           | String        | By default it is "10px"  |
| box           | Integer       | By default it is 4       |
| boxHeight     | String        | By default it is "180px" |

