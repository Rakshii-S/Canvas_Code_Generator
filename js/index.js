//CANVAS 
const canvasMessage = document.getElementById("canvasDisplay");
const canvasSize = document.getElementById("canvasSize");
const canvas = document.getElementById("canvas");
const parentElement = canvas.parentElement;

function resizeCanvas() 
{
    canvas.width = parentElement.clientWidth-40;
    canvas.height = parentElement.clientHeight-80;
    canvasMessage.innerHTML = `Canvas Size: ${canvas.width}px X ${canvas.height}px`;
    canvasSize.innerHTML = `Change Canvas Size:<br>(Max size ${canvas.width}px X ${canvas.height}px)`;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

//DARK MODE
function setStyles(elements, styles) {
    elements.forEach(el => Object.assign(el.style, styles));
}

function ComponentsDark() {
    setStyles([...document.getElementsByClassName("textA"), 
               ...document.getElementsByClassName("TextDisplay"), 
               ...document.getElementsByClassName("InputDisplay")], 
              { backgroundColor: "#381e45", color: "white", border: "2px solid #d83dd9" });

    setStyles([...document.getElementsByClassName("ButtonDisplay"), 
               ...document.getElementsByClassName("FuncDisplay"), 
               ...document.getElementsByClassName("FuncDisplay2"), 
               ...document.getElementsByClassName("UndoDisplay")], 
              { backgroundColor: "rgb(13, 13, 13)", color: "#d83dd9" });

    setStyles([...document.getElementsByClassName("FuncSubmit")], 
              { backgroundColor: "#381e45", color: "#d83dd9" });

    setStyles([...document.getElementsByClassName("linkkk")], { color: "#d83dd9" });

    setStyles([document.getElementById("canvasDisplay")], 
              { backgroundColor: "#381e45", color: "white", border: "2px solid #d83dd9" });

    setStyles([document.getElementById("canvas")], { backgroundColor: "#f2d8ff" });

    setStyles([document.getElementById("header"), document.getElementById("footer")], 
              { backgroundColor: "#381e45", color: "#d83dd9" });

    setStyles([document.getElementById("main")], 
              { backgroundImage: "linear-gradient(to right,#14091a,#57205a,#14091a)" });

    setStyles([document.getElementById("bt1"), document.getElementById("bt2")], 
              { backgroundColor: "rgb(13, 13, 13)" });

    const bt = document.getElementById("bt");
    bt.style.backgroundColor = "rgb(13, 13, 13)";
    bt.setAttribute('data-dark-mode', bt.getAttribute('data-dark-mode') === 'false' ? 'true' : 'false');

    [...document.getElementsByClassName("FuncDisplay2"), 
     ...document.getElementsByClassName("FuncSubmit")].forEach(button => {
        button.setAttribute('data-dark-mode', button.getAttribute('data-dark-mode') === 'true' ? 'false' : 'true');
    });

    [...document.getElementsByClassName("iconImage")].forEach(img => img.src = "../images/night-mode.png");
}

//LIGHT MODE
function setStyles(elements, styles) {
    elements.forEach(el => Object.assign(el.style, styles));
}

function ComponentsLight() {
    setStyles([...document.getElementsByClassName("textA"), 
               ...document.getElementsByClassName("TextDisplay"), 
               ...document.getElementsByClassName("InputDisplay")], 
              { backgroundColor: "#a35bc7", color: "#381e45", border: "2px solid #381e45" });

    setStyles([...document.getElementsByClassName("ButtonDisplay"), 
               ...document.getElementsByClassName("FuncDisplay"), 
               ...document.getElementsByClassName("FuncDisplay2"), 
               ...document.getElementsByClassName("UndoDisplay")], 
              { backgroundColor: "#e1a5ff", color: "#381e45" });

    setStyles([...document.getElementsByClassName("FuncSubmit")], 
              { backgroundColor: "#a35bc7", color: "#381e45" });

    setStyles([...document.getElementsByClassName("linkkk")], { color: "#381e45" });

    setStyles([document.getElementById("canvasDisplay")], 
              { backgroundColor: "#a35bc7", color: "#381e45", border: "2px solid #381e45" });

    setStyles([document.getElementById("canvas")], { backgroundColor: "white" });

    setStyles([document.getElementById("header"), document.getElementById("footer")], 
              { backgroundColor: "#a35bc7", color: "#381e45" });

    setStyles([document.getElementById("main")], 
              { backgroundImage: "linear-gradient(to right,rgb(241, 184, 255),rgb(254, 250, 255),rgb(241, 184, 255))" });

    setStyles([document.getElementById("bt1"), document.getElementById("bt2")], 
              { backgroundColor: "#e1a5ff" });

    const bt = document.getElementById("bt");
    bt.style.backgroundColor = "#e1a5ff";
    bt.setAttribute('data-dark-mode', bt.getAttribute('data-dark-mode') === 'true' ? 'false' : 'true');

    [...document.getElementsByClassName("FuncDisplay2"), 
     ...document.getElementsByClassName("FuncSubmit")].forEach(button => {
        button.setAttribute('data-dark-mode', button.getAttribute('data-dark-mode') === 'true' ? 'false' : 'true');
    });

    [...document.getElementsByClassName("iconImage")].forEach(img => img.src = "../images/light-mode.png");
}


//MODE SELECTOR -> TOGGLE TO DARK AND WHITE MODE
const modeToggles = document.querySelectorAll('.modeToggle');
modeToggles.forEach(toggle => {
    toggle.addEventListener('change', function(){
        const isChecked = this.checked;
        if(isChecked)
        {
            ComponentsDark();
        }else{
            ComponentsLight();
        }
        modeToggles.forEach(t => {
            t.checked = isChecked;
        });
    });
});

//RESPONSIVE
//left slider
function leftSlider()
{
    //change the button rotation
    const btOne = document.getElementById("btOne");
    const isActiveBtn = btOne.getAttribute('data-active-1')=== 'true';
    if(isActiveBtn)
    {
        btOne.style.rotate = "0deg";
    }
    btOne.setAttribute('data-active-1', isActiveBtn?'false':'true');
    if(!isActiveBtn)
    {
        btOne.style.rotate = "180deg";
    }

    const left = document.getElementById('section1');
    const isActive1 = left.getAttribute('data-active-1')==='true';
    left.setAttribute('data-active-1', isActive1?'false':'true');
    
    const bt1 = document.getElementById('bt1');
    const isActivee = bt1.getAttribute('data-active-1')==='true';
    bt1.setAttribute('data-active-1', isActivee?'false':'true');
}

//right slider
function rightSlider()
{
    //change the button rotation
    const btTwo = document.getElementById("btTwo");
    const isActiveBtn = btTwo.getAttribute('data-active-1')=== 'true';
    if(isActiveBtn)
    {
        btTwo.style.rotate = "0deg";
    }
    btTwo.setAttribute('data-active-1', isActiveBtn?'false':'true');
    if(!isActiveBtn)
    {
        btTwo.style.rotate = "180deg";
    }

    const right = document.getElementById('section3');
    const isActive = right.getAttribute('data-active-2')==='true';
    right.setAttribute('data-active-2', isActive?'false':'true');

    const bt2 = document.getElementById('bt2');
    const isActivee = bt2.getAttribute('data-active-2')==='true';
    bt2.setAttribute('data-active-2', isActivee?'false':'true');
}

//menu
function menuDisplay()
{
    const menu = document.getElementById('menu');
    const isActive = menu.getAttribute('menu-active') === 'true';
    const btnDisappear = document.getElementById('btTwo');
    if(isActive === false){
        btnDisappear.style.zIndex=-1;
    }else{
        btnDisappear.style.zIndex=3;
    }
    menu.setAttribute('menu-active',isActive?'false':'true');
}

function setStyles(elements, styles) {
    elements.forEach(el => Object.assign(el.style, styles));
}

function OtherFunctions() {
    setStyles([...document.getElementsByClassName("FuncDisplay")], { display: "none" });
    setStyles([document.getElementById("bt1")], { display: "none" });

    const bt = document.getElementById("bt");
    Object.assign(bt.style, { 
        display: "block", rotate: "180deg", borderRadius: "10px", padding: "3px", 
        position: "absolute", left: "0%", bottom: "25%", 
        backgroundColor: bt.getAttribute('data-dark-mode') === 'true' ? "rgb(13, 13, 13)" : "#e1a5ff" 
    });

    [...document.getElementsByClassName("FuncDisplay2")].forEach(disp => {
        Object.assign(disp.style, { 
            display: "flex", fontSize: "12px", textAlign: "center", borderRadius: "10px",
            backgroundColor: disp.getAttribute('data-dark-mode') === 'true' ? "rgb(13, 13, 13)" : "#e1a5ff", 
            color: disp.getAttribute('data-dark-mode') === 'true' ? "#d83dd9" : "#381e45", 
            margin: "8px", padding: "13px" 
        });
    });

    [...document.getElementsByClassName("FuncText")].forEach(disp => {
        Object.assign(disp.style, { 
            marginLeft: "20px", width: "130px",fontSize:"11px", borderRadius:"10px",padding:"10px",paddingTop:"13px", fontWeight:"bold", 
            backgroundColor: disp.getAttribute('data-dark-mode') === 'true' ? "#381e45" : "#a35bc7", 
            color: disp.getAttribute('data-dark-mode') === 'true' ? "#d83dd9" : "#381e45" 
        });
    });

    setStyles([...document.getElementsByClassName("FuncInputs")], { 
        display: "flex", flexDirection: "column", fontSize: "12px", textAlign: "center" 
    });

    setStyles([...document.querySelectorAll(".FuncInputs > input")], { 
        width: "70px", height: "20px", margin: "2px 10px" 
    });

    [...document.getElementsByClassName("FuncSubmit")].forEach(disp => {
        Object.assign(disp.style, { 
            marginLeft: "20px", width: "80px", 
            backgroundColor: disp.getAttribute('data-dark-mode') === 'true' ? "#381e45" : "#a35bc7", 
            color: disp.getAttribute('data-dark-mode') === 'true' ? "#d83dd9" : "#381e45" 
        });
    });
}

function FirstFunctions()
{
    const FuncDisplay2 = document.getElementsByClassName("FuncDisplay2");
    for(disp of FuncDisplay2)
    {
        disp.style.display = "none";
    }

    const bt1 = document.getElementById("bt1");
    bt1.style.display = "block";
    
    const bt = document.getElementById("bt");
    bt.style.display = "none";

    const FuncDisplay = document.getElementsByClassName("FuncDisplay");
    for(disp of FuncDisplay)
    {
        disp.style.display = "block";
    }
}