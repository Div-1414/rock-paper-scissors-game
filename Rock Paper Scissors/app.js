let choices= document.querySelectorAll(".choice");
let userscorepara= document.querySelector("#userscore");
let computerscorepara= document.querySelector("#computerscore");
let msg=document.querySelector("#play");
uscore=0;
cscore=0;


const gencompchoice=()=>{
    const option=["Rock" ,"Paper" ,"Scissors"];
    const randomindx= Math.floor(Math.random()*3);
    return option[randomindx];
};

const draw=()=>{
    msg.innerText="Game is draw ☺️";
    msg.style.backgroundColor="#42990fff";

};
const shoresult=(userwin,computerchoisee,userinputt)=>{
    if(userwin){
        uscore++;
        userscorepara.innerText=uscore;
        msg.innerText=`You Win! 🎉  ${userinputt} beats ${computerchoisee}`;
        msg.style.backgroundColor="#06D6A0";
        
    }
    else{
        cscore++;
        computerscorepara.innerText=cscore;
        msg.innerText = `You Lose! 😅 ${computerchoisee} beats ${userinputt}`;
        
        msg.style.backgroundColor = "#f80000ff";
        msg.style.color="white";
        
    }
};

const playgame=(userinputt)=>{
    const computerchoisee=gencompchoice();
    if(userinputt==computerchoisee){
         draw();
    }
    else{
        let userwin=true;
        if(userinputt==="Scissors"){
            if(computerchoisee==="Rock"){
                userwin=false;
                shoresult(userwin,computerchoisee,userinputt);
            }
            else{
                userwin=true;
                shoresult(userwin,computerchoisee,userinputt);

            }
        }
        else if(userinputt==="Paper"){
            if(computerchoisee==="Scissors"){
                userwin=false;
                shoresult(userwin,computerchoisee,userinputt);
            }
            else{
                userwin=true;
                shoresult(userwin,computerchoisee,userinputt);
            }
        }
        else{
            if(computerchoisee==="Paper"){
                userwin=false;
                shoresult(userwin,computerchoisee,userinputt);
            }
            else{
                userwin=true;
                shoresult(userwin,computerchoisee,userinputt);
            }
        }
    }
    
};

choices.forEach((choise)=>{
     choise.addEventListener("click",()=>{
     const userinputt=choise.getAttribute("id");
     playgame(userinputt);
    });
     
});