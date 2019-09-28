let seizaData = [
    { name: "水瓶座", startDate: "0120" },
    { name: "魚座", startDate: "0219" },
    { name: "牡羊座", startDate: "0321" },
    { name: "牡牛座", startDate: "0420" },
    { name: "双子座", startDate: "0521" },
    { name: "蟹座", startDate: "0622" },
    { name: "獅子座", startDate: "0723" },
    { name: "乙女座", startDate: "0823" },
    { name: "天秤座", startDate: "0923" },
    { name: "蠍座", startDate: "1024" },
    { name: "射手座", startDate: "1123" },
    { name: "山羊座", startDate: "1222" },

    // ...
    // todo
    // ...
]

function execFortune() {
    // input
    let birthday = document.getElementById('birthday');
    console.log(birthday.value)

    let monthDate = getMonthDate(birthday.value)
    console.log(monthDate)

    let seiza = searchSeiza(monthDate)

    // output
    let output = document.getElementById('output');
    output.innerHTML = seiza.name
}

function getMonthDate(dateString) {
    let ret = "";

    ret = dateString.split('-');
    ret = ret[1] + ret[2];

    return ret;
}

function searchSeiza(monthDate) {
    let ret = { name: "dummy", startDate: "9999" }

    // debug
    console.log(seizaData);
    console.log(seizaData[0]);
    console.log(seizaData[0].name);
    console.log(seizaData[0].startDate);

    console.log("searchSeiza,monthDate:" + monthDate);

    if (monthDate < seizaData[0].startDate) {
        ret = seizaData[0];
        return ret;
    }

    // search
    for (let i = 0; i < seizaData.length; i++) {
        console.log(seizaData[i]);
        console.log(seizaData[i].startDate);

        // todo 条件判断して、
        // ret に seizaData[i] を入れる
        if (seizaData[i].startDate <= monthDate && monthDate < seizaData[i + 1].startDate) { //-----エラー出る 0914-----
            ret = seizaData[i];
        }
    }



    // ...
    // todo
    // for if 
    // ...

    return ret;
}