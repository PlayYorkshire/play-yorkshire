//////////////////////////////////////////////////////////////////////////
//                                                                      //  
//  Eksponent CropUp (www.eksponent.com)                                //
//  Copyright(c) @nielskuhnel (Niels Kühnel, Eksponent). License: MIT.  //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


// This code was ported from C#. Hence, there may be some weird constructs below.

var CropUp = (function () {
    var _referenceWidth = 620;
    var _referenceHeight = 480;

    var _defaultAnimate = { duration: 0 };

    function update() {
        $(".crop-up").each(function () {
            var currentSize = $(this).data("size");
            var size = [$(this).outerWidth(), $(this).outerHeight()];
            if (!currentSize || size[0] !== currentSize[0] || size[1] != currentSize[1]) {
                $(this).cropUp();
            }
        });
    }

    (function () {
        $(function () {
            update();

            var to;
            $(window).on("resize.cropup", function () {
                clearTimeout(to);
                to = setTimeout(function () {
                    update();
                }, 1);
            });
        });
    })(jQuery);

    jQuery.fn.cropUp = function (options, animateOptions) {
        $(this).each(function () {
            CropUp.update($(this), options, animateOptions);
        });
    };


    function expand(lbub, targetWidth, min, max, bias) {
        var width = lbub[1] - lbub[0];
        lbub[0] -= Math.floor((targetWidth - width) * bias);
        lbub[1] += Math.floor((targetWidth - width) * (1 - bias));

        if (lbub[1] - lbub[0] > width) --lbub[0];

        if (lbub[0] < min) {
            lbub[1] += min - lbub[0];
            lbub[0] += min - lbub[0];
            if (lbub[1] > max) {
                //Exceeds max
                return lbub[1] - max;
            }
        }
        if (lbub[1] > max) {
            lbub[0] -= lbub[1] - max;
            lbub[1] -= lbub[1] - max;
            if (lbub[0] < min) {
                //Exceeds min
                return min - lbub[0];
            }
        }

        return 0;
    }

    return {

        setReference: function (w, h) {
            _referenceWidth = w;
            _referenceHeight = h;
        },

        setAnimate: function (animate) {
            _defaultAnimate = animate;
        },

        measureImage: function (img, src, complete) {
            var background = false;
            var imageElement = img;
            if ($(img).attr("src")) {
                $(img).data("img-no-gc", img = new Image());
                background = true;
            } else {
                $(img).attr("src", src);
            }
            img.onload = function () {
                img.onload = null; complete(this.width, this.height); if (background) imageElement.src = src;
            };
            img.src = src;
        },

        defaultCropping: function (width, height) {
            return {
                topLeft: [0, 0],
                bottomRight: [width, height],

                calculated: true,

                bias: [width / 2, height / 2]
            };
        },

        suggest: function (originalWidth, originalHeight, cropWidth, cropHeight, basis) {
            var c = CropUp.getCropping(originalWidth, originalHeight, cropWidth, cropHeight, basis);

            return {
                calculated: true,
                topLeft: c.topLeft,
                bottomRight: c.bottomRight
            };
        },

        getCropping: function (originalWidth, originalHeight, targetWidth, targetHeight, info, resizeToCropping, zoom) {
            if (info === null) info = CropInfo.Default(originalWidth, originalHeight);

            var orgWidth = originalWidth, orgHeight = originalHeight;

            var orgAspect = orgWidth / orgHeight;

            var maxWidth = targetWidth === null ? -1 : Math.min(zoom ? targetWidth : originalWidth, targetWidth),
                    maxHeight = targetHeight === null ? -1 : Math.min(zoom ? targetHeight : originalHeight, targetHeight);

            var cropWidth = (info.bottomRight[0] - info.topLeft[0]);
            var cropHeight = (info.bottomRight[1] - info.topLeft[1]);
            var cropAspect = cropWidth / cropHeight;

            if (targetWidth === null && targetHeight === null) {
                maxWidth = resizeToCropping ? cropWidth : orgWidth;
                maxHeight = resizeToCropping ? cropHeight : orgHeight;
            }
            else if (targetWidth === null) {
                maxWidth = Math.floor(maxHeight * (resizeToCropping ? cropAspect : orgAspect));
            }
            else if (targetHeight === null) {
                maxHeight = Math.floor(maxWidth / (resizeToCropping ? cropAspect : orgAspect));
            }

            var targetAspect = maxWidth / maxHeight;

            var zoom;
            if (info.calculated) {
                //Calculate zoom reduction				
                var zoomedWidth = Math.max(maxWidth, _referenceWidth);
                var zoomedHeight = Math.max(maxHeight, _referenceHeight);

                zoom = Math.max(zoomedHeight / orgHeight, zoomedWidth / orgWidth);

                orgWidth *= zoom;
                orgHeight *= zoom;
                cropWidth *= zoom;
                cropHeight *= zoom;
            }
            else {
                zoom = 1;
            }

            var xs = [info.topLeft[0] * zoom, info.bottomRight[0] * zoom];
            var ys = [info.topLeft[1] * zoom, info.bottomRight[1] * zoom];


            var bias = info.bias !== null ?
        [info.bias[0] * zoom, info.bias[1] * zoom]
        : [xs[0] + ((xs[1] - xs[0]) / 2), ys[0] + ((ys[1] - ys[0]) / 2)];

            var xbias = info.bias !== null ? 1 - (xs[1] - bias[0]) / (xs[1] - xs[0]) : .5;
            var ybias = info.bias !== null ? 1 - (ys[1] - bias[1]) / (ys[1] - ys[0]) : .5;



            if (maxWidth > cropWidth && maxHeight > cropHeight) {
                //Simply expand around crop area
                if (expand(xs, maxWidth, 0, orgWidth, xbias) != 0) {
                    xs[0] = 0;
                    xs[1] = orgWidth;
                }
                if (expand(ys, maxHeight, 0, orgHeight, ybias) != 0) {
                    ys[0] = 0;
                    ys[1] = orgHeight;
                }
            }
            else if (Math.abs(targetAspect - cropAspect) > 0.001) {
                var biasedWidth = 0, biasedHeight = 0;
                if (cropAspect < targetAspect) //Grow width
                {
                    //Add image from outside the cropping box to fit target aspect ratio.
                    var newWidth = cropHeight * targetAspect;
                    var exceeded = expand(xs, newWidth, 0, orgWidth, xbias);

                    if (exceeded > 0) {
                        biasedWidth = orgWidth;
                        if (info.bias !== null) {
                            //Keep as much context as possible                            
                            biasedHeight = biasedWidth / targetAspect;
                        }
                        else {
                            //Pad rather than crop. Cropped area must be shown entirely                                                                    
                            biasedHeight = cropHeight;
                        }
                    }
                }
                else //Grow height
                {
                    //Add image from outside the cropping box to fit target aspect ratio.
                    var newHeight = cropWidth / targetAspect;
                    var exceeded = expand(ys, newHeight, 0, orgHeight, ybias);

                    if (exceeded > 0) //We need to crop the the image inside the cropping box
                    {
                        biasedHeight = orgHeight;
                        if (info.bias !== null) {
                            //Keep as much context as possible                            
                            biasedWidth = biasedHeight * targetAspect;
                        }
                        else {
                            //Pad rather than crop. Cropped area must be shown entirely                            
                            biasedWidth = cropWidth;
                        }

                    }
                }

                if (biasedHeight != 0 || biasedWidth != 0) {

                    //Center around bias point. If needed add less to lower side and more to higher. (1 - 0.5 = 1, 1 + 0.5 = 2)  

                    xs[0] = Math.max(0, Math.max(bias[0] - Math.floor(.5 * biasedWidth), info.topLeft[0] * zoom));
                    ys[0] = Math.max(0, Math.max(bias[1] - Math.floor(.5 * biasedHeight), info.topLeft[1] * zoom));

                    //Keep in box
                    if (xs[0] + biasedWidth > info.bottomRight[0] * zoom) xs[0] = Math.max(0, info.bottomRight[0] * zoom - biasedWidth);
                    if (ys[0] + biasedHeight > info.bottomRight[1] * zoom) ys[0] = Math.max(0, info.bottomRight[1] * zoom - biasedHeight);


                    //Keep in image
                    if (xs[0] + biasedWidth > orgWidth) xs[0] = Math.max(0, orgWidth - biasedWidth);
                    if (ys[0] + biasedHeight > orgHeight) ys[0] = Math.max(0, orgHeight - biasedHeight);

                    //Set end of span
                    xs[1] = xs[0] + biasedWidth;
                    ys[1] = ys[0] + biasedHeight;

                }
            }

            return {
                topLeft: [xs[0] / zoom, ys[0] / zoom],
                bottomRight: [xs[1] / zoom, ys[1] / zoom],
                xbias: xbias,
                ybias: ybias,
                targetWidth: Math.ceil(maxWidth),
                targetHeight: Math.ceil(maxHeight)
            };
        },

        update: function (container, options, animateOptions) {
            container = $(container);

            options = options || {};

            animateOptions = animateOptions || _defaultAnimate;

            if (container.is("img")) {
                img = container;
                container = img.parent();
                if (!container.is(".crop-up")) {
                    img.removeClass("crop-up").wrap("<div class='crop-up'></div>");
                    container = img.parent();
                    container.data(img.data()).attr("style", img.attr("style"));
                    img.attr("style", "");
                }
            }

            var img = $("img", container);
            if (!img.length) {
                container.append(img = $("<img />"));
            } else if (!container.data("image")) {
                var src = img.attr("src");
                if (src) container.data("image", src);
            }

            img.attr("alt", container.data("imgAlt"));
            img.css("position", "absolute");
            if (container.css("position") == "static") {
                container.css("position", "relative");
            }
            container.css("overflow", "hidden");
            for (var s in options) {
                var v = options[s];
                container.data(s, !v ? null : v.join ? v.join() : v);
            }

            var size = img.data("size");
            var targetSize = [1 * container.innerWidth(), 1 * container.innerHeight()];
            var cropBoxData = container.data("box");
            var gravityData = container.data("gravity");

            //Progressive loading
            if (container.data("upscale-url") && !img.data("maxed-out")) {
                var step = container.data("upscale-step") || 0;

                if (!container.data("loading")) {

                    var firstLoad = !size;

                    size = size || [0, 0];

                    var requiredSize = [targetSize[0], targetSize[1]];

                    var changed = false;
                    for (var i = 0; i <= 1; i++) {
                        if (step == 0) {
                            changed = changed || requiredSize[i] != size[i];
                        } else {
                            if (requiredSize[i] > size[i]) {
                                changed = true;
                            }
                            requiredSize[i] = (1 + Math.floor(requiredSize[i] / step)) * step;
                        }
                    }

                    if (changed || !size) {

                        if (firstLoad) {
                            requiredSize = [step, step];
                        }

                        container.data("loading", true);

                        var src = container.data("upscale-url");
                        if ((requiredSize[0] / size[0]) > requiredSize[1] / size[1]) {
                            src = src.replace("{d}", "width=" + requiredSize[0]);
                        } else {
                            src = src.replace("{d}", "height=" + requiredSize[1]);
                        }

                        CropUp.measureImage(img[0], src, function (w, h) {

                            //Dear reader. This code is not pretty. Skip this... :)
                            if (w < requiredSize[0] || h < requiredSize[1]) {
                                //The image returned from the server was smaller than the requested.
                                //Switch to client side scaling to avoid zooming on the server
                                img.css({ position: "absolute" });
                                src = container.data("upscale-url");
       
                                if ((10000 / size[0]) > 10000 / size[1]) {
                                    src = src.replace("{d}", "width=" + 10000);
                                } else {
                                    src = src.replace("{d}", "height=" + 10000);
                                }

                                CropUp.measureImage(img[0], src, function (ww, hh) {
                                    img.data("size", [ww, hh]);
                                    img.data("maxed-out", true);
                                    container.data("loading", false);
                                    CropUp.update(container);
                                });
                                return;
                            }

                            img.data("size", [w, h]);
                            if (step == 0) {
                                img.css({ position: "static", width: w + "px", height: h + "px" });
                            }
                            container.data("loading", false);
                            CropUp.update(container);
                        });
                    }
                }

                //console.log(!size || size[0] == 0 || size[1] == 0);
                //No image is loaded wait for it
                if (!size || size[0] == 0 || size[1] == 0) return;
                //Static images from the server are used. Stop processing.
                if (step == 0) return;
            } else if (!size) {
                //Static image                
                var src = container.data("image");
                CropUp.measureImage(img, src, function (w, h) {
                    img.data("size", [w, h]);
                    CropUp.update(container);
                });
                return;
            }

            container.addClass("loaded");

            var cropBox = [0, 0, size[0], size[1]];
            if (cropBoxData) {
                cropBox = typeof cropBoxData == "string" ? cropBoxData.split(",") : cropBoxData;
                cropBox = [Math.round(size[0] * 1 * cropBox[0]),
                    Math.round(size[1] * 1 * cropBox[1]),
                    Math.round(size[0] * 1 * cropBox[2]),
                    Math.round(size[1] * 1 * cropBox[3])];
            }

            var gravity = [Math.round(1 * cropBox[0] + (1 * cropBox[2] - 1 * cropBox[0]) / 2),
                    Math.round(1 * cropBox[1] + (1 * cropBox[3] - 1 * cropBox[1]) / 2)];

            if (gravityData) {
                gravity = typeof gravityData == "string" ? gravityData.split(",") : gravityData;
                gravity = [Math.round(1 * gravity[0] * size[0]), Math.round(1 * gravity[1] * size[1])];

            }

            var info = {
                topLeft: [1 * cropBox[0], 1 * cropBox[1]],
                bottomRight: [1 * cropBox[2], 1 * cropBox[3]],
                bias: [1 * gravity[0], 1 * gravity[1]],
                calculated: true
            };

            var zoom = container.data("zoom");
            var fixed = container.data("fixed");

            var c = CropUp.getCropping(size[0], size[1],
                    targetSize[0],
                    targetSize[1], info, fixed, zoom);

            //Adjust image size    
            var xZoom = Math.min(zoom ? c.targetHeight : size[1], c.targetHeight) / (c.bottomRight[1] - c.topLeft[1]);
            var yZoom = Math.min(zoom ? c.targetWidth : size[0], c.targetWidth) / (c.bottomRight[0] - c.topLeft[0]);
            c.zoom = Math.min(xZoom, yZoom);

            var opts = {
                width: Math.round(size[0] * c.zoom),
                height: Math.round(size[1] * c.zoom),
                left: Math.round(-c.topLeft[0] * c.zoom),
                top: Math.round(-c.topLeft[1] * c.zoom)
            };

            //console.log(opts.width + ", " + opts.height);

            //Pad if not upscaling
            if (opts.width < targetSize[0]) opts.left += (targetSize[0] - opts.width) / 2;
            if (opts.height < targetSize[1]) opts.top += (targetSize[1] - opts.height) / 2;

            // Dirty trick to emsure we don't get the occasional white gap
            if(opts.left > 0) opts.left = 0;
            if(opts.top > 0) opts.top = 0;
            opts.width += 2;
            opts.height += 2;

            //console.log($(img).attr("src"));
            //console.log(opts.width + ", " + opts.height);

            img.css("width", opts.width + "px");
            img.css("height", opts.height + "px");
            img.css("left", opts.left + "px");
            img.css("top", opts.top + "px");

            //img.stop().animate(opts, animateOptions);
        }
    };
})();