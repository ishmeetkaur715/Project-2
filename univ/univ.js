$(function(){
    $('#login-show').click(function(){
        $('#login-modal').fadeIn().css("display","flex");
    });

    $('.close-modal').click(function(){
        $('#login-modal').fadeOut();
    });
})

function WriteCookie() {
    // if (document.myform.username.value == "" || document.myform.year.value == "") {
    //     alert("Please enter value");
    //     return;
    // }
    let name_cookie = escape(document.myform.username.value) + ";";
    document.cookie = "name=" + name_cookie;

    let year_cookie = escape(document.myform.year.value) + ";";
    document.cookie = "year=" + year_cookie;
      

    var roll= document.getElementById("roll");
    localStorage.setItem("roll", roll.value);
    // document.write("Setting Cookies : " 
    //     + "name=" + cookievalue);
}


let count1 = document.getElementById("onee");

let upto = 0;
const id = setInterval(frame, 1);
function frame() 
{
    if (upto == 1000) 
    {
        clearInterval(id);
    } 
    else 
    {
        upto++; 
        count1.innerHTML = upto; 
    }
}

let count2 = document.getElementById("twoo")
let upto2 = 0;
const id2 = setInterval(frame2, 50);
function frame2() 
{
    if (upto2 == 50) 
    {
        clearInterval(id2);
    } 
    else 
    {
        upto2++; 
        count2.innerHTML = upto2; 
    }
}

let count3 = document.getElementById("threee")
let upto3 = 0;
const id3 = setInterval(frame3, 60);
function frame3() 
{
    if (upto3 == 40) 
    {
        clearInterval(id3);
    } 
    else 
    {
        upto3++; 
        count3.innerHTML = upto3; 
    }
}

function validateForm(){
    let phone = document.forms["form"]["contact_no"].value;
    let x = phone.length;

    if(x!=10){
        alert("Enter a valid phone number");
        false;
    }
}


const reviews = [
    {
      id: 1,
      name: "ram",
      job: "web developer",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 2,
      name: "anees",
      job: "web designer",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 3,
      name: "james",
      job: "intern",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 4,
      name: "san",
      job: "the boss",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    }
  ];
  
//   const img = document.getElementById("person-img");
  const author = document.getElementById("author");
//   const job = document.getElementById("job");
  const info = document.getElementById("info");

  const stars = document.getElementById("stars");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    // img.src = item.img;
    author.textContent = item.name;
    // job.textContent = item.job;
    info.textContent = item.text;
    stars.textContent = item.stars;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    //img.src = item.img;
    author.textContent = item.name;
    //job.textContent = item.job;
    info.textContent = item.text;
    stars.textContent = item.stars;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });



// const accordion = document.querySelectorAll(".faq");


// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }

        var content = document.getElementsByClassName('content');
        var ques = document.getElementsByClassName('question');
        for (i = 0; i < ques.length; i++) {
            ques[i].addEventListener('click', toggleItem, false);
        }
        function toggleItem() {
            var itemClass = this.parentNode.className;
            for (i = 0; i < content.length; i++) {
                content[i].className = 'content close';
            }
            if (itemClass == 'content close') {
                this.parentNode.className = 'content open';
            }
        }
  
  
