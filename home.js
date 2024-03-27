let countram = document.getElementById("ram")
let nag = document.getElementById("saveg")
let abhi = document.getElementById("reset")

let count=0
function Increment(){
    count=count +1
    countram.innerText=count


}
function Decrement(){
    
        if (count > 0) {
            count -= 1;
            countram.innerText = count;
        }
    }
    

function reset() {
    count = 0;
    countram.textContent=count;
}
function save(){
    let entr= count + ","
    saveg.textContent += entr
    alert(" Saved Sucessfully:  " +countram.innerText)
    countram.textContent= 0
    count = 0
    

}