console.log('Welcome to my notes taking app!');
display();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";

    console.log(notesObj);
    display();
})

function display() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }

    let html = '';

    notesObj.forEach(function (element, index) {
        html += ` <div class="card notecard mx-2 mx-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id = "${index}" onclick = "deleteNode(this.id)">Delete this note</button>
    </div>


</div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `No notes to display!`;
    }

}

// let deletebtn = document.getElementById('deletebtn');
// let notesElm = document.getElementById('notes');

// deletebtn.addEventListener('click', function(e, index){
//     localStorage.removeItem()
// })

function deleteNode(index){
    console.log('deleting ', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    display();


}

searchtxt = document.getElementById('searchtxt');
searchtxt.addEventListener('input', function(){

    inputval = searchtxt.value.toLowerCase();
    console.log('searching '+inputval);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })


})