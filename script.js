// var party =['rice', 'meat', 'juice']
// party.shift()
// party.unshift('hand fan')
// party.pop()
// party.push('jotter')
// party.push('pen')
// console.log(party);

// var ch='jjj'
// console.log(ch.length);



// function submitItem(){
//     if (items.value===''){
//     alert('Fill in the empty spaces')
//     } else{
//         cart.push(items.value)
//         console.log(cart);
//         document.getElementById('items').value= ''
//         displayItem()
//     }
    
// } 

// function displayItem(){
//     show.innerHTML += ''
//         for (var i = 0; i < cart.length; i++){
//             // console.log(cart[i]);
//             show.innerHTML += `
//             <small>${i+1}</smal>
//             <p>${cart[i]}</p>
//             `
//         }
// }


var cart = []
 if(cart.length == 0){
    bigDiv.style.display = 'block'
    bigDiv.innerHTML= `
    <p class="alert alert-danger text-center p-2">No items added yet </p>
    `
 }

 function displayItem(){
    show.innerHTML = ''
    var tableHTML =`<table class="text-center">`
    tableHTML += `<tr>`
    tableHTML +=`<th> S/N </th>`
    
    tableHTML +=`<th> Product </th>`
    tableHTML +=`</tr>`
    cart.map((goods, i) =>{
        tableHTML +=`<tr>`
        console.log(`${i+1} ${goods}`);
        tableHTML +=`
        <small><td style="width:100px">${i+1}</td></small>
        <p><td style="width: 80%">${goods}</td></p>
        `
        tableHTML +=`</tr>`
    })
    tableHTML += `</table>`
    document.getElementById('show').innerHTML=tableHTML
}

function submitItem (){
    if (items.value==''){
        errorMsg.style.display= 'block'
            } else{
                bigDiv.style.display = 'none'
                errorMsg.style.display= 'none'
                bigShow.style.display = 'block'
                cart.push(items.value)
                console.log(cart);
                document.getElementById('items').value= ''
                displayItem()
            }
}

function delLast(){
    cart.pop()
    displayItem()
}

function delFirst(){
    cart.shift()
    displayItem()
}

function delAny() {
    var start = Number(prompt('which number are you deleting'))
    cart.splice(start-1, 1)
    displayItem()
}

function addFirst(){
    cart.unshift(items.value)
    displayItem()
}

function delAll() {
    var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
    if (confirmation == true){
    cart.splice(0, cart.length)
    displayItem()
    }
}

function editAny(){
    var ediAny = Number(prompt('Which number are you editing'))
    var replayment = prompt('new value')
    cart.splice(ediAny-1, 1, replayment)
    displayItem()
}