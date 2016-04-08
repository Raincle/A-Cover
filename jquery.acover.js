(function ($) {
  $.fn.isacover = function(params) {

    var defaults = {
      frameWidth:'default',
      frameHeight:'default',
      top:'default',
      bottom:'default',
      left:'default',
      right:'default',
    }

    params = params || {};
    var originalParams = {};
    for (var param in params) {
        if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
            originalParams[param] = {};
            for (var deepParam in params[param]) {
                originalParams[param][deepParam] = params[param][deepParam];
            }
        }
        else {
            originalParams[param] = params[param];
        }
    }
    for (var def in defaults) {
        if (typeof params[def] === 'undefined') {
            params[def] = defaults[def];
        }
        else if (typeof params[def] === 'object') {
            for (var deepDef in defaults[def]) {
                if (typeof params[def][deepDef] === 'undefined') {
                    params[def][deepDef] = defaults[def][deepDef];
                }
            }
        }
    }

    $(this).css({position:'absolute'})
    var frameDiv = $(this).parent()
    frameDiv.css({position:'relative',overflow:'hidden'})

    var frameWidth,frameHeight

    if (params.frameWidth === 'default') {
      if (frameDiv[0].style.width === '') {
        frameWidth = 100
        frameDiv.width(frameWidth)
      } else {
        frameWidth = frameDiv.width()
      }
    } else {
      frameWidth = params.frameWidth
      frameDiv.width(frameWidth)
    }

    if (params.frameHeight === 'default') {
      if (frameDiv[0].style.height === '') {
        frameHeight = 100
        frameDiv.height(frameHeight)
      } else {
        frameHeight = frameDiv.height()
      }
    } else {
      frameHeight = params.frameHeight
      frameDiv.height(frameHeight)
    }
    var frameRatio = frameWidth / frameHeight



    $(this).load(function() {
        var imgRatio = $(this).width()/$(this).height()

        var centerLeft = (frameDiv.width() - frameDiv.height() * imgRatio) / 2
        var centerBottom = (frameDiv.height() - frameDiv.width() / imgRatio) / 2

        if (imgRatio <= frameRatio) {
            $(this).css({
                width:'100%',
                height:'auto',
                left:0,
                bottom:centerBottom
            });
        } else {
            $(this).css({
                width:'auto',
                height:'100%',
                left:centerLeft,
                bottom:0
            });
        };
    });

  }
})(jQuery);
