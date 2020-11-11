const parseData = (input) => {
    const dataArr = [];
    const {data, column} = input;
    data.forEach(info => {
        const obj = {};
        for(let colIndex = 0 ; colIndex < column.length; colIndex++ ) {
            obj[column[colIndex].name] = info[colIndex]
        }
        dataArr.push(obj);
    });
    return dataArr;
}
export { parseData };
