module.exports = function towelSort(matrix) {
    if (towelSort.arguments.length === 0) {
        return [];
    }
    let sortedArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            sortedArr = matrix[i].sort((a, b) => b - a);
        }
    }
    let result = matrix.flat();
    return result;
};
