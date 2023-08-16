
let saveEl=document.getElementById("save-el")
let count=0;
console.log(saveEl)
function increment()
{
    count=count+1
    document.getElementById("countNo").textContent=count
}
function save()
{
    let countstr=count+" - "
    saveEl.textContent+=countstr
    console.log(count)
    document.getElementById("countNo").textContent=0
    count=0
}