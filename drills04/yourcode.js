function changeElements(className){
    const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    const elements = document.querySelectorAll(className);
    for(let index = 0; index < elements.length; index++){
        //map doesn't work because we are not dealing with an array
        let elementText = elements[index].innerText;
        if(numbers[elementText]){
            elements[index].innerText = numbers[elementText];
        }
    }
    /* jQuery version
    $(className).each((index, element) => {
        let elementText = $(element).text().toLowerCase();
        if(numbers[elementText]){
            $(element).text(numbers[elementText]);
        }
    });
    */
}

function appendTextToElement(selector, text){
    const elements = document.querySelectorAll(selector);
    for(let index = 0; index < elements.length; index++){
        elements[index].innerText += text;
    }
}

function addClass(selector, className){
    const elements = document.querySelectorAll(selector);
    for(let index = 0; index < elements.length; index++){
        elements[index].className += ' ' + className;
    }
    return elements.length;
}

function removeElements(selector){
    const elements = document.querySelectorAll(selector);
    for(let index = 0; index < elements.length; index++){
        let parent = elements[index].parentNode;
        parent.removeChild(elements[index]);
    }
    //return elements.length;
}