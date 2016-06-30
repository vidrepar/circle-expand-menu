/**
 *
 * @param {number} id
 * @param {number} width
 * @param {number} height
 * @param container
 * @constructor
 */

var Circle = function (id, width, height, container, templateName) {

    //constructor function
    this.id             = id;
    this.templateName   = templateName;
    this.width          = width;
    this.height         = height;

    this.render(container);
    this.addEvents();

};

Circle.prototype.setPosition = function (properties) {

    this.circleElement.css(properties);

};

Circle.prototype.fadeOut = function () {

    this.circleElement.transition({ opacity:0, scale:0.2 });

};

Circle.prototype.scaleUp = function () {

    this.circleElement.transition({
        width:$(window).width(),
        height:'100vh',
        borderRadius:0,
        scale:1,
        y:0,
        x:0,
        top:0,
        left:0

    });

    this.circleElement.find('.circle-content').show();

};

Circle.prototype.render = function (container) {

    var template = $('#'+this.templateName).html();

    this.circleElement = $('<div>', { class:'circle' });
    this.circleElement.append(template);

    this.circleElement.find('.circle-content').hide();

    this.circleElement.css({
        width:this.width,
        height:this.height,
        x:Math.random()*$(window).width(),
        y:Math.random()*$(window).height()
    });
    $(container).append(this.circleElement);

};

Circle.prototype.removeEvents = function () {

    this.circleElement.off();

};

Circle.prototype.addEvents = function () {

    var self = this;

    this.circleElement.on('mouseenter', function () {

        $(self.circleElement).transition({ scale:1.5 });

    });

    this.circleElement.on('mouseleave', function () {

        $(self.circleElement).transition({ scale:1 });

    });

};
