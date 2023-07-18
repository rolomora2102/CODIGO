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

const monthDropdownUntil = document.getElementById('monthUntil__select');
const dayDropdownUntil = document.getElementById('dayUntil__select');

for (const month in monthsDict) {
    const option = document.createElement('option');
    option.value = month;
    option.text = month;
    monthDropdownUntil.appendChild(option);
  }

monthDropdownUntil.addEventListener('change', function(event) {
    const selectedMonth = event.target.value;
    generateDaysOptions(selectedMonth);
    dayDropdownUntil.disabled = false;
});

function generateDaysOptions(selectedMonth) {
    dayDropdownUntil.innerHTML = ''; // Limpiar las opciones actuales
    let daysList=[];

    for (let i=1;i<=monthsDict[selectedMonth];i++){
        daysList.push(i);
    }

    for (const day of daysList) {
      const option = document.createElement('option');
      option.value = day;
      option.text = day;
      dayDropdownUntil.appendChild(option);
    }
  }
