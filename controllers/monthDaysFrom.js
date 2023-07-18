const monthsDict = {
    "Enero": 31,
    "Febrero": 28,
    "Marzo": 31,
    "Abril": 30,
    "Mayo": 31,
    "Junio": 30,
    "Julio": 31,
    "Agosto": 31,
    "Septiembre": 30,
    "Octubre": 31,
    "Noviembre": 30,
    "Diciembre": 31
}

const monthDropdownFrom = document.getElementById('monthFrom__select');
const dayDropdownFrom = document.getElementById('dayFrom__select');


for (const month in monthsDict) {
    const option = document.createElement('option');
    option.value = month;
    option.text = month;
    monthDropdownFrom.appendChild(option);
  }

monthDropdownFrom.addEventListener('change', function(event) {
    const selectedMonth = event.target.value;
    generateDaysOptions(selectedMonth);
    dayDropdownFrom.disabled = false;
});

function generateDaysOptions(selectedMonth) {
    dayDropdownFrom.innerHTML = ''; // Limpiar las opciones actuales
    let daysList=[];

    for (let i=1;i<=monthsDict[selectedMonth];i++){
        daysList.push(i);
    }

    for (const day of daysList) {
      const option = document.createElement('option');
      option.value = day;
      option.text = day;
      dayDropdownFrom.appendChild(option);
    }
  }


  