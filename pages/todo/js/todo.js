function getTodoList() {
    let todolist = localStorage.getItem('todolist')
    if (todolist == null) {
        console.log(`初回なので初期化しました`)
        todolist = []
    } else {
        todolist = JSON.parse(todolist)
    }

    return todolist;
}

function load() {
    console.log(`#load`)

    let todolist = getTodoList()
    console.log(`#load`, todolist)

    // ここにoutputに一覧表示
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const item = todolist[i]
        output.innerHTML += `
            <tr>
                <td class="text-right">
                    <input type="checkbox" class="form-check-input" id="${item.id}" onchange="done('${item.id}')">
                </td>
                <td>
                    ${item.todo}
                </td>
            </tr>
        `
    }
}

function save() {
    console.log(`#save`)

    // current data
    let todolist = getTodoList()
    console.log(`#save current todolist `, todolist)

    // input date
    const todoValue = document.getElementById('todo').value
    console.log(`#save todoValue=${todoValue}`)

    // add data
    let item = {
        'id': new Date().toISOString(),
        'todo': todoValue
    }

    // ここにoutputにつけたす
    let output = document.getElementById('output');
    output.innerHTML += `
        <tr>
            <td class="text-right">
                <input type="checkbox" class="form-check-input" id="${item.id}" onchange="done('${item.id}')">
            </td>
            <td>
                ${item.todo}
            </td>
        </tr>
        `

    // save data
    todolist.push(item)
    localStorage.setItem('todolist', JSON.stringify(todolist))
}

function done(id) {
    console.log(`#done id=${id}`)

    //delete
    let todolist = getTodoList()
    todolist = todolist.filter(item => item.id !== id)
    localStorage.setItem('todolist', JSON.stringify(todolist))
    
    //refresh
    load()
}
