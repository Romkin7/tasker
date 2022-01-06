module.exports = class SortQuery {
    constructor(data) {
        this.createdAt = parseInt(data.createdAt) || -1;
        this.completed = parseInt(data.completed) || 1;
    }
};
