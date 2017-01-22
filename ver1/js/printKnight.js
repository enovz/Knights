/**printKnight:
 * 
 * 1. create iframe
 * 2. setPrintSettings (what on before/after print)
 * 3. before print
 * 4. after print
 * 
 */

import { renderKnight } from './renderKnight'

export function printKnight1(knightTemplate) {

    //create iframe
    let iFrame = document.createElement("iframe");
    //iFrame set id to knight

    //test
    console.log(iFrame);

    //before print
    iFrame.onload = setPrint;

    //style
    iFrame.style.visibility = "hidden";//hidden";
    iFrame.style.position = "fixed";
    iFrame.style.right = "0";
    iFrame.style.bottom = "0";
    iFrame.id = "knightTemplate"

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

export function printKnight2(knightTemplate) {
    try {
        let iFrame = document.createElement("iframe");
        //iFrame set id to knight

        //test
        console.log(iFrame);

        //before print
        //iFrame.onload = setPrint;

        //style
        iFrame.style.visibility = "hidden";//hidden";
        iFrame.style.position = "fixed";
        iFrame.style.right = "0";
        iFrame.style.bottom = "0";
        iFrame.id = "knightTemplate"

        //set source 
        iFrame.src = knightTemplate;
        document.body.appendChild(iFrame);



        //var oIframe = document.getElementById('knightTemplate');
        var oContent = document.getElementById('paperKnight').innerHTML;
        var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
        if (oDoc.document) oDoc = oDoc.document;

        console.log(oDoc);
        console.log(oContent);


        renderKnight(oContent);


        oDoc.close();
    } catch (e) {
        self.print();
    }
}

export function printKnight3(knightTemplate) {


    frame.contentWindow.postMessage(knightTemplate, '*');

    window.addEventListener('message', function (event) {

        // IMPORTANT: Check the origin of the data! 
        if (~event.origin.indexOf('file:///D:/Lib/Projects/Knights/src/index.html')) {
            
            // The data has been sent from your site 
            var frame = document.getElementById('iframe');
            //style
            iFrame.style.visibility = "hidden";//hidden";
            iFrame.style.position = "fixed";
            iFrame.style.right = "0";
            iFrame.style.bottom = "0";
            iFrame.id = "knightTemplate"

            //set source 
            iFrame.src = knightTemplate;
            document.body.appendChild(iFrame);

            // The data sent with postMessage is stored in event.data 
            console.log(event.data);
        } else {
            // The data hasn't been sent from your site! 
            // Be careful! Do not use it. 
            return;
        }
    });
}
