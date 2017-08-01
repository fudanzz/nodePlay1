var file=require("fs");

function copy(src, dst){
    file.createReadStream(src).pipe(file.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));