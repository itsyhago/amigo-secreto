let friendList = []
const friendInput = document.getElementById("amigo")
const friendUl = document.getElementById("listaAmigos")
const resultUl = document.getElementById("resultado")
const btnText = document.getElementById("btnText")

function adicionarAmigo(){
    if(btnText.innerText == "Sortear amigo"){
        if(!(friendInput.value)){
        alert("Digite o nome do amigo")
    }else if(friendList.includes(friendInput.value)){
        alert("Amigo já adicionado")
        friendInput.value = ""
        friendInput.focus()
    }else{
        friendList.push(friendInput.value.trim())
        const newFriend = document.createElement("li")
        const FriendText = document.createElement("span")
        FriendText.textContent =  friendInput.value.trim()
        FriendText.innerText = friendInput.value.trim()
        newFriend.appendChild(FriendText)
        const btnRemove = document.createElement("button")
        btnRemove.innerText = "X"
        btnRemove.addEventListener("click", () => {
            friendUl.removeChild(newFriend)
            friendList.splice(friendList.indexOf(FriendText.textContent.trim()), 1)
        })
        newFriend.appendChild(btnRemove)
        friendUl.appendChild(newFriend)
        friendInput.value = ""
        friendInput.focus()
    }
    }
    
    

}

function sortearAmigo(){
    const resultLi = document.createElement("li")
    if(btnText.innerText == "Sortear amigo"){
        if(friendList.length === 0 ){
        alert("Coloque pelo menos um amigo")
        friendInput.focus()
        }else{
            const drawnNumber = Math.floor(Math.random() * friendList.length)
            resultLi.innerText = `Seu amigo secreto é ${friendList[drawnNumber]}`
            resultUl.appendChild(resultLi)
            friendUl.replaceChildren()
            btnText.innerText = "Reiniciar sorteio"
        }
    }else{
        friendInput.value = ""
        resultUl.replaceChildren()
        btnText.innerText = "Sortear amigo"
        friendList = []
    }
    
    
}