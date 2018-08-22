"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 Project Name: New Leggins Temlate;
 Author: Nikolay Kovalenko
 Start Date: 27.05/18
 */

var Project = function () {
    function Project(data) {
        _classCallCheck(this, Project);
    }

    _createClass(Project, [{
        key: "init",
        value: function init() {
            try {

                Project.homeSliders();
            } catch (err) {
                console.log(err);
            }
        }
    }], [{
        key: "homeSliders",
        value: function homeSliders() {
            $(".frontSlider").slick({
                infinite: true,
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 2000,

                // the magic
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        infinite: true
                    }

                }]
            });
        }
    }]);

    return Project;
}();

var Veres = new Project({});

$(document).ready(function () {
    Veres.init();
});

$(window).on('load', function () {
    setTimeout(function () {
        scrollTo(0, -1);
    }, 0);
});

$(window).scroll(function () {});

$(window).resize(function () {});