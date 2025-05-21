let boxes=document.querySelectorAll(".box");
let reset1=document.querySelector(".reset");
let page1=document.querySelector(".page-1");
let page2=document.querySelector(".page-2");
let newgame=document.querySelector(".newgame");
let h2=document.querySelector(".h2")
let data=document.querySelector(".data");
let turno = true;
let win=false;
page2.style.display="none";
page1.style.display="inline-block";

const winningdata = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if (turno){
            box.innerText="0";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled = true;
        checkwinner()
    });
});

function checkwinner(){
    for(let patterns  of  winningdata){
        let pos1val=(boxes[patterns[0]].innerText);
        let pos2val=(boxes[patterns[1]].innerText);
        let pos3val=(boxes[patterns[2]].innerText);
        if (pos1val !="" && pos2val != "" && pos3val !=""){
            if(pos1val== pos2val && pos2val==pos3val){
                winconsole(pos1val);
                win = true;
                
                    // printwin()
            }
        }
    }
    
    draw();
    
}
let count;
let draws;
function draw(){
    count=0;
    for(let boxy of boxes){
        if(boxy.innerText!=""){
            count = count+1 ; 
            if(count==9 && win!==true){
            draws="51";
            winconsole(draws);
    }
    
        }
        
    }
    
}

function winconsole(pos1val){
    page1.style.display="none";
    page2.style.display="block";
    
    if(pos1val=="51"){
        data.innerText="It's a Draw";
    }
    else{
        h2.innerText = "The Winner Is " + pos1val;
    }
}

reset1.addEventListener("click",()=>{
    for(let boxy of boxes){
        boxy.innerText='';
        boxy.disabled=false;
        
    }
    turno = true;
    data.innerText="";
    win=false;
});
newgame.addEventListener("click",()=>{
    page2.style.display="none";
    page1.style.display="block";
    h2.innerText="";
    for(let boxy of boxes){
        boxy.innerText='';
        boxy.disabled=false;
        
    }
    turno = true;
    data.innerText="";
    win=false;
});