const path = require("path")
console.log(path.sep)
console.log(process.env.PATH)
console.log(path.delimiter)
let join=path.format({
    base : "index/home",
    end: "page.html"
})
console.log(join)