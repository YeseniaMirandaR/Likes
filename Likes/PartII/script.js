
// Likes counter with array index 

var likes = [9, 12, 9];
var likesNum = [
    document.querySelector("#likesNum1"),
    document.querySelector("#likesNum2"),
    document.querySelector("#likesNum3")
];

function like(id) {
    likes[id]++;
    likesNum[id].innerHTML = likes[id] + " like(s)";
}