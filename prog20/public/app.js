function showName(name){
    const root = document.createElement('div')
    const text = document.createElement('h2')
    text.innerHTML = name + ' hej!'
    root.appendChild(text)
    document.body.appendChild(root)
}
         
showName('alexander')