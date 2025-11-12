let inpt = document.getElementById("txt");
      let msg = document.createElement("p");
      let list = document.querySelector("ul");
      let btn = document.getElementById("btn");
 btn.addEventListener("click", function () {
        if (inpt.value.trim()) {
          let li = document.createElement("li");
          li.textContent = inpt.value;
          inpt.value = "";
          list.appendChild(li);
        } else {
          document.body.appendChild(msg);
          msg.innerText = "Try Writing Somthing";
        }
      });
﻿
