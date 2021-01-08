

// Define Base64 helpers
var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } };

Base64.encodeUrlToken = function (input) {
    var ret = Base64.encode(input).replace(/\+/g, "-").replace(/\//g, "_");
    if (ret.length == 0)
        return "";
    var noPadding = ret.replace(/=+$/, ""); 
    return noPadding + (ret.length - noPadding.length).toString();
};

Base64.decodeUrlToken = function (input) {
    var ec = parseInt(input.substring(input.length - 1));
    var temp = input.replace(/\-/g, "+").replace(/\_/g, "/");
    temp = temp.substring(0, temp.length - 1); 
    return Base64.decode(temp + "===".substring(0, ec));
};

$.fn.getComments = function () {
    return this.contents().map(function () {
        if (this.nodeType === 8) return this.nodeValue;
    }).get();
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function step(formField, direction) {

    function stepFallback(formField, direction) {
        var directionModifier = direction === 'down' ? -1 : 1,
            step = Number(formField.getAttribute('step')),
            min = Number(formField.getAttribute('min'));
        formField.value = Math.max(min, Number(formField.value) + (step * directionModifier));
    }

    if (typeof formField.stepUp === 'function' && typeof formField.stepDown === 'function')
    {
        // We have stepUp/stepDown support
        try {
            // But need a try/catch as support is buggy or partial in e.g. Safari
            if (direction === 'down') {
                formField.stepDown();
            } else {
                formField.stepUp();
            }
        } catch (ex) {
            stepFallback(formField, direction);
        }
    } else {
        // No stepUp/stepDown support: use fallback
        stepFallback(formField, direction);
    }
}

; (function () {

    // Add credits to images
    $("article img[data-id]")
        .filter(function () {
            return $(this).parent().prop("tagName") !== "FIGURE";
        }).each(function () {
            var img = $(this);
            var imgId = img.data("id");
            $.get("/umbraco/wty/wtyapi/getimagecredit", { id: imgId }, function(data) {
                if(data && data.length === 1) {
                    img.wrap("<figure />").after("<figcaption><span class='camera'>" + data[0] + "</span></figcaption>");
                }
            });
        });

    
    // Favourites
    var upadateFavIcons = function() {
        
        var favs = $.jStorage.get("wtyFavs", []);

        $(".favourite").each(function(idx, itm) {
            var favId = $(itm).data("favId");
            if ($.inArray(favId, favs) > -1) {
                $(itm).addClass("favourite--selected");
            } else {
                $(itm).removeClass("favourite--selected");
            }
        });


        $(".favourites a").attr("href", $(".favourites a").attr("href").split('?')[0] + "?t=" + Base64.encodeUrlToken(favs.join()));
    }

    if (typeof $.jStorage != "undefined" &&  $.jStorage.storageAvailable())
    {
        // Local storage available so show fav icons
        $(".favourite,.favourites").show();

        // Hookup fav icons
        $("body").on("click", ".favourite", function (e) {
            e.preventDefault();

            // Get fav id
            var favId = $(this).data("favId");

            // Add or remove from favs list
            var favs = $.jStorage.get("wtyFavs", []);
            var idx = $.inArray(favId, favs);
            if (idx > -1) { 
                favs.splice(idx, 1); // Remove
            } else { 
                favs.push(favId); // Add
            }

            // Resave favs
            $.jStorage.set("wtyFavs", favs);

            // Update UI
            upadateFavIcons();
        });

        // Update UI on load
        upadateFavIcons();
    }

    $(".map_overlay #byName").on("keyup change", function () {
        $("input[type=hidden][name=location]").val($(this).val());
    });

    // Back to top
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300;
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    var offset_opacity = 1200;
    //duration of the top scrolling animation (in ms)
    var scroll_top_duration = 700;
    //grab the "back to top" link
    var $back_to_top = $('.back-to-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fadeOut');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fadeOut');
        }
    });

    //smooth scroll to top
    $("body").on('click', '.back-to-top, .back-to-top2', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
        );
    });

    // Carousel
    var createYouTubeVideo = function (uid, videoId, callback) {

        window.players = window.players || {};
        window.players[uid] = player = new window.YT.Player(uid, {
            videoId: videoId,
            width: '100%',
            height: '100%',
            playerVars: {
                playsinline: 1,
                autoplay: 0,
                controls: 0,
                showinfo: 0,
                mute: 1,
                rel: 0
            }

        });

        player.addEventListener('onStateChange', function (e) {
            if (e.data === YT.PlayerState.ENDED || e.data === YT.PlayerState.UNSTARTED) {
                e.target.seekTo(0);
                e.target.playVideo();
            }
            if (e.data === YT.PlayerState.PLAYING) {
                $('#' + uid).closest(".yt-video").addClass("yt-video--playing");
            } else {
                $('#' + uid).closest(".yt-video").removeClass("yt-video--playing");
            }
        }).addEventListener('onReady', function (e) {
            callback(e.target);
        });

    };

    var installOrCreateYouTubeVideo = function (uid, videoId, callback) {
        var youtubeScriptId = 'youtube-api';
        var youtubeScript = document.getElementById(youtubeScriptId);

        if (youtubeScript === null) {
            var tag = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];

            tag.src = 'https://www.youtube.com/iframe_api';
            tag.id = youtubeScriptId;
            firstScript.parentNode.insertBefore(tag, firstScript);

            window.onYouTubeIframeAPIReady = function () {
                createYouTubeVideo(uid, videoId, callback);
            };
        }
        else
        {
            createYouTubeVideo(uid, videoId, callback);
        }
    };

    var getOrCreateYouTubeVideo = function (uid, videoId, callback) {
        if (window.players && window.players.hasOwnProperty(uid)) {
            callback(window.players[uid]);
        } else {
            installOrCreateYouTubeVideo(uid, videoId, callback);
        }
    };

    var playVideo = function (el) {
        var uid = el.data("uid");
        var videoId = el.data("videoId");
        getOrCreateYouTubeVideo(uid, videoId, function (player) {
            player.playVideo();
        });
    };

    var pauseVideo = function (el) {
        var uid = el.data("uid");
        var videoId = el.data("videoId");
        getOrCreateYouTubeVideo(uid, videoId, function (player) {
            player.pauseVideo();
        });
    };

    function checkVideoTime() {
        setTimeout(function () {
            var cycleOpts = $('.home-video-carousel .carousel').data("cycle.opts");
            var currentSlideEl = $(cycleOpts.slides[cycleOpts.currSlide]);
            var uid = currentSlideEl.data("uid");

            var timestampLinks = $(".home-video-carousel__timestamp-links a");
            timestampLinks.each(function (idx, itm) {

                var lnkUid = $(itm).data("uid");
                var startTime = parseInt($(itm).data("startTime"));
                var endTime = parseInt($(itm).data("endTime"));

                var isActive = false;
                if (lnkUid === uid) {
                    if (window.players && window.players.hasOwnProperty(uid)) {
                        var player = window.players[uid];
                        if (player.getPlayerState && player.getPlayerState() === YT.PlayerState.PLAYING && player.getCurrentTime) {
                            var currentTime = player.getCurrentTime();
                            if (currentTime >= startTime && currentTime <= endTime) {
                                isActive = true;
                            }
                        }
                    }
                }

                $(itm).toggleClass("active", isActive);

            });
            checkVideoTime();
        }, 1000);
    }

    var homeVideoCarouselCount = $('.home-video-carousel .carousel').length;
    if (homeVideoCarouselCount > 0) {

        $('.home-video-carousel .carousel').on('cycle-initialized', function (event, opts) {
            var currentSlideEl = $(opts.slides[opts.currSlide]);
            playVideo(currentSlideEl);
        }).on('cycle-after', function (event, opts) {
            var currentSlideEl = $(opts.slides[opts.currSlide]);
            pauseVideo(currentSlideEl);
            var nextSlideEl = $(opts.slides[opts.nextSlide]);
            playVideo(nextSlideEl);
        }).cycle({
            speed: 600,
            timeout: 0,
            fx: 'scrollHorz',
            slides: '> .carousel__item',
            next: '> .carousel-nav__btn--forward',
            prev: '> .carousel-nav__btn--backward',
            swipe: true
        });

        // Don't show prev/next if only 1 carousel item
        if ($('.home-video-carousel .carousel > .carousel__item').length <= 1) {
            $('.home-video-carousel .carousel > .carousel-nav__btn--forward').hide();
            $('.home-video-carousel .carousel > .carousel-nav__btn--backward').hide();
        }

        checkVideoTime();
    }

    // Listings carousel
    var listingsCarouselCount = $(".listings-carousel .slick").length;
    if (listingsCarouselCount > 0) 
    {
        $(".listings-carousel .slick").slick({

            nextArrow: ".listings-carousel .carousel-nav__btn--forward",
            prevArrow: ".listings-carousel .carousel-nav__btn--backward",
            autoplay: true,
            autoplaySpeed: 6000,
            mobileFirst: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ]
        });
    }

    // Memership plans
    var membershipBlockCount = $(".membership-block .slick").length;
    if (membershipBlockCount > 0) {
        
        $("body").on("click", ".plan-summaries__prev", function (e) {
            e.preventDefault();

            var planCount = $(".plan-summary").length;
            var activeIdx = $(".plan-summary.active").data("planIndex");

            var nextIdx = activeIdx - 1;
            if (nextIdx < 0) nextIdx = planCount - 1;

            $("[data-plan-index=" + activeIdx + "]").removeClass("active");
            $("[data-plan-index=" + nextIdx + "]").addClass("active");

        });

        $("body").on("click", ".plan-summaries__next", function (e) {
            e.preventDefault();

            var planCount = $(".plan-summary").length;
            var activeIdx = $(".plan-summary.active").data("planIndex");

            var nextIdx = activeIdx + 1;
            if (nextIdx >= planCount) nextIdx = 0;

            $("[data-plan-index=" + activeIdx + "]").removeClass("active");
            $("[data-plan-index=" + nextIdx + "]").addClass("active");
        });

        $("body").on("click", ".membership-plan__link", function () {
            var activeIdx = $(".plan-summary.active").data("planIndex");
            var nextIdx = $(this).data("planIndex");
            $("[data-plan-index=" + activeIdx + "]").removeClass("active");
            $("[data-plan-index=" + nextIdx + "]").addClass("active");
        });

        $("body").on("click", ".membership-block--collapsible .membership-plan__link", function () {
            $(".membership-block__details").slideDown("fast").addClass("open");
        });

        $("body").on("click", ".membership-block__hide", function (e) {
            e.preventDefault();
            $(".membership-block__details").removeClass("open").slideUp("fast");
        });

    }
    
    // Homepage Perma Nav
    if($(".wtyhomepage").length > 0) {

        var nav = $("<nav class='perma-nav' />");
        var navUl = $("<ul />");
        var homeItm = $("<li><a href='#' class='hover-pink'>Home</a></li>");
        navUl.append(homeItm);

        $(".band:has(> .tab)").each(function (idx, itm) {
            var $band = $(itm);
            var $tab = $band.find("> .tab");
            var color = $tab.data('color');
            var bandItm = $("<li><a href='#" + $band.attr("id") + "' class='hover-" + color + "'>" + $tab.text() + "</a></li>");
            navUl.append(bandItm);
        });

        nav.append(navUl);

        $(".everything").append(nav);

        $(".perma-nav a").on("click", function (e) {
            e.preventDefault();

            var headerHeight = $(".header").height();
            var href = $(this).attr("href");
            var targetX = href == "#" ? 0 : $(href).offset().top - headerHeight;

            $('body,html').animate({
                scrollTop: targetX,
            }, 500);
        });

        $(window).scroll(function () {
            var nav = $(".perma-nav");
            var nextEl = $(".header + * + *"); // Showing after second block as blocks 1 and 2 can have carousel buttons
            var offset = ((nextEl.height() / 2) + nextEl.offset().top);
            ($(this).scrollTop() > offset) ? nav.addClass('is-visible') : nav.removeClass('is-visible');
        });
    }

    // Init upload button labels
    $("body").on("change", ".button--upload input[type=file]", function () {
        $(this).closest(".button--upload").next(".button--upload__value").text($(this).val().split('\\').pop());
    });

    // Occupancy range
    if (typeof noUiSlider != "undefined") {
        var occupancyRangeEl = $("#occupancyRange")[0];
        if (occupancyRangeEl) {
            noUiSlider.create(occupancyRangeEl, {
                start: [parseInt("0" + $("input[name=occupancyMin]").val()), parseInt("0" + $("input[name=occupancyMax]").val())], // Handle start position
                step: 1, // Slider moves in increments of '10'
                connect: true, // Display a colored bar between the handles
                orientation: 'horizontal', // Orient the slider vertically
                behaviour: 'tap-drag', // Move handle on tap, bar is draggable
                range: {
                    // Slider can select '0' to '100'
                    'min': 0,
                    'max': 20
                },
                pips: {
                    // Show a scale with the slider
                    mode: 'steps',
                    density: 5
                }
            });
            occupancyRangeEl.noUiSlider.on('update', function(values, handle) {
                if (handle) {
                    $("input[name=occupancyMax]").val(parseInt(values[handle]));
                } else {
                    $("input[name=occupancyMin]").val(parseInt(values[handle]));
                }
            });
        }

        // Occupancy range
        var ratingRangeEl = $("#ratingRange")[0];
        if (ratingRangeEl) {
            noUiSlider.create(ratingRangeEl, {
                start: [parseInt("0" + $("input[name=ratingMin]").val()), parseInt("0" + $("input[name=ratingMax]").val())], // Handle start position
                step: 1, // Slider moves in increments of '10'
                connect: true, // Display a colored bar between the handles
                orientation: 'horizontal', // Orient the slider vertically
                behaviour: 'tap-drag', // Move handle on tap, bar is draggable
                range: {
                    // Slider can select '0' to '100'
                    'min': 0,
                    'max': 5
                },
                pips: {
                    // Show a scale with the slider
                    mode: 'steps',
                    density: 20
                }
            });
            ratingRangeEl.noUiSlider.on('update', function(values, handle) {
                if (handle) {
                    $("input[name=ratingMax]").val(parseInt(values[handle]));
                } else {
                    $("input[name=ratingMin]").val(parseInt(values[handle]));
                }
            });
        }
    }

    function scrollToEl(selector, offset) {
        var top = $(selector).offset().top - offset;
        $('body,html').animate({
            scrollTop: top,
        }, scroll_top_duration);
    }

    $(".listing2--view-map").on("click", function (e) {
        e.preventDefault();
        var showLabel = $(this).find(".show");
        var hideLabel = $(this).find(".hide");
        if (showLabel.hasClass("hidden")) {
            showLabel.removeClass("hidden");
            hideLabel.addClass("hidden");
            $(".map--reveal").slideUp();
        } else {
            showLabel.addClass("hidden");
            hideLabel.removeClass("hidden");
            $(".map--reveal").slideDown();
            scrollToEl($(this).attr("href"), $(".header").height());
            WTY_Map.staticGetById($(".map--reveal").attr("id")).reinit();
        }
    });

    $("body").on("click", ".scroll-link", function (e) {
        e.preventDefault();
        if ($(".header").css("position") === "fixed") {
            scrollToEl($(this).attr("href"), $(".header").height());
        } else {
            scrollToEl($(this).attr("href"), 0);
        }
    });

    // Shipping same as billing
    var syncShippingAndBillingAddresses = function () {
        if (ssab.is(":checked")) {
            $("#shipping-address").hide();
            $("[name^=billing]").each(function (idx, itm) {
                var $itm = $(itm);
                var targetName = $itm.attr("name").replace("billing", "shipping");
                $("[name=" + targetName + "]").val($itm.val());
            });
        } else {
            $("#shipping-address").show();
            $("[name^=billing]").each(function (idx, itm) {
                var $itm = $(itm);
                var targetName = $itm.attr("name").replace("billing", "shipping");
                if (itm.tagName != "SELECT") {
                    $("[name=" + targetName + "]").val("");
                }
            });
        }
    };

    var ssab = $("input[name=shippingSameAsBilling]");
    if (ssab.length > 0) {
        $("body").on("change", "input[name=shippingSameAsBilling], input[name^=billing], select[name^=billing]", function () {
            syncShippingAndBillingAddresses();
        });
        syncShippingAndBillingAddresses();
    }

    // Customization options form
    $("body").on("submit", "#customization-options-form", function (e) {

        var optFields = $("#customization-options-form *[name^=opt__]");
        var cmt = "";
        var currentSku = "";

        optFields.each(function (idx, itm) {

            var name = $(itm).attr("name");
            var value = $(itm).val();
            var parts = name.split("__");

            if (currentSku !== parts[1]) {

                if (currentSku !== "") {
                    cmt += "\n";
                }

                currentSku = parts[1];

                var product = $(itm).closest("*[data-product-name]");
                if (product) {
                    cmt += currentSku + ": " + $(product).data("productName") + "\n";
                } else {
                    cmt += currentSku + "\n";
                }

                cmt += "---\n";
            }

            if (value) {
                cmt += ($(itm).data("optionName") || parts[2]) + " "+ parts[3] + ": " + value + "\n";
            }
        });

        $("#customization-options-form input[name=comments]").val(cmt);

        return true;

    });

    var getBookingQuote = function () {

        var isAccommodation = txgbListingType === "DmaAccommodation";

        $('.txgb-modal .txgb-quote .txgb-quote-price').text("Getting a quote...");
        $('.txgb-modal .txgb-quote .txgb-quote-start').empty();
        $('.txgb-modal .txgb-quote .txgb-quote-end').empty();
        $('.txgb-modal .txgb-modal-btn-book')[0].disabled = true;

        $.ajax({
            type: "POST",
            url: "https://book.txgb.co.uk/v4/Services/BookingService.jsws/GetBookingQuote?cb=__V3_globallyAccessible%5b%27f1%27%5d",
            data: JSON.stringify({
                request: {
                    CurrentCurrency: "GBP",
                    AdCampaignCode: "",
                    IncludeCampaigns: false,
                    IncludeExtras: true,
                    IndustryCategoryGroup: isAccommodation ? 0 : 1,
                    CommencementDate: $('.txgb-modal [name="commencing"]')[0].value + " 00:00:00.000",
                    Duration: isAccommodation ? parseInt($('.txgb-modal [name="duration"]')[0].value) : null,
                    Configurations: [
                        {
                            ProductId: $('.txgb-modal [name="product-id"]')[0].value,
                            Pax: {
                                Adults: parseInt($('.txgb-modal [name="guests-adult"]')[0].value),
                                Children: parseInt($('.txgb-modal [name="guests-children"]')[0].value),
                                Seniors: parseInt($('.txgb-modal [name="guests-seniors"]')[0].value)
                            }
                        }
                    ],
                    Shortname: txgbDistributorId
                }
            }),
            success: function (data) {
                var config = data.Configurations[0];
                var quotes = config.Quotes;
                if (quotes && quotes.length > 0) {

                    var formatter = new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP'
                    });

                    var commenceDate = new Date(Date.parse(quotes[0].Commence));
                    var concludeDate = new Date(Date.parse(quotes[0].Conclude));

                    $('.txgb-book-form [name="Data"]')[0].value = JSON.stringify({
                        Products: [
                            {
                                ProductId: config.ProductId,
                                Pax: config.Pax,
                                Commence: quotes[0].Commence,
                                Conclude: quotes[0].Conclude
                            }
                        ]
                    });

                    $('.txgb-modal .txgb-quote .txgb-quote-price').text("Total cost" + (isAccommodation ? " for " + quotes[0].Duration + " night" + (quotes[0].Duration === 1 ? "" : "s") : "") + ": " + formatter.format(quotes[0].TotalPrice))
                    $('.txgb-modal .txgb-quote .txgb-quote-start').text((isAccommodation ? "Check In: " : "Starts at: ") + commenceDate.toLocaleString('en-GB'));
                    $('.txgb-modal .txgb-quote .txgb-quote-end').text((isAccommodation ? "Check Out: " : "Ends at: ") + concludeDate.toLocaleString('en-GB'));
                    $('.txgb-modal .txgb-modal-btn-book')[0].disabled = false;
                } else {
                    $('.txgb-book-form [name="Data"]')[0].value = "{}";
                    $('.txgb-modal .txgb-quote .txgb-quote-price').text("Unable to retrieve a quote for the selected criteria, please try again with different criteria");
                }
            },
            dataType: "json",
            contentType: 'application/json',
        });
    }

    $("body").on("click", ".V3 .rate-grid .row.rates .cell.rate", function (e) {
        e.preventDefault();

        var self = this;
        var index = Array.from(self.parentNode.children).indexOf(self);

        // Don't do anything if this price is loading
        if ($(self).hasClass("unknown"))
            return;

        // Wait a second so the Rate Grid applies the highlight
        setTimeout(function () {

            var rateGrid = $(self).closest(".rate-grid");
            var product = $(self).closest(".product");

            // Get the product ID from the ID HTML comment
            var entityInfo = product.find(".name .entity-info");
            var comments = entityInfo.getComments();
            var productId = ("" + comments.find(function (el) {
                return el.indexOf("Id: ") === 0;
            })).substr(4);
            var productName = entityInfo.find(".name").text();
            var productCapacity = entityInfo.find(".capacity").text();
            
            // Find the selected date
            var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var dateCell = $(rateGrid).find(".row .dates .date:nth-child(" + (index + 1) +")");
            var dateText = dateCell.text();
            var dateMonth = ("00" + (monthNames.indexOf(dateText.substr(-3)) + 1)).substr(-2);
            var dateDay = dateText.substr(3, dateText.length - 6);

            var today = new Date();
            today.setHours(0, 0, 0, 0);

            var parsedDate = new Date(Date.parse(today.getFullYear() + "-" + dateMonth + "-" + dateDay));

            // Date Grid doesn't show the year but we know the grid only shows availability
            // within a one year period from today so if we go into january then the parsed
            // date will be less than today and so we know we need to increment the year by 1
            if (parsedDate < today)
                parsedDate.setFullYear(parsedDate.getFullYear() + 1);

            // Update the modal
            var modal = $(".txgb-modal");
            modal.find('[data-element="txgb-product-name"]').text(productName);
            modal.find('[data-element="txgb-product-capacity"]').text(productCapacity);

            modal.find('[name="product-id"]')[0].value = productId;
            modal.find('[name="commencing"]')[0].value = parsedDate.toISOString().split('T')[0];
            modal.find('[name="duration"]')[0].value = defaultDuration;
            modal.find('[name="guests-adult"]')[0].value = defaultOccupancy;
            modal.find('[name="guests-children"]')[0].value = "0";
            modal.find('[name="guests-seniors"]')[0].value = "0";

            getBookingQuote();

            modal.removeClass("hidden");

        }, 200);
    });

    $("body").on("click", ".txgb-modal-btn-book", function (e) {
        $(this).closest("form").submit();
    });

    $("body").on("click", ".txgb-modal-btn-close", function (e) {
        e.preventDefault();
        $(".txgb-modal").addClass("hidden");
    });

    $("body").on("change", ".txgb-input", debounce(function (e) {
        getBookingQuote();
    }, 250));

    $("body").on("click", ".txgb-modal", function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".txgb-modal").addClass("hidden");
        return false;
    });

    $("body").on("click", ".txgb-modal-content", function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    });

    $(function () {

        $("body").on("submit", ".ajax-form", function () {

            $(this).ajaxSubmit({
                beforeSubmit: function (arr, $form, options) {
                    var container = $form.closest(".ajax-form-container");
                    container.css("opacity", 0.4);
                    container.find(".ajax-form button[type=submit]").prop('disabled', true);
                    var returnUrl = arr.find(function (itm, idx) {
                        return itm.name === "returnUrl";
                    });
                    if (returnUrl) {
                        var altTemplates = $(container).find("form.ajax-form").map(function (idx, itm) {
                            return $(this).data("altTemplate");
                        });
                        returnUrl.value += "?altTemplate=WtyAjaxPartial&partial=" + altTemplates.get().join();
                    }
                },
                success: function (markup) {
                    var $markup = $(markup);
                    $(".ajax-form-container").css("opacity", "");
                    $(".ajax-form button[type=submit]").prop('disabled', false);
                    var partials = $markup.find("[data-ajax-partial]");
                    if (partials.length > 1) {
                        partials.each(function (idx, itm) {
                            var altTemplate = $(itm).data("ajaxPartial");
                            $("form[data-alt-template=" + altTemplate + "]").replaceWith($(itm).children().first());
                        });
                    } else {
                        var altTemplate = $markup.data("altTemplate");
                        $("form[data-alt-template=" + altTemplate + "]").replaceWith($markup);
                    }
                },
                error: function (xhr) {
                    if (xhr.status === 410) {
                        location.href = xhr.statusText; // Assume the status text is a URL to redirect to
                    }
                }
            }); 

            return false;
            
        });

        if (typeof tippy === 'function') {
            tippy('[data-tippy]', {
                content: function (el) {
                    var tempalteId = el.getAttribute('data-tippy-template');
                    var template = document.getElementById(tempalteId);
                    return template.innerHTML;
                },
                allowHTML: true,
                interactive: true,
                theme: 'wty',
                maxWidth: 200
            });
        }

    });

})();