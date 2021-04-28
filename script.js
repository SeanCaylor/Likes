var counts = [0, 0, 0];

function initialize(){
    for(let i = 0; i < counts.length; i++){
        let init = document.getElementById("likeCount" + (i+1));
        console.log(counts)
        init.innerHTML = counts[i];
    }
} 
function addALike(number){
    counts[number - 1]++
    var update = document.getElementById("likeCount" + number);
    update.innerHTML = counts[number - 1]
    console.log(counts)
}

initialize();