const button = document.querySelector("button");
button.addEventListener('click',()=>{changeElement('body','backgroundColor','#004a7f')});

function changeElement(selector,property,value){
    let change = `document.querySelector("${selector}").style.${property} = "${value}";`
    /* return document.querySelector(selector).style.property = value; */
    console.log(selector)
    console.log(property)
    console.log(value)
    console.log(change)
    return change
}