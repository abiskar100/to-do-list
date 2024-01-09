const form = document.getElementById('form');
const inputValue = document.getElementById('inputValue');
const darkmodebtn = document.getElementById('darkmode');

const taskcontainer = document.getElementById('activeTasks');

const heading = "TO DO Lists";

const headingtext = document.getElementById('heading');

let index = 0;

function writeheading(){
    headingtext.innerText = heading.slice(0 , index);
    index++;
    if(index > heading.length){
        index =0;
    }
}

const intervalid = setInterval(() => {
    writeheading();
}, 70);

setTimeout(() => {
    clearInterval(intervalid);
}, 1000);

const addbtn = document.getElementById('addBtn');
const btnadd = document.getElementById('btnadd');
const playmusicbtn = document.getElementById('playmusic');

const musics = [
    "lofi",
];

let isplaying = false;

musics.forEach((music) =>{
    playmusicbtn.addEventListener("click" , ()=>{
        if(isplaying){
        stopplaying();
        isplaying = false;
        }
        else {
        document.getElementById(music).play();
        isplaying = true;
        }

    });
});

function stopplaying(){
    musics.forEach((music)=>{

        const audios = document.getElementById(musics);
        audios.pause();
        audios.currentTime = 0;
    });
}

const playmusic = document.getElementById('playmusic');

const main = document.querySelector('main');


darkmodebtn.addEventListener("click", ()=>{
    main.classList.toggle('dark');
    btnadd.style.boxShadow= "none";
    playmusic.classList.toggle('playmusicDark');
    if(darkmodebtn.innerText == "Switch to Dark Mode"){
    darkmodebtn.innerText = "Switch to light Mode";
    }
    else {
        darkmodebtn.innerText = "Switch to Dark Mode";
    }
    const intervalid = setInterval(() => {
        writeheading();
    }, 70);
    
    setTimeout(() => {
        clearInterval(intervalid);
    }, 1000);    
});

addbtn.addEventListener("click", ()=>{
    form.style.display = "flex";
    addbtn.style.display = "none";
    btnadd.style.display = "block";

});

btnadd.addEventListener("click" , (event)=>{

    event.preventDefault();

    if(inputValue.value){

    const li = document.createElement('li');

    li.innerText = inputValue.value;

    const removebtn = document.createElement('button');

    removebtn.classList.add("removebutton");

    removebtn.innerText = "X";
    
    const notif = document.createElement('div');

    removebtn.addEventListener("click" , ()=>{

        li.remove();

        notif.innerText = "Task Removed";

        setTimeout(()=>{
            notif.remove();
        },3000);
    


    });


    notif.classList.add("notification");

    notif.innerText = "Task Added.";

    main.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    },3000);

    li.appendChild(removebtn);

    taskcontainer.appendChild(li);

    inputValue.value = '';
    
    }

});
