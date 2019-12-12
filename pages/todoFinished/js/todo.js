function getTodoList()
{
    let todolist = localStorage.getItem('todolist')
    if (todolist == null) {
        console.log(`初回なので初期化しました`)
        todolist = []
    } else {
        todolist = JSON.parse(todolist)
    }

    return todolist;
}

function load()
{
    console.log(`#load`)

    let todolist = getTodoList()
    console.log(`#load`, todolist)

    // output data 
    let output = document.getElementById('output');
    output.innerHTML = '';
    for(let i = 0; i < todolist.length; i++)
    {
        const item = todolist[i]
        addItem(item)
    }
}

function save()
{
    console.log(`#save`)

    // current data
    let todolist = getTodoList()
    console.log(`#save current todolist `, todolist)   
    
    // input data 
    let todoValue = document.getElementById('todo').value;

    // add item
    let item =  {
        'id': new Date().toISOString(),
        'todo': todoValue
    }
    addItem(item)

    // save data
    todolist.push(item)
    localStorage.setItem('todolist', JSON.stringify(todolist))

}

function done(id)
{
    console.log(`#done id=${id}`)

    // delete
    let todolist = getTodoList()
    todolist = todolist.filter(item => item.id !== id)
    localStorage.setItem('todolist', JSON.stringify(todolist))

    // refresh
    load()
}

function addItem(item)
{
    let output = document.getElementById('output');
        output.innerHTML += 
`   <tr>
        <td class="text-right">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" onchange="done('${item.id}')">
        </td>
        <td>
            ${item.todo}
        </td>
    </tr>
`
}