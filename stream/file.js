var file=require("fs");

function copy(src, dst){
    file.writeFileSync(dst,file.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));