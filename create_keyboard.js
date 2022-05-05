function createkeyboard() {
    let keysbox = document.querySelector('.keyboard_key');
    let list = document.createElement('ul');
    list.classList.add('key_list');

    for (let i = 0; i < start.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = start[i];
        item.classList.add('key_btn');
        list.appendChild(item);
    }
    for (let i = 0; i < middle.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = middle[i];
        item.classList.add('key_btn');
        list.appendChild(item);
    }

    keysbox.appendChild(list);

}

let content_field = document.querySelector('.input_block_in');
createkeyboard();
let content_backup = '';
let content_backup_syllable = '';

window.onload = function () {
    let btns = document.querySelectorAll('.key_btn');
    btns.forEach(element => {
        //     console.log(element);
        element.onclick = function () {
            content_field.value += element.innerHTML;
            change_input(element.innerHTML)
        }
    });
}

function change_input(elem) {
    content_backup += elem;
    content_backup_syllable = content_backup;
    console.log(content_backup)
}

function reolacement(){
    
}