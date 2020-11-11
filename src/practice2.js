const inject = (items, sections) => {
    const totalLength = items.length + sections.length;
    const resultArr = [];
    let itemsIndex = 0;
    
    for(let i = 0; i < totalLength; i++) {
        let sectionPosition = sections.findIndex(section => section.index === itemsIndex) ;

        if (sectionPosition !== -1) {
            resultArr.push(sections[sectionPosition].content);
            sections.splice(sectionPosition, 1);
        } else {
            resultArr.push(items[itemsIndex]);
            itemsIndex++;
        }
    }  
    return resultArr;
}

export { inject };
