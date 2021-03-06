"use strict";
// ジェネリクスとは---------------------------------------------
// <T>で受け取った型は、それ移行Tをどの場所でも使用できる
// function copy<T>(value: T): T {
//   let user: T;
//   return value;
// }
// console.log(copy<string>('hello'))
// U はKのオブジェクトのプロパティ名一覧になる
function copy(value, key) {
    value[key];
    return value;
}
// console.log(copy({ name: 'Quill', age: 32 },'name'))
// classに対してジェネリクスを使用する----------------------------
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var lightDatabase = new LightDatabase();
lightDatabase.add('panda');
lightDatabase.add('cat');
lightDatabase.add('dog');
console.log(lightDatabase.get());
// 型パラメータを使用する例
// ①Promise
// const fetchData: Promise<string> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 3000);
// })
// fetchData.then(data => {
//   // string型を認識している
//   data.toUpperCase();
// })
// ②配列
var animals = ['dog', 'cat', 'bird'];
var responseData;
var hoge = {
    tomato: 'tomato',
    pumpkin: 'pumpkin'
};
var dct;
