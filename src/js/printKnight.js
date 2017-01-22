/**printKnight:
 * 
 * 1. create iframe
 * 2. setPrintSettings (what on before/after print)
 * 3. before print
 * 4. after print
 * 
 */

import { renderKnight } from './renderKnight'

export function printKnight(knightTemplate) {

    //create iframe
    let iFrame = document.createElement("iframe");
    //iFrame set id to knight

    //test
    console.log(iFrame);
    
    //before print
    iFrame.onload = setPrint;

    //style
    iFrame.style.visibility = "hidden";
    iFrame.style.position = "fixed";
    iFrame.style.right = "0";
    iFrame.style.bottom = "0";

    //set source 
    iFrame.src = knightTemplate;
    document.body.appendChild(iFrame);

}

function closePrint() {
    document.body.removeChild(this.__container__);
}

function setPrint() {

    this.contentWindow.__container__ = this;

    //render knight in iframe (fill fields)
    renderKnight();

    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
}

