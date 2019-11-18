const hot = require('./cookbook-category-hot.json')
const list = require('./cookbook-list.json')
const detail = require('./cookbook-detail.json')
const category = require('./cookbook-category.json')
module.exports = function () {
    return {

        hot,
        list,
        detail,
        category
    }
}