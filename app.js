
// JavaScriptでプログラミングする際にデータの チェックなどで使用できる構文です。
// この基本構文の結果の確認も基本的にconsole.log()で行います。

//console.log('Hello');

console.log('セブ島'+'留学');

console.log('①5たす8=' + String (5+8));
console.log(4-2);
console.log(8*2);
console.log(6/3);


// 変数countryを作成して、文字列Japanを代入してください。

let country = 'Japan';
console.log(country);
country = 'Philippines';
console.log (country);

let schoolName = 'NexSeed';
console.log('私の所属先は、' + schoolName + 'です');
// 上記でも正しいのですが、テンプレートリテラルをを使用すると、以下のように簡潔に書く事ができます。

console.log(`私の所属先は、${schoolName}です`);

// 変数jobを作成して、文字列engineerを代入してください。
// テンプレートリテラルを使用して、私の仕事は、engineerですとconsoleに表示してください。

	// 変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
// 変数applicationsをconsoleに表示してください。
// 変数applicationsにInstagramを追加してください。
// 変数applicationsの中のInstagramをconsoleに表示してください。

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);
applications.push("instagram");
console.log(applications[3]);

// 変数capitalCitiesを作成して、連想配列{ Japan: 'Tokyo', Philippines: 'Manila' }を代入してください。
// 変数capitalCitiesをconsoleに表示してください。
// 変数capitalCitiesにAmerica: Washingtonを追加してください。
// 変数capitalCitiesの中のWashingtonをconsoleに表示してください。

let capitalCities = { Japan: 'Tokyo', Philippines: 'Manila' };
console.log(capitalCities);
capitalCities.America = 'Washington';
console.log(capitalCities.America);

// 宿題
// クラスのみんなの名簿を2次元配列で作ってきましょう
// 配列の中に、連想配列のかたちです
// リストの0番目の人の名前をconsoleで表示しましょう
// リストの3番めの人の出身地をconsoleで表示しましょう
// リストの4番目の人の趣味をconsoleで表示しましょう

let studentlist =[
  {name:'Rioさん',from:'Ginowan City',hobby:'バスケ'},
  {name:'Katsumiさん',from:'Miyakojima City',hobby:'ゲーム'},
  {name:'Gokiさん',from:'Uruma City',hobby:'サッカー'},
  {name:'Michiyoさん',from:'Kanagawa',hobby:'旅行'},
  {name:'Maikoさん',from:'',hobby:'旅行'},

];

 console.log(studentlist[0].name);
 console.log(studentlist[3].from);
 console.log(studentlist[4].hobby);

let weight = 116;

if (weight >= 200) {
  console.log('ヘビー級');
}else if(weight >= 115 && weight <=118){
  console.log('バンダム級');
}else{
  console.log('その他の階級');
}



let greeting = 'gskjh';

switch (greeting){
 case'おはよう':
  console.log('日本語')
  break;
 case 'good morning':
  console.log('英語');
  break;
 default:
 console.log('?');
  break;
}


for (let i = 1; i <= 10; i++){
  console.log('くりかえしますよ');
  console.log(i);
}


for (let i = 2; i <= 20; i++) {
  console.log(i);
}


// for文を使ってstudentlist2のname部分を、consoleに表示して下さい。
// ヒント：forで数が変わるiは、○番目の指定にも使えます。
let studentlist2 =[
  {name:'Rioさん',from:'Ginowan City',hobby:'バスケ'},
  {name:'Katsumiさん',from:'Miyakojima City',hobby:'ゲーム'},
  {name:'Gokiさん',from:'Uruma City',hobby:'サッカー'},
  {name:'Michiyoさん',from:'Kanagawa',hobby:'旅行'},
  {name:'Maikoさん',from:'',hobby:'旅行2'},
];

console.log(studentlist2 [0] .name);
console.log(studentlist2 [1] .name);
console.log(studentlist2 [2] .name);
console.log(studentlist2 [3] .name);
console.log(studentlist2 [4] .name);


for (let i = 0; i <=4;i++){
  console.log(studentlist2[i].name);
}

//1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 以下の条件にあうfor文を書いてください。

// 初期化式で変数iに1を代入する
// iが50以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する
// ただし、iが5の倍数でない場合は表示しない。

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0){ 
    console.log(i);
  }else{
    continue
  }
}

// ランダム変数でおみくじを作ってみよう
console.log("ランダム変数")
var random = Math.floor( Math.random() * 6 );

console.log( random );

let omikuji = [
"Rioさん",
"Kathumiさん",
"Gokiさん",
"Michiyoさん",
"Maikoさん",
"Ryuichi"
];

console.log(omikuji[random]);















