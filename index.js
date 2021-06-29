function getNoteId() {
    let noteObject = getExistingNotes()
    if(!noteObject){
        return 1
    }
    const KeyArray = Object.keys(noteObject);
    const numberkeys = KeysArray.map((key) => Number (key))
    console.log (numberkeys);
    return Math. max(... numberkeys) + 1;
}

function getExistingNotes() {
    let notes = localStorage.getitem('notes')
    if(!notes){
        return null
    }
return JSON.parse(notes);


}