const workspace = document.querySelector('#workspace')
const contextmenu = document.querySelector('#contextmenu')
const newFile = document.querySelector('#contextmenu .new-file')
// console.log('here')
workspace.addEventListener('contextmenu', (event)=>{
    event.preventDefault()
    const xPos = event.pageX
    const yPos = event.pageY
    contextmenu.style.display = `flex`
    contextmenu.style.left = `${xPos}px`
    contextmenu.style.top = `${yPos}px`
})
workspace.addEventListener('click', (event)=>{
    event.preventDefault()
    contextmenu.style.display = `none`
})
newFile.addEventListener('click', createFolder)
function createFolder(){
    const folder = document.createElement('div')
    folder.textContent = 'ახალი საქაღალდე'
    folder.setAttribute('class', 'folder')
    workspace.appendChild(folder)
}