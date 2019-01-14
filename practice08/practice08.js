function character_convert(string){
    let result = '';
    for(let char = 0; char < string.length; char++){
        result += string.charCodeAt(char);
    }
    return result;
}