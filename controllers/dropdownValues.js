// Months & Years Dictionaries

const monthsDict = [
    '-',
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

const yearsDict = [
    "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"
]

// Professional Areas Dictionary


const areas = [
    '-',
    'Administración y Gestión de Empresas',
    'Finanzas',
    'Recursos Humanos',
    'Marketing y Publicidad',
    'Tecnología de la Información y Sistemas',
    'Ingeniería',
    'Educación y Enseñanza',
    'Salud y Medicina',
    'Arte y Cultura'
]


const professionDropdown = document.getElementById('areas-dropdown');

for (let i=0; i < areas.length; i++) {
    const option = document.createElement('option');
    option.text = areas[i];
    option.value = areas[i];
    professionDropdown.add(option);
}


// Months

const monthDropdownFrom = document.getElementById('monthFrom__select');
const monthDropdownTo = document.getElementById('monthTo__select');
const jobMonthDropdownFrom = document.getElementById('job-monthFrom__select');
const jobMonthDropdownTo = document.getElementById('job-monthTo__select');


for (let i = 0; i < monthsDict.length; i++) {
    const option = document.createElement('option');
    option.text = monthsDict[i];
    option.value = monthsDict[i];
    monthDropdownFrom.add(option);
}

for (let i = 0; i < monthsDict.length; i++) {
    const option = document.createElement('option');
    option.text = monthsDict[i];
    option.value = monthsDict[i];
    monthDropdownTo.add(option);
}

for (let i = 0; i < monthsDict.length; i++) {
    const option = document.createElement('option');
    option.text = monthsDict[i];
    option.value = monthsDict[i];
    jobMonthDropdownFrom.add(option);
}

for (let i = 0; i < monthsDict.length; i++) {
    const option = document.createElement('option');
    option.text = monthsDict[i];
    option.value = monthsDict[i];
    jobMonthDropdownTo.add(option);
}

// Years

const yearDropdownFrom = document.getElementById('yearFrom__select');
const yearDropdownTo = document.getElementById('yearTo__select');
const jobYearDropdownFrom = document.getElementById('job-yearFrom__select');
const jobYearDropdownTo = document.getElementById('job-yearTo__select');

for (let i = 0; i < yearsDict.length; i++) {
  const option = document.createElement('option');
  option.text = yearsDict[i];
  option.value = yearsDict[i];
  yearDropdownFrom.add(option);
}

for (let i = 0; i < yearsDict.length; i++) {
    const option = document.createElement('option');
    option.text = yearsDict[i];
    option.value = yearsDict[i];
    yearDropdownTo.add(option);
}

for (let i = 0; i < yearsDict.length; i++) {
    const option = document.createElement('option');
    option.text = yearsDict[i];
    option.value = yearsDict[i];
    jobYearDropdownFrom.add(option);
}

for (let i = 0; i < yearsDict.length; i++) {
    const option = document.createElement('option');
    option.text = yearsDict[i];
    option.value = yearsDict[i];
    jobYearDropdownTo.add(option);
}