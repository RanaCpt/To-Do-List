// const h1 = document.createElement("h1");
// h1.textContent = `My To Do List`;
// h1.style.fontSize = "4rem"
// document.querySelector("header").prepend(h1);

function newElement() {
    const inputValue = document.getElementById("new-input").value;
    const errorDisplay = document.getElementById("h3");
    const setError = (message) => {
        errorDisplay.textContent = message;
    }
    const setSucess = () =>{
        errorDisplay.textContent = "";
    }
    if(inputValue === ""){
        // h3.textContent = `Write Your Task!!!!`;
        errorDisplay.style.fontSize = "1.5rem"
        errorDisplay.style.marginTop = "10px";
        errorDisplay.style.color = "red"
        setError(`write Your Task!!!`)

    }else{
        setSucess();
    }
    // if(inputValue === ""){
    //     alert(`Write Your Task`);
    //     return;
    // }
    
    const li = document.createElement("li");
    // const ul = document.getElementById("new-ul");
    li.style.textTransform = "uppercase";
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("new-ul").appendChild(li);

    if(inputValue === ""){
        document.getElementById("new-ul").removeChild(li);

    }else{
        document.getElementById("new-ul").appendChild(li);
    }

    document.getElementById("new-input").value = "";

    const close = document.createElement("close");
    const icon = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(icon);
    li.appendChild(close);

    close.onclick = () => {
        const div = li;
        div.style.display = "none";
    }; 

    console.log(inputValue);
}

const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
});