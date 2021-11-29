const ui = {
  confirm: async (message) => createConfirm(message)
}

const createConfirm = (message) => {
  return new Promise((complete, failed)=>{
    $('#confirmMessage').text(message)

    $('#confirmYes').off('click');
    $('#confirmNo').off('click');
    
    $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
    $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
    
    $('.confirm').show();
  });
}

function change(answer) // no ';' here
{
    var el = document.getElementById("description");
    var ans = answer ? "Yes" : "Cancel";
    el.innerHTML = "You just clicked " + '"' + ans + '"';
}

const save = async () => {
  const confirm = await ui.confirm('Are you sure you want to continue?');
  
  if(confirm){
    change(true);
  } else{
    change(false);
  }
}