/**printKnight:
 * 
 * 1. create iframe
 * 2. setPrintSettings (what on before/after print)
 * 3. before print
 * 4. after print
 * 
 */
export function printKnight(paperKnight) {

    //create iframe
    var iFrame = document.createElement("iframe");

    //before print
    iFrame.onload = setPrint;

    //style
    iFrame.style.visibility = "hidden";
    iFrame.style.position = "fixed";
    iFrame.style.right = "0";
    iFrame.style.bottom = "0";

    //set source 
    iFrame.src = paperKnight;
    document.body.appendChild(iFrame);
}

function closePrint() {
    document.body.removeChild(this.__container__);
}

function setPrint() {
    this.contentWindow.__container__ = this;
    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
}

