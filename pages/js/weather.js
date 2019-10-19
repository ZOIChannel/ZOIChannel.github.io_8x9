/**
 * 天気予報情報を外部から取得
 * 
 * ＜非同期通信の歴史＞
 * XMLHttpRequest: 昔の非同期通信API。XMLを使っていこう！って考えが全盛だった時代のもの。コールバック地獄が発生する問題。
 * fetch: XMLThhpRequestに変わる新しい非同期通信API。コールバック地獄が発生しないように下記のpromiseで処理できる。
 * promise, then, catch: コールバック地獄を解消・・・と思いきや、ちょっとはマシになったけど、やっぱりプロミス地獄が発生する問題が・・・
 * async/await: プロミス地獄が発生しないようにプログラムをかける新しい書き方。Javaのtry-catchの文法っぽくかける。内部的にはpromise。
 * 
 * この関数は async/await で書いてます。この書き方がイマドキのやりかたです。
 * ですが、ネットの情報や書籍によっては、古いやり方で乗っていることも多いですので、上記の歴史と言葉は覚えておいてください。
 */
async function fetchWeather() {

    // 天気予報WebAPIをコールして、JSONを取得
    // http://weather.livedoor.com/weather_hacks/webservice

    // ですが、自PC（127.0.0.1）からのアクセスはセキュリティの制限のため、
    // テスト用に
    //  http://weather.livedoor.com/forecast/webservice/json/v1?city=280010
    // の結果jsonを、保存したものを取得するカタチにしています。

    try {
        // let cityId = "280010"
        // let url = `http://weather.livedoor.com/forecast/webservice/json/v1?city=${cityId}`
        let url = "/pages/js/weather.json"

        const response = await fetch(url, {
            method: 'GET'
        })

        if (response.ok) {
            // APIコール正常時の処理
            const data = await response.json()
            console.log(data) // ← ブラウザの開発ツール > Console に表示されます。JSONの構造を確認してください。
            showWeather(data)
        } else {
            // ４xx,5xxの時は、例外を発生させてエラー処理をする
            throw new Error('Network response was not ok.');
        }
    } catch (e) {
        // APIコール失敗時の処理
        console.log(e.message)
        showWeatherError(e)
    }
}

function showWeatherError(e) {
    let output = document.getElementById('output')

    // 初期化するならば、内容を空にする
    output.innerHTML = ""

    let message = document.createElement('p')
    message.className = "error"
    message.innerHTML = e.message
    output.appendChild(message)
}

function showWeather(data) {

    // --------------------------------------------------
    // テンプレートリテラル
    // --------------------------------------------------
    // メリット：HTMLデザイン通りに再現しやすい。表示のみのコンテンツだったら、こちらが良い。多くのフレームワークでも「テンプレート」で実装することが多い。
    // デメリット：この一連の処理の中で、JavaScriptのエレメントとして、即座に参照できない。一度、描画を待たないといけない。
    // --------------------------------------------------

    // 天気タイトル
    let weather_title = document.getElementById('weather_title')
    weather_title.innerHTML = `
    <h1>${data.title}</h1>
    <p>${data.publicTime}</p>
    `

    // 天気予報
    let weather_forecasts = document.getElementById('weather_forecasts')
    weather_forecasts.innerHTML = ``
    for (let i = 0; i < data.forecasts.length; i++) {
        let item = data.forecasts[i]
        switch (item.image.url) {
            case "http://weather.livedoor.com/img/icon/1.gif":
                item.image.url = "weather/img/1.png"
                break;
            case "http://weather.livedoor.com/img/icon/2.gif":
                item.image.url = "weather/img/2.png"
                break;
            case "http://weather.livedoor.com/img/icon/3.gif":
                item.image.url = "weather/img/3.png"
                break;
            case "http://weather.livedoor.com/img/icon/4.gif":
                item.image.url = "weather/img/4.png"
                break;
            case "http://weather.livedoor.com/img/icon/5.gif":
                item.image.url = "weather/img/5.png"
                break;
            case "http://weather.livedoor.com/img/icon/6.gif":
                item.image.url = "weather/img/6.png"
                break;
            case "http://weather.livedoor.com/img/icon/7.gif":
                item.image.url = "weather/img/7.png"
                break;
            case "http://weather.livedoor.com/img/icon/8.gif":
                item.image.url = "weather/img/8.png"
                break;
            case "http://weather.livedoor.com/img/icon/9.gif":
                item.image.url = "weather/img/9.png"
                break;
            case "http://weather.livedoor.com/img/icon/10.gif":
                item.image.url = "weather/img/10.png"
                break;
            case "http://weather.livedoor.com/img/icon/11.gif":
                item.image.url = "weather/img/11.png"
                break;
            case "http://weather.livedoor.com/img/icon/12.gif":
                item.image.url = "weather/img/12.png"
                break;
            case "http://weather.livedoor.com/img/icon/13.gif":
                item.image.url = "weather/img/13.png"
                break;
            case "http://weather.livedoor.com/img/icon/14.gif":
                item.image.url = "weather/img/14.png"
                break;
            case "http://weather.livedoor.com/img/icon/15.gif":
                item.image.url = "weather/img/15.png"
                break;
            case "http://weather.livedoor.com/img/icon/16.gif":
                item.image.url = "weather/img/16.png"
                break;
            case "http://weather.livedoor.com/img/icon/17.gif":
                item.image.url = "weather/img/17.png"
                break;
            case "http://weather.livedoor.com/img/icon/18.gif":
                item.image.url = "weather/img/18.png"
                break;
            case "http://weather.livedoor.com/img/icon/19.gif":
                item.image.url = "weather/img/19.png"
                break;
            case "http://weather.livedoor.com/img/icon/20.gif":
                item.image.url = "weather/img/20.png"
                break;
            case "http://weather.livedoor.com/img/icon/21.gif":
                item.image.url = "weather/img/21.png"
                break;
            case "http://weather.livedoor.com/img/icon/22.gif":
                item.image.url = "weather/img/22.png"
                break;
            case "http://weather.livedoor.com/img/icon/23.gif":
                item.image.url = "weather/img/23.png"
                break;
            case "http://weather.livedoor.com/img/icon/24.gif":
                item.image.url = "weather/img/24.png"
                break;
            case "http://weather.livedoor.com/img/icon/25.gif":
                item.image.url = "weather/img/25.png"
                break;
            case "http://weather.livedoor.com/img/icon/26.gif":
                item.image.url = "weather/img/26.png"
                break;
            case "http://weather.livedoor.com/img/icon/27.gif":
                item.image.url = "weather/img/27.png"
                break;
            case "http://weather.livedoor.com/img/icon/28.gif":
                item.image.url = "weather/img/28.png"
                break;
            case "http://weather.livedoor.com/img/icon/29.gif":
                item.image.url = "weather/img/29.png"
                break;
            case "http://weather.livedoor.com/img/icon/30.gif":
                item.image.url = "weather/img/30.png"
                break;
        }
        weather_forecasts.innerHTML += `
        <div class="card" style="width: 18rem; margin: 25px;">
            <img src="${item.image.url}" class="card-img-top sharpimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.dateLabel}(${item.date})<br>の天気</h5>
                <p class="card-text">${item.telop}</p>
            </div>
        </div>
        `
    }

    // ピンポイント天気リンク
    let weather_pinpointLocations = document.getElementById('weather_pinpointLocations')
    let a = ""
    let item2 = data.pinpointLocations
    for (let i = 0; i < item2.length; i++) {
        a += `
        <tr>
            <td>${item2[i].name}</td>
            <td><a href="${item2[i].link}" target="_black">リンク</a></td>
        </tr>
        `
    }
    weather_pinpointLocations.innerHTML = a

    // 天気フッター
    let weather_footer = document.getElementById('weather_footer')
    weather_footer.innerHTML = `
    Weather Data by <span>${data.copyright.title}</span>
    `
}