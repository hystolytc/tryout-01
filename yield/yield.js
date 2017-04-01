let fs = require('fs')
let filePath =  '../../tesGit' //insert your file path here

fs.readdir(filePath, (err, files) => {

    for(let i=0; i < files.length; i++){
        let file = readFileDirectory(files[i])
        console.log(file.next().value)
    }
})

function* readFileDirectory(files){
        yield files
} 

