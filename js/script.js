let listDOM = document.querySelector('#list')
let listLiDOM = document.querySelectorAll('#list>li')
let taskDOM = document.querySelector('#task')
let liveToastDOM = document.querySelectorAll('#liveToast')
let liveToastButtonDOM = document.querySelectorAll('#liveToast>div>button')

let list = localStorage.getItem('liList') ? localStorage.getItem('liList') : ""
listDOM.innerHTML = list

function localList(){
    let listLiDOM = document.querySelectorAll('#list>li')
    list = ""
    listLiDOM.forEach(function(lidom){
        list += lidom.outerHTML
    })
    localStorage.setItem('liList',list)
    // listDOM.innerHTML = list
    console.log('local Save')
    console.log(list)
}

// Listeden Silme İslemini Yapan Fonksiyon
function deleteElement() {
    let listLiDOM = document.querySelectorAll('#list>li')
    listLiDOM.forEach(function (liDOM) {
        liDOM.lastElementChild.addEventListener('click',function(){
            liDOM.remove()
        })
    })
    localList()
    localStorage.setItem('deneme','deneme')
}
deleteElement()

// Yapildi isaretlenmesini saglayan bir fonksiyon
function checkElement(id) {
    id.classList.contains('checked') ? id.classList.remove('checked') : id.classList.add('checked')
    localList()
}

// Kayit Basarili Mesaji Kapatma Butonu
liveToastButtonDOM[0].addEventListener('click', function () {
    liveToastDOM[0].classList.remove('show');
    liveToastDOM[0].classList.add('hide');
})

// Kayit Hatali Mesaji Kapatma Butonu
liveToastButtonDOM[1].addEventListener('click', function () {
    liveToastDOM[1].classList.remove('show');
    liveToastDOM[1].classList.add('hide');
})

// Yeni Li Elemani Ekleme
function newElement() {
    let li = document.createElement('li')
    let deleteButton = `<button type="button" class="close" style="height: 100%; min-width:50px"><span aria-hidden="true">&times;</span></button>`
    if (taskDOM.value) {
        li.innerHTML = `${taskDOM.value} ${deleteButton}`
        li.setAttribute("onclick", "checkElement(this)");
        listDOM.appendChild(li);
        liveToastDOM[0].classList.remove('hide');
        liveToastDOM[0].classList.add('show');
        deleteElement()
    } else {
        liveToastDOM[1].classList.remove('hide');
        liveToastDOM[1].classList.add('show');
    }
}


