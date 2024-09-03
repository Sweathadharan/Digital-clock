let html = "";
html += `<span id="hour">00  </span> 
<span id="min">00  </span> 
<span id="sec">00</span> 
`;
document.body.innerHTML = html;

let sec = 0;
let min = 0;
let hour = 0;

let s = document.getElementById('sec');
let m = document.getElementById('min');
let h = document.getElementById('hour');

setInterval(() => {
  sec++;
  s.textContent = ":"+sec.toString().padStart(2, '0');
  if (sec == 60) {
    min++;
    sec = 0;
    m.textContent = ":"+min.toString().padStart(2, '0');
  }
  if (min == 60) {
    hour++;
    min = 0;
    h.textContent = hour.toString().padStart(2, '0');
  }
}, 1000);