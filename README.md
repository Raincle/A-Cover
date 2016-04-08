# A-Cover
A-Cover is a jQuery plugin that help you layout an `<img>` at the center of a `<div>`, and fill it out.  
A-Cover 是一个帮你把`<img>`置入`<div>`中心，并充满它的 jQuery 插件。  

Only 2KB! ! !  
只有2KB大小！

# Why?
When I was wrapping an `<img>` into a `<div>`,  
I found it's tedious to set the `<img>`'s width, height...  
And, it's a waste of time to adjust the `<img>` to fill out the `<div>`.  
So, A-Cover comes here to help us.  

当我想要把一个`<img>`元素放到一个`<div>`中时，  
我发现设置这个`<img>`的宽、高...是非常繁琐的。  
并且，把这个`<img>`的大小调整到充满这个`<div>`也很费时间，  
所以我写了 A-Cover，来解决这个问题。  

After using A-Cover,  
the `<img>` can be posited at the center of the `<div>` and fill it out,  
the `<img>` will be scaled with origin ratio, and cut.  
Finally, you can also use options to adjust position of the `<img>`.  

当我们使用了 A-Cover 之后，  
`<img>`会按比例自动充满`<div>`并位于中心位置，  
完全没有压扁或拉伸`<img>`，多余的部分会适当裁剪。  
最后，你也可以通过设置，来调整`<img>`的位置。  

# Usage
    $('demo-img').isacover()
Well Done! We just write XXX is a cover!  
But we should link the jQuery and A-Cover files before using this magic.  

一行代码就够了，但是在这之前，  
还需要引入 jQuery 和 A-Cover 文件。

    <head>
      ...
      <script src="yourPath/jquery-x.x.x.min.js"></script>
      <script src="yourPath/jquery.acover-1.0.0.min.js"></script>
      ...
    </head>

In your `<body>`, use `<div>` to wrap the `<img>` like this:  
并且在需要的地方用`<div>`包裹住`<img>`，像这样：  

    <div>
      <img class="demo-img" src="yourImg.png" />
    </div>
# Options
If you want do more:  
如果你有更多需求，也可以自定义设置：

1、adjust `<div>`:  
1、调整`<div>`大小：  

    $('.demo-img').isacover({
      frameWidth:160,
      frameHeight:320
    })

`<div>`'s width and height will be 100×100 if you didn't set before,  
You also can use CSS to set width and height of the `<div>`.  
如果你没有设置过`<div>`的高宽，那么高宽默认会是100×100，  
你当然也可以用CSS来设置这个`<div>`的高宽。

2、adjust `<img>`'s position:  
2、调整`<img>`位置：  

    $('demo-img').isacover({
      bottom:0
    })

Avoiding `<img>` to be cut at the bottom,  
you can write like above.  
如果你希望`<img>`依然居中，但是不要裁剪掉最下面的部分，  
就可以像上面这样设置。
