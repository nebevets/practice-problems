function akemayStrIgpayAtinLay(string){
    let esultray = '';
    let ay = 'ay';
    const lookUpValue = {
        a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'
    }
    let original = string;
    string = string.toLowerCase();
    
    for(let i = 0; i < string.length; i++){
       if (lookUpValue[string[i]]){
           esultray = original.substr(i) + original.substr(0, i) + ay;
           break;
       }
    }
    return esultray;
}