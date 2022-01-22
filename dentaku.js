let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")

function change(zenkaku) {
	let result = zenkaku;
  result = result.replace("×", "*");
  result = result.replace("÷", "/");
  return result;
}


function get_calc(btn) {
  if(btn.value === "=") {
        document.dentaku.display.value = eval(change(document.dentaku.display.value));
      } else if (btn.value === "C") {
        document.dentaku.display.value = "";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
      } else if (btn.value === "%") {
        document.dentaku.display.value = document.dentaku.display.value * 0.01;
      } else if (btn.value === "÷"){
        b1.disabled = true;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = true;
         if (document.dentaku.display.value.slice(-1) === "+"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"÷");
        } else if(document.dentaku.display.value.slice(-1) === "×"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"÷");
        } else if(document.dentaku.display.value.slice(-1) === "-"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"÷");
        } else if (btn.value === "÷"){
         document.dentaku.display.value += btn.value;
        }
      } else if (btn.value === "×"){
        b1.disabled = false;
        b2.disabled = true;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = true;
         if (document.dentaku.display.value.slice(-1) === "+"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"×");
        } else if(document.dentaku.display.value.slice(-1) === "-"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"×");
        } else if(document.dentaku.display.value.slice(-1) === "÷"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"×");
        } else if (btn.value === "×"){
         document.dentaku.display.value += btn.value;
        }
      } else if (btn.value === "-"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = true;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = true;
         if (document.dentaku.display.value.slice(-1) === "+"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"-");
        } else if(document.dentaku.display.value.slice(-1) === "×"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"-");
        } else if(document.dentaku.display.value.slice(-1) === "÷"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"-");
        } else if (btn.value === "-"){
         document.dentaku.display.value += btn.value;
        }
      }  else if (btn.value === "+"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = true;
        b5.disabled = false;
        b6.disabled = true;
         if (document.dentaku.display.value.slice(-1) === "-"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"+");
        } else if(document.dentaku.display.value.slice(-1) === "×"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"+");
        } else if(document.dentaku.display.value.slice(-1) === "÷"){
         document.dentaku.display.value = document.dentaku.display.value.replace(/.$/,"+");
        } else if (btn.value === "+"){
         document.dentaku.display.value += btn.value;
        }
      } else {
         document.dentaku.display.value += btn.value;
        if (btn.value === "1"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="2"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="3"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="4"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="5"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="6"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="7"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="8"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="9"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      } else if(btn.value ==="0"){
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
      }
      }
}

  // if (document.dentaku.display.value.slice(0.-1) === "+";){
  //     document.dentaku.display.value slice(0.-1) replace("+", "k");
  //   } 