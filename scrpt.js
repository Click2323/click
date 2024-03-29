click.addEventListener('click',() => {
    click.style.visibility = 'hidden'
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Խնդրումենք սպասել'
    content.appendChild(h2)
    for(let i = 1; i > 0; i++){
        console.log(i);
    }
})