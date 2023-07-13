document.addEventListener("DOMContentLoaded", function () {
    var bookedTickets =
      JSON.parse(localStorage.getItem("bookedTickets")) || {};
    var bookedTicketHtml = "";

    for (var key in bookedTickets) {
      var ticket = bookedTickets[key];
      for (var i = 0; i < ticket.count; i++) {
        bookedTicketHtml += `
          <tr>
            <td>${ticket.departureDestination}</td>
            <td>${ticket.company}</td>
            <td>${ticket.time}</td>
            <td>${ticket.price}</td>
          </tr>
        `;
      }
    }

    document.getElementById("booked").innerHTML = bookedTicketHtml;
  });

  function bookTicket(id) {
      alert("Successful booking, thank you, have a nice day!")
      window.location.href="index.html"
      var bookedTickets =
        JSON.parse(localStorage.getItem("bookedTickets")) || {};

      if (bookedTickets[id]) {
        bookedTickets[id].count++;
      } else {
        bookedTickets[id] = {
          count: 1,
          departureDestination: "",
          company: "",
          time: "",
          price: "",
        };

        switch (id) {
          case "A":
            bookedTickets[id].departureDestination = "KL-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "9:00-10:20";
            bookedTickets[id].price = "RM159";
            break;
          case "B":
            bookedTickets[id].departureDestination = "KL-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "10:15-11:45";
            bookedTickets[id].price = "RM199";
            break;
          case "C":
            bookedTickets[id].departureDestination = "KL-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "14:05-15:35";
            bookedTickets[id].price = "RM219";
            break;
          case "D":
            bookedTickets[id].departureDestination = "KL-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "16:35-18:05";
            bookedTickets[id].price = "RM189";
            break;
          case "E":
            bookedTickets[id].departureDestination = "KL-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "20:18-21:49";
            bookedTickets[id].price = "RM177";
            break;
          case "F":
            bookedTickets[id].departureDestination = "LGK-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "5:00-6:20";
            bookedTickets[id].price = "RM169";
            break;
          case "G":
            bookedTickets[id].departureDestination = "LGK-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "8:15-9:39";
            bookedTickets[id].price = "RM129";
            break;
          case "H":
            bookedTickets[id].departureDestination = "LGK-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "11:57-13:09";
            bookedTickets[id].price = "RM229";
            break;
          case "I":
            bookedTickets[id].departureDestination = "LGK-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "13:35-15:05";
            bookedTickets[id].price = "RM269";
            break;
          case "J":
            bookedTickets[id].departureDestination = "LGK-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "19:55-21:25";
            bookedTickets[id].price = "RM187";
            break;
          case "K":
            bookedTickets[id].departureDestination = "LGK-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "9:00-10:20";
            bookedTickets[id].price = "RM158";
            break;
          case "L":
            bookedTickets[id].departureDestination = "LGK-PEN";
            bookedTickets[id].company = "Malaysia airline";
            bookedTickets[id].time = "10:15-11:45";
            bookedTickets[id].price = "RM256";
            break;
          case "M":
            bookedTickets[id].departureDestination = "LGK-PEN";
            bookedTickets[id].company = "Malaysia airline";
            bookedTickets[id].time = "14:05-15:35";
            bookedTickets[id].price = "RM368";
            break;
          case "N":
            bookedTickets[id].departureDestination = "LGK-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "16:35-18:05";
            bookedTickets[id].price = "RM188";
            break;
          case "O":
            bookedTickets[id].departureDestination = "LGK-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "20:18-21:49";
            bookedTickets[id].price = "RM136";
            break;
          case "P":
            bookedTickets[id].departureDestination = "PEN-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "9:00-10:20";
            bookedTickets[id].price = "RM195";
            break;
          case "Q":
            bookedTickets[id].departureDestination = "PEN-LGK";
            bookedTickets[id].company = "Malaysia airlines";
            bookedTickets[id].time = "10:15-11:45";
            bookedTickets[id].price = "RM256";
            break;
          case "R":
            bookedTickets[id].departureDestination = "PEN-LGK";
            bookedTickets[id].company = "Malaysia airlines";
            bookedTickets[id].time = "12:50-14:20";
            bookedTickets[id].price = "RM269";
            break;
          case "S":
            bookedTickets[id].departureDestination = "PEN-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "16:35-18:05";
            bookedTickets[id].price = "RM198";
            break;
          case "T":
            bookedTickets[id].departureDestination = "PEN-LGK";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "20:18-21:49";
            bookedTickets[id].price = "RM156";
            break;
          case "U":
            bookedTickets[id].departureDestination = "PEN-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "9:00-10:20";
            bookedTickets[id].price = "RM188";
            break;
          case "V":
            bookedTickets[id].departureDestination = "PEN-KL";
            bookedTickets[id].company = "Malaysia airlines";
            bookedTickets[id].time = "10:15-11:45";
            bookedTickets[id].price = "RM369";
            break;
          case "W":
            bookedTickets[id].departureDestination = "PEN-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "14:05-15:35";
            bookedTickets[id].price = "RM333";
            break;
          case "X":
            bookedTickets[id].departureDestination = "PEN-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "16:35-18:05";
            bookedTickets[id].price = "RM233";
            break;
          case "Y":
            bookedTickets[id].departureDestination = "PEN-KL";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "20:18-21:49";
            bookedTickets[id].price = "RM159";
            break;
          case "Z":
            bookedTickets[id].departureDestination = "KL-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "9:00-10:20";
            bookedTickets[id].price = "RM156";
            break;
          case "AA":
            bookedTickets[id].departureDestination = "KL-PEN";
            bookedTickets[id].company = "Malaysia airlines";
            bookedTickets[id].time = "10:15-11:45";
            bookedTickets[id].price = "RM299";
            break;
          case "AB":
            bookedTickets[id].departureDestination = "KL-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "14:05-15:35";
            bookedTickets[id].price = "RM189";
            break;
          case "AC":
            bookedTickets[id].departureDestination = "KL-PEN";
            bookedTickets[id].company = "Malaysia airlines";
            bookedTickets[id].time = "16:35-18:05";
            bookedTickets[id].price = "RM309";
            break;
          case "AD":
            bookedTickets[id].departureDestination = "KL-PEN";
            bookedTickets[id].company = "AirAsia";
            bookedTickets[id].time = "20:18-21:49";
            bookedTickets[id].price = "RM156";
            break;
              
          default:
            return;
        }
      }
        
       
      localStorage.setItem("bookedTickets", JSON.stringify(bookedTickets));
      updateBookedTicket();
    } 

  

  function updateBookedTicket() {
    var bookedTickets =
      JSON.parse(localStorage.getItem("bookedTickets")) || {};
    var bookedTicketHtml = "";

    for (var key in bookedTickets) {
      var ticket = bookedTickets[key];
      for (var i = 0; i < ticket.count; i++) {
        bookedTicketHtml += `
          <tr>
            <td>${ticket.departureDestination}</td>
            <td>${ticket.company}</td>
            <td>${ticket.time}</td>
            <td>${ticket.price}</td>
          </tr>
        `;
      }
    }

    document.getElementById("booked").innerHTML = bookedTicketHtml;
  }
  





updateBookedTicket();
