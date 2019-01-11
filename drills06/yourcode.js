

function removeClassFromElement(target, className){
    const element = document.querySelector(target);
    if (element){
        element.classList.remove(className);
    }
}

function toggleClassOnElement(target, className){
    const element = document.querySelector(target);
    if (element){
        element.classList.toggle(className);
    }
}

function hideElements( target, action ){
    const element = document.querySelector(target);
	const perform = {
        hide: () => {
            element.style.display = 'none';
        },
        removeChildren: () => {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        },
        removeSelf: () => {
            const targetParent = element.parentElement;
            targetParent.removeChild(element);
        }
    };
    if(element && perform[action]){
        perform[action]();
    }
}

function addAttributeToElement( target, key, value ){
    const element = document.querySelector(target);
    if(element){
        element[key] = value;
    }
}

function putPosInElement( target ){
    const element = document.querySelector(target);
    const posDetails = element.getBoundingClientRect();
    element.innerText = `x: ${posDetails.x}px\ny: ${posDetails.y}px`;
    return {
        x:posDetails.x,
        y:posDetails.y
    };
}


