import _ from 'lodash';

// returns the items to display on a certain page
export function paginate(items, currPage, numSplice) {
    const startIndex = (currPage - 1) * numSplice;

    return _(items).slice(startIndex).take(numSplice).value();


    // _(items) - creates a lodash wrapper object so that we can chain all the lodash objects
// slice - like siubstring from index
// take - take the number of elements from the start index
// value() - converts the lodash wrapper back into a regular array

}