const CanvasElem = document.getElementById('canvas');
const ctx = CanvasElem.getContext('2d');
let XValues = [], YValues = [], lw = 3, SFcolor = "#d83dd9", SFcolorValues = [];

//code to accept line width
function lineWidth()
{
    lw = Number(document.getElementById("linewidth").value);
    document.getElementById("linewidth").value="";
}

//code to accept strokestyle and fillstyle
function strokeFillColor()
{
    SFcolor = document.getElementById("SFColor").value;
}

//code to draw points on canvas for marking
function DrawOnCanvas(canvas, event)
{
    let CanvaRect = canvas.getBoundingClientRect();
    let x = event.clientX - CanvaRect.left;
    let y = event.clientY - CanvaRect.top;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.arc(x,y,2,0,2*Math.PI);
    ctx.strokeStyle = SFcolor;
    ctx.fillStyle = SFcolor;
    ctx.fill();
    XValues.push(x);
    YValues.push(y);
    SFcolorValues.push(SFcolor);
}
CanvasElem.addEventListener("mousedown", function(e){
    DrawOnCanvas(CanvasElem, e)
});

//code to accept image file from input file field and set it to image object and to display it on the canvas
let ImageInput = document.getElementById("file");
let image = new Image();

//Function to display the selected image
function handleImageUpload(e)
{
    if(e.target.files && e.target.files[0])
    {
        let ImageFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(ImageFile);
        reader.onloadend = function(event)
        {
            image.src = event.target.result;
        }
    }
}

//when the image loads, draw it on the canvas
image.onload = function()
{
    drawImageOnCanvas();
}

//Function to draw the image on the canvas
function drawImageOnCanvas()
{
    ctx.clearRect(0,0, CanvasElem.width, CanvasElem.height);
    ctx.drawImage(image, 0, 0, CanvasElem.width, CanvasElem.height);
}

// Event Listeners
ImageInput.addEventListener("change", handleImageUpload);
window.addEventListener("resize", drawImageOnCanvas);

//code to check if the image is drawn in the canvas or not
function ifImageDrawn()
{
    if(image.src != "")
    {
        ctx.drawImage(image, 0,0, CanvasElem.width, CanvasElem.height);
    }
}

function undoPoint()
{
    x = XValues[XValues.length-1];
    y = YValues[YValues.length-1];
    ctx.clearRect(x-3,y-3,5,5)
    //when the image is drawn on the screen
    if(image.src != "")
    {
        ctx.drawImage(image,0,0,700,565)
        for(i=0;i<XValues.length-1;i++)
        {
            x = XValues[i]
            y = YValues[i];
            sfc = SFcolorValues[i];
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(x,y, 2, 0, 2  * Math.PI);
            ctx.strokeStyle = sfc;
            ctx.fillStyle=sfc;
            ctx.fill();
        }
    }
    redraw();
    XValues.pop()
    YValues.pop()
    SFcolorValues.pop();
}

//code to copy the text to clipboard
function copyCode()
{
    var copyCode = document.getElementById("code").value;
    navigator.clipboard.writeText(copyCode);
    document.getElementById("message1").value="Code is copied to the clipboard."
}

/*Code to clear the canvas and code section*/
function clearPoints()
{
    ctx.clearRect(0,0,CanvasElem.width,CanvasElem.height);
    Code = [ ], rdQueue=[ ], XValues = [ ], YValues = [ ], lw = 3, SFcolor = "#f9e900", SFcolorValues = [ ], lineX = [ ], lineY = [ ], lwLine=[ ];
    SFColorLine = [ ], curve1X = [ ], curve1Y = [ ], lwCurve1=[ ], SFColorCurve1 = [ ], arcX = [ ], arcY = [ ], ArcRadius = [ ], ArcAngle1 = [ ],ArcAngle2 = [ ], ArcDirection = [ ], lwArc=[ ];
    SFColorArc = [ ], curve2X = [ ], curve2Y = [ ], lwCurve2=[ ], SFColorCurve2 = [ ], rectX = [ ], rectY = [ ], RectWidth = [ ], RectHeight = [ ], lwRect=[ ], SFColorRect = [ ];
    image.src = " ";
    document.getElementById("SFColor").value = "#d83dd9";
    document.getElementById("code").innerHTML = " ";
    document.getElementById("message1").value = "By default line width is 3.";
    emptyVal = ["arcInp1","arcInp2","arcInp3","arcInp4","rectInp1","rectInp2"];
    for(i=0;i<=emptyVal.length;i++)
    {
        document.getElementById(emptyVal[i]).value = "";
    }
}

//change the canvas size
function Change_Canvas_Size()
{
    width = document.getElementById("ChangeSizeWidth").value;
    height = document.getElementById("ChangeSizeHeight").value;
    if(width > parentElement.clientWidth-40 || height > parentElement.clientHeight-40)
    {
        document.getElementById("message1").innerHTML = "Enter valid input!!"
    }else{
        canvas.width = width;
        canvas.height = height;
        clearPoints();
    }
}