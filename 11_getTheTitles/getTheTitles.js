const getTheTitles = function(bookList) {
    let bookTitleList = [];
    for(let i = 0; i < bookList.length; i++){
        bookTitleList.push(bookList[i].title);
    }
    return bookTitleList;
};
// Do not edit below this line
module.exports = getTheTitles;
