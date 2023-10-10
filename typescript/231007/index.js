var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["user"] = 1] = "user";
    Auth[Auth["guest"] = 2] = "guest";
})(Auth || (Auth = {}));

var str = 'string!';
var num = 123;
var bool = true;
var obj = {
    name: 'ju',
    age: 22,
    sex: 'male'
};
var numArr1 = [1, 2, 3];
var numArr2 = [1, 2, 3];
var numstrArr1 = [num, str];
var numstrArr2 = [num, str, [str]];
var anyArr = [str, num, bool, obj, numArr1, numstrArr2, [obj]];
console.log(anyArr);
var tup = [str, num];
console.log(tup);
console.log(Auth.admin);
