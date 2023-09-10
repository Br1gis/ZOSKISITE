

let admins = {
    'timo': 't1lvlfe1',
    'ilsh': 'lshfs3',
    'stepuf': 'zosk123razrab',
    'brigisusi': 'yabs0lute'
};


let pageht = ""

function get_name(){
    let name = document.getElementById("nameinput").value;
    alert("Привет, " + name)
    let elemka = document.getElementById("testelem")
    elemka.innerText = `Молодец, ${name}`
}


function get_login() {
    let login = document.getElementById("loginput").value;
    let password = document.getElementById("passwinput").value;
    if (admins.hasOwnProperty(login)) {
      console.log(admins[login]);
    }
    if (admins[login] === password) {
      let pageht = ''; // Initialize the pageht variable
      if (login === 'timo' || login === 'brigisusi') {
        pageht = "panel1.html";
      } else if (login === 'lsh') {
        pageht = "panel2.html";
      } else if (login === 'stepuf') {
        pageht = "panel.html";
      }
  
      // Store the pageht value in session storage
      sessionStorage.setItem('page', pageht);
      window.location.href = pageht;
    } else {
      alert("Неверные данные для входа!");
    }
  }  
    
    




function leave_back(){
    window.location.href = "index.html"
    console.log(window.location.href)
}


function leave_back_menu() {
    let page = sessionStorage.getItem('page');
    if (page) {
      window.location.href = page;
    } else {
      window.location.href = "index.html";
    }
  }

function clear_cmd(){
    let cons = document.getElementById('bebra')
    cons.innerHTML = ""
}


function redirect_member(){
    pageht = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    window.location.href = "memberscount.html"
    console.log(window.location.href)
}

window.addEventListener('DOMContentLoaded', function() {
  
  setTimeout(function() {
    var xhr = new XMLHttpRequest();
    

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var names = JSON.parse(xhr.responseText).names;
            displayNames(names);
        }
    };

    xhr.open('GET', 'data.json', true);
    xhr.send();
  }, 5000); // Здесь 2000 - это задержка в миллисекундах (2 секунды)
});

function displayNames(names) {
  var namesList = document.getElementById('names-list');

  names.forEach(function(name) {
      var li = document.createElement('li');
      li.textContent = name;
      namesList.appendChild(li);
  });
}