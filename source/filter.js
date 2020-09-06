'use strict';

const SYMBOL_CODE = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
};

function filter(input, tagsArray) {
    if (typeof input !== 'string') {
        alert("Type of input should be string.");
        return null;
    }

    input = input.replace(/<[^<>]+>|[&"']/g, (match) => {
        let currentTag = match.replace(/[<>/]/g, '');
        if (!tagsArray.includes(currentTag)) {
            match = match.replace(/<|[&"']|>/g, (match) => SYMBOL_CODE[match]);
        }
        return match;
    }).replace(/<(?![^<]*>)/g, '&lt;');
    return input;
}
