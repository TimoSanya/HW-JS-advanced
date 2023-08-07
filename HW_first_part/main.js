const input = document.getElementById('input');
const addItem = document.getElementById("addItem");
const todolist = document.getElementById('todoList');
addItem.onclick = addNewText;


function addNewText(){
    const text = input.value.trim();
    if(text) {
        const div = document.createElement('div');
        div.append(document.createTextNode(text));
        div.style.margin = '4px 8px'
        const button = document.createElement('button')
        button.style.margin = "0 8px"
        const buttonText = document.createTextNode('X');
        button.onclick = () => {
            todolist.removeChild(div)
        }
        button.append(buttonText);
        div.append(button)
        todolist.append(div);
    }
    input.value = '';

}
