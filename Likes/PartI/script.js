
//Likes counter
var likesNum = 3;
var likesNumElement = document.querySelector("#likesNum");

console.log(countElement);

function likes(){
    likesNum++;
    likesNumElement.innerText = likesNum;
    console.log(likesNum);
}