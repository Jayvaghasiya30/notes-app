// const fs = require('fs')

// fs.writeFileSync('notes.txt','first file by node.js\n')

// fs.appendFileSync('notes.txt','My name is JAy!')

const notes = require("./notes.js")
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { demandCommand } = require("yargs")



// const note = notes()
// console.log(note)
// console.log(chalk.green.bgBlue.bold('Success!..'))
// console.log(validator.isEmail('j@gmail.com'))

// console.log(process.argv)


yargs.command({
    command: 'add',
    describe: ' Add a note',
    builder : {
        title: {
            describe : "NOte Title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note Body",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addnotes(argv.title,argv.body)
    }
    // handler: function(argv){
    //     notes.addnotes(argv.title,argv.body)
    // }
})

yargs.command({
    command: 'remove',
    describe: ' remove a note',
    builder : {
        title : {
            describe : "title to remove note",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       notes.removenote(argv.title  )
    }
})

yargs.command({
    command: 'list',
    describe: ' list a note',
    handler(){
        notes.listnotes()
    }
})

yargs.command({
    command: 'read',
    describe: ' read a note',
    builder: {
        title : {
            describe : "title to read note",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readnote(argv.title)
    }
})
//console.log(yargs.argv)

yargs.parse();