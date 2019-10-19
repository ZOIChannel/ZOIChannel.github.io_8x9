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
}

function save()
{
    console.log(`#save`)

    // current data
    let todolist = getTodoList()
    console.log(`#save current todolist `, todolist)    

    // add data
    todolist.push({
        'id': 'IDどうやって作る！？',
        'todo': 'ここに！保存！するッッッッ！'
    })
    localStorage.setItem('todolist', JSON.stringify(todolist))
}

function done(id)
{
    console.log(`#done id=${id}`)
}