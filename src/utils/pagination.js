module.exports = class Pagination {
    constructor(data, totalCount) {
        this.currentPage = data && data.page ? parseInt(data.page) : 1;
        this.perPage = parseInt(data.perPage) || 28;
        this.totalCount = totalCount;
        this.totalPages = Math.ceil(totalCount / this.perPage);
        this.first = 1;
        this.last = this.totalPages;

        this.visiblePages = this.setVisiblePages(
            this.currentPage,
            this.totalPages,
        );
    }
    setVisiblePages(current, total) {
        let visible_pages = [];
        // If we have less that 6 pages, then return just all pages
        if (total < 6) {
            for (let i = 1; i <= total; i++) {
                visible_pages.push(i);
            }
            return visible_pages;
        }
        // If we are on page 1, return the first 6 pages
        if (current === 1) return [1, 2, 3, 4, 5, 6];
        // If we are on the last 5 pages
        if (current + 5 > total) {
            let a = total;
            for (let i = 0; i < 6; i++) visible_pages.push(a--);
            return visible_pages.reverse();
        }
        // In this case we need to show the current, the one before it and 4 after it
        let a = current;
        visible_pages.push(a - 1);
        visible_pages.push(a);
        for (let i = 0; i < 4; i++) visible_pages.push(++a);
        return visible_pages;
    }
};
