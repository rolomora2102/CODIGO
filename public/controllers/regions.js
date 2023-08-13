import { provinceDict } from './provinceDict.js';
import { cantonDict } from './cantonDict.js';
import { districtDict } from './districtDict.js';

// Obtener elementos del DOM para los dropdowns de selección
const provinceDropdown = document.getElementById('province-dropdown');
const cantonDropdown = document.getElementById('canton-dropdown');
const districtDropdown = document.getElementById('district-dropdown');

// Generar opciones del dropdown de provincias
for (const province in provinceDict) {
  const option = document.createElement('option');
  option.value = province;
  option.text = province;
  provinceDropdown.appendChild(option);
}

// Función para generar opciones del dropdown de cantones
function generateCantonOptions(selectedProvince) {
  cantonDropdown.innerHTML = ''; // Limpiar las opciones actuales

  const cantons = cantonDict[selectedProvince];
  for (const canton of cantons) {
    const option = document.createElement('option');
    option.value = canton;
    option.text = canton;
    cantonDropdown.appendChild(option);
  }
}

// Función para generar opciones del dropdown de distritos
function generateDistrictOptions(selectedCanton) {
  districtDropdown.innerHTML = ''; // Limpiar las opciones actuales

  const districts = districtDict[selectedCanton];
  for (const district of districts) {
    const option = document.createElement('option');
    option.value = district;
    option.text = district;
    districtDropdown.appendChild(option);
  }
}

// Event listener para el cambio de provincia
provinceDropdown.addEventListener('change', function(event) {
    const selectedProvince = event.target.value;
    generateCantonOptions(selectedProvince);
    cantonDropdown.disabled = false; // Habilitar el campo de selección de cantón
});

// Event listener para el cambio de cantón
cantonDropdown.addEventListener('change', function(event) {
    const selectedCanton = event.target.value;
    generateDistrictOptions(selectedCanton);
    districtDropdown.disabled = false; // Habilitar el campo de selección de cantón
});
