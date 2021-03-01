
const chalk = require('chalk')
const fs = require('fs')
// const getnotes= () => {
//     return 'my notes..'
// }

const addnotes = (title, body)=>{
    const notes = loadnotes()
    //const duplicates = notes.filter((note)=> note.title === title)  // filter = array return
    const duplicate = notes.find((note)=> note.title === title)  // find only perticular item return
    // const duplicates = notes.filter(function (note) {
    //     return note.title === title
    // })

    debugger

    if (!duplicate) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green('New note added'))
        savenotes(notes)
    }
    else {
        console.log(chalk.red('Note title taken!!'))
    }


}

const removenote =  (title)=> {
    notes = loadnotes()
    const rem = notes.filter((note) => note.title != title)
    // const rem = notes.filter(function(note){
    //     return note.title != title
    // })
    if(rem.length < notes.length ){
        console.log(chalk.green('note removed'))
        savenotes(rem)
    }else{
        console.log(chalk.red('note not found'))
    }

    

}

const savenotes = (note)=>{
    const dt = JSON.stringify(note)
    fs.writeFileSync('notes.json', dt)
    
}

const loadnotes= ()=> {
    try {
        const data = fs.readFileSync('notes.json')
        const datajson = data.toString()
        return JSON.parse(datajson)
    }
    catch (e) {
        return []
    }
}

const readnote = (title)=>{
    notes = loadnotes()
    const rd = notes.find((note)=> note.title === title)
    if(rd){
        console.log(chalk.green.inverse(title))
        console.log(rd.body)
    }
    else{
        console.log(chalk.red.inverse("Note Not Found!"))
    }

}

const listnotes=()=>{
    notes = loadnotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note) =>console.log(note.title) )
   
    
}

module.exports = {
    //getnotes: getnotes,
    addnotes: addnotes,
    removenote : removenote,
    listnotes:listnotes,
    readnote : readnote
}