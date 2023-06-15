(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),  // creo un objeto para la fecha
        dd = String(today.getDate()).padStart(2, "0"),  // dia de hoy
        mm = String(today.getMonth() + 1).padStart(2, "0"),  // mes de hoy
        yyyy = today.getFullYear(),  //año
        nextYear = yyyy + 1,
        dayMonth = "07/20/",
        major = dayMonth + yyyy;    // dia del major
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > major) {
      major = dayMonth + nextYear;    // si ya paso el major, calculo el del siguiente año
    }

    const countDown = new Date(major).getTime(),   // creo una variable de tipo fecha, con mi fecha del major
        x = setInterval(function() {    
  
          const now = new Date().getTime(),  //fecha atual 
              distance = countDown - now;
          // actualizacion de los dias, hora, minutos y segudos
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());

    //CALENDARIO

const currentDate=document.querySelector(".current-date");
const daysTag = document.querySelector(".dia");
prevNextIcon = document.querySelectorAll(".icons span");

    // getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


// storing full name of all months in array
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];


const renderCalendar = () =>{
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // primer dia del mes
  lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // ultimo dia del mes
  lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
  lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // ultimo dia del mes anterior
  let liTag = "";

  //creo la lista de los ultimos dias del mes anterior
  for (let i = firstDayofMonth; i > 0; i--) {  
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`; //hago inactivos los ultimos dias del mes anterior
  }

  //creo la lista de los dias del mes
  for (let i = 1; i <= lastDateofMonth; i++) {  
    liTag+=`<li>${i}</li>`;
  }

  //creo la lista de los primeros dias del próximo mes
  for (let i = lastDayofMonth; i < 6; i++) { 
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
}

  currentDate.innerText=`${months[currMonth]} ${currYear}`;
  daysTag.innerHTML= liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => { 
  icon.addEventListener("click", () => { // le agrego el evento de clickear
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; // si toco el boton para atras vuelve al mes anterior, si no va al siguiente

      if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
          // creating a new date of current year & month and pass it as date value
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear(); // updating current year with new date year
          currMonth = date.getMonth(); // updating current month with new date month
      } else {
          date = new Date(); // pass the current date as date value
      }
      renderCalendar(); // llamo a la función para que se ejecuten los botones
  });
});