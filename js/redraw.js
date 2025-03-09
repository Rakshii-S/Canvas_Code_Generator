function lineLC()
{
    j=0;
    for(i=0;i<lineX.length;i=i+2)
    {
        x1 = lineX[i];
        y1 = lineY[i];
        x2 = lineX[i+1];
        y2 = lineY[i+1];
        ctx.lineWidth = lwLine[j];
        ctx.strokeStyle= SFColorLine[j];
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function curve1LC()
{
    j=0;
    for(i=0;i<curve1X.length;i=i+3)
    {
        x1 = curve1X[i];
        y1 = curve1Y[i];
        x2 = curve1X[i+1];
        y2 = curve1Y[i+1];
        x3 = curve1X[i+2];
        y3 = curve1Y[i+2];
        ctx.lineWidth = lwCurve1[j];
        ctx.strokeStyle= SFColorCurve1[j];
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3);
        ctx.stroke();
        ctx.closePath();
        j = j+1;
    }
}
function arcLC()
{
    j=0;
    for(i=0;i<arcX.length;i++)
    {
        x = arcX[i];
        y= arcY[i];
        radius = ArcRadius[i];
        SAngle = ArcAngle1[i];
        EAngle = ArcAngle2[i];
        counterclockwise = ArcDirection[i];
        l = lwArc[j];
        sfc = SFColorArc[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.arc(x,y,radius,SAngle,EAngle,counterclockwise);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function curve2LC()
{
    j=0;
    for(i=0;i<curve2X.length;i=i+4)
    {
        x1 = curve2X[i];
        y1 = curve2Y[i];
        x2 = curve2X[i+1];
        y2 = curve2Y[i+1];
        x3 = curve2X[i+2];
        y3 = curve2Y[i+2];
        x4 = curve2X[i+3];
        y4 = curve2Y[i+3];
        l = lwCurve2[j];
        sfc = SFColorCurve2[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.moveTo(x1,y1);
        ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
}
function rectLC()
{
    j=0;
    for(i=0;i<rectX.length;i++)
    {
        x = rectX[i];
        y= rectY[i];
        w = RectWidth[i];
        h = RectHeight[i];
        l = lwRect[j];
        sfc = SFColorRect[j];
        ctx.beginPath();
        ctx.lineWidth = l;
        ctx.rect(x,y,w,h);
        ctx.strokeStyle=sfc;
        ctx.stroke();
        ctx.closePath();
        j++;
    }
} 
function redraw()
{
    lineLC();
    curve1LC();
    arcLC();
    curve2LC();
    rectLC();
}


function undoDrawing()
{
    ctx.clearRect(0,0,CanvasElem.width,CanvasElem.height);
    if(rdQueue[rdQueue.length-1] == "line")
    {
        lineX.pop();
        lineY.pop();
        lineX.pop();
        lineY.pop();
        rdQueue.pop();
        Code.pop();
        lwLine.pop();
        SFColorLine.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "curve1")
    {
        curve1X.pop();
        curve1Y.pop();
        curve1X.pop();
        curve1Y.pop();
        curve1X.pop();
        curve1Y.pop();
        rdQueue.pop();
        lwCurve1.pop();
        SFColorCurve1.pop();
        Code.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "circle")
    {
        arcX.pop();
        arcY.pop();
        rdQueue.pop();
        Code.pop();
        ArcRadius.pop();
        ArcAngle1.pop();
        ArcAngle2.pop();
        ArcDirection.pop();
        lwArc.pop();
        SFColorArc.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "curve2")
    {
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        curve2X.pop();
        curve2Y.pop();
        rdQueue.pop();
        lwCurve2.pop();
        SFColorCurve2.pop();
        Code.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else if(rdQueue[rdQueue.length-1] == "rectangle")
    {
        rectX.pop();
        rectY.pop();
        rdQueue.pop();
        Code.pop();
        RectWidth.pop();
        RectHeight.pop();
        lwRect.pop();
        SFColorRect.pop();
        document.getElementById("code").innerHTML = Code;
    }
    else
    {
        console.log("successfull")
    }

    if(image.src != "")
    {
        const CanvasElem = document.getElementById('canvas');
        const ctx = CanvasElem.getContext('2d');
        ctx.drawImage(image, 0,0, CanvasElem.width, CanvasElem.height);
    }
    redraw();
    for(i=0;i<XValues.length;i++)
        {
            x = XValues[i];
            y = YValues[i];
            sfc = SFcolorValues[i];
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(x,y,2, 0, 2  * Math.PI);
            ctx.strokeStyle = sfc;
            ctx.fillStyle=sfc;
            ctx.fill();
        }
}

//redraw 
window.addEventListener('resize',()=>{
    redraw();
})