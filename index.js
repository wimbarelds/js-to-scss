function valToScssValue(val) {
    let type = typeof val;
    if (type === 'object') {
        if (val === null) throw '[JS-TO-SCSS Error] value NULL unsupported';
        if (val instanceof Array) {
            const scssValues = val.map((v) => valToScssValue(v));
            return `( ${scssValues.join(' , ')} )`;
        }
        return objToScssMap(val);
    }
    return `${val}`;
}

function objToScssMap(obj) {
    let keys = Object.keys(obj);
    let scssLines = keys.map((key) => {
        let val = valToScssValue(obj[key]);
        return `  ${key}: ${val}`;
    });
    return `(\n${scssLines.join(',\n')}\n)`;
}

function jsToScss(obj) {
    const keys = Object.keys(obj);
    const scssVariableLines = keys.map((key) => {
        const scssValue = valToScssValue(obj[key]);
        return `$${key}: ${scssValue};`;
    });
    return scssVariableLines.join('\n');
}

module.exports = jsToScss;
