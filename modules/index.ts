import {defineNuxtModule, extendPages} from "@nuxt/kit";
import {resolve} from "node:dns";
import fs from "fs";
import path from "path";


function readFilesRecursivelyAndExportRouterLink(directoryPath, callback) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const fullPath = path.join(directoryPath, file);
        const stats = fs.lstatSync(fullPath);

        if (stats.isDirectory()) {
            readFilesRecursivelyAndExportRouterLink(fullPath, callback);
        } else {
            // If the file is not a directory, process the file
            // If file
            if (file === 'router.ts') {
                callback && callback(fullPath);
            }
        }
    });
}

export default defineNuxtModule({
    setup() {
        extendPages((pages) => {
            //list file in folder
            readFilesRecursivelyAndExportRouterLink(path.join(__dirname, 'pages'), function (fullPath) {
                const modules = require(fullPath);
                modules.forEach(module => {
                    pages.push(module);
                });
            });
        });
    }
})