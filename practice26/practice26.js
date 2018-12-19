const search_array = (haystack, needles) => {
    const found = [];
    needles.map(needle => {
        if(haystack.includes(needle)){
            found.push(needle);
        }
    });
    return found;
}