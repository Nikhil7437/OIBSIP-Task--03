
submit.addEventListener('click', (e) => {

  e.preventDefault()
  console.log(e)
  if (title.value ==='' || des.value==='') {

      message.innerHTML = `
      <div class="alert alert-danger" role="alert">
      Title and Description Both are the required.
    </div>
       `
     setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
    return;
   
  }
 
  let titlec = title.value;
  let desc = des.value

  localStorage.setItem(`todo-${titlec}`, [titlec, desc])



  lists.innerHTML += `
    <div class='items'>
      <h5 class="listtitle">${titlec} </h5>
      <p class="description">${desc}</p>
      <button id="done" class="btn btn-success btn-sm mt-2">Done</button>
      <button   id="remove" class="remove-btn btn btn-danger btn-sm">delete</button>
    
      
    </div>
  `;
  title.value = '';
  des.value = '';
})


document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('remove-btn')) {
    console.log(e.target.parentNode.textContent);
    let todoTitle = e.target.parentNode.querySelector('.listtitle').textContent;
    localStorage.removeItem(`todo-${todoTitle}`);
    e.target.parentNode.remove();
  }
 

  if (e.target && e.target.classList.contains('btn-success')) {
    e.target.parentNode.style.backgroundColor = 'rgba(130, 251, 211, 0.845)';
    e.target.remove();
  }
});


