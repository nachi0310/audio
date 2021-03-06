const fs = require('fs');

const DIST_LIB_PATH = 'dist/audio/';
const README_PATH = 'README.md';
const ENVELOPE_PATH = 'envelope.png';
const POLYFILL = 'polyfill.js';
const POLYFILL_PATH = 'projects/audio/src/' + POLYFILL;
const PATH_TO_README = DIST_LIB_PATH + README_PATH;
const PATH_TO_POLYFILL = DIST_LIB_PATH + POLYFILL;
const PATH_TO_ENVELOPE = DIST_LIB_PATH + ENVELOPE_PATH;

copyExtraFiles();

function copyExtraFiles() {
    if (
        !fs.existsSync(README_PATH) ||
        !fs.existsSync(POLYFILL_PATH) ||
        !fs.existsSync(ENVELOPE_PATH)
    ) {
        throw new Error('Requested files do not exit');
    } else {
        copyReadmeIntoDistFolder(README_PATH, PATH_TO_README);
        fs.copyFileSync(POLYFILL_PATH, PATH_TO_POLYFILL);
        fs.copyFileSync(ENVELOPE_PATH, PATH_TO_ENVELOPE);
    }
}

function copyReadmeIntoDistFolder(srcPath, toPath) {
    const fileBody = fs.readFileSync(srcPath).toString();
    const withoutLogos = fileBody
        .replace('![ng-web-apis logo](projects/demo/src/assets/logo.svg) ', '')
        .replace('<img src="projects/demo/src/assets/web-api.svg" align="top"> ', '');

    fs.writeFileSync(toPath, withoutLogos);
}
