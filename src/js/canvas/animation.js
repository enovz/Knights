/**Knight:
 * 
 * Properties: 
 *      1. name
 *      2. stats
 *      3. traits
 *      4. armor
*/

function Knight(knightId) {

    //Properties
    this.name = generator.getName();
    this.stats = generator.getStats();
    this.traits = generator.getTraits();
    this.buyArmor(knightId);

}

Knight.prototype.buyArmor = function (containerId) {

    let view = methods.setCanvasSize(containerId);

    let methods = {

        setCanvasSize: function (containerId) {
            //get canvas from cotainer
            _canvas = document.getElementById(containerId.ID);
            _context = this._canvas.getContext('2d');
            _container = this._canvas.parentNode;

            //canvas fill parent
            _canvas.width = container.offsetWidth;;
            _canvas.height = container.offsetHeight;

            return {
                canvas: _canvas,
                container: _container,
                context: _context,
            }
        },
        buyHelmet: function () {
            //get random helmet image from /img/head

        },
        buyBreastPlate: function () {
            //get random breast plate image from /img/torso
        },
        buyArmPlates: function () {
            //get random arm plates image from /img/arms
        },
        buyLegPlates: function () {
            //get random leg plates image from /img/legs
        },
    };

    let render = {
        armor: function () {
            /**
             */
        }
    };

}



function setCanvasSize(containerId) {
    //get canvas from cotainer
    _canvas = document.getElementById(containerId.ID);
    _context = this._canvas.getContext('2d');
    _container = this._canvas.parentNode;

    //canvas fill parent
    _canvas.width = container.offsetWidth;;
    _canvas.height = container.offsetHeight;

    return {
        canvas: _canvas,
        container: _container,
        context: _context,
    }


}

function getArmorPart(source = "") {

    let img = document.createElement('img');

    img.src = source;
    img.onload = function () {
        context.drawImage(img, 0, 0, 50, 50);
        context.restore();
    };
}