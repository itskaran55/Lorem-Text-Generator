let paraRange = document.getElementById('prange')

let findparaRange = document.getElementById('fprange')

let generateButton = document.getElementById('generateLorem');
let outputDiv = document.querySelector('.output');
let container = document.querySelector('.hero');

function updateValue()
{
    findparaRange.textContent = `ParaRange : ${paraRange.value}`;
}
updateValue()

// When we change the range value it will be a input event then we must be use addeventlistener

paraRange.addEventListener('input',updateValue);

generateButton.addEventListener('click',function(event){

    event.preventDefault()
    let paragraphs = parseInt(paraRange.value);

    generateLoremText(paragraphs)
});

function generateLoremText(paragraphs)
{
    loremText = ""
    for (let i = 0;i < paragraphs; i++)
    {
        loremText += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla aliquid molestias amet necessitatibus adipisci. Nemo dignissimos qui consequatur voluptates harum sint minus, at est, accusantium quos rerum provident tenetur!";

        loremText += "\n\n"
    }
    outputDiv.textContent = loremText

    adjustOutputSize()
}

function adjustOutputSize(){
    let contentHeight = outputDiv.scrollHeight;
    let containerHeight = container.clientHeight;

    //clientHeight:- represents the inner height of an element including padding but not including borders,margin and scrollbar

    //scrollHeight:- represents the total height of an element's content, including content not visible on the screen due to overflow.    

    if(contentHeight > containerHeight)
    {
        outputDiv.style.overflowY = "scroll"
    }
    else
    {
        outputDiv.style.overflowY = "hidden"
    }
}