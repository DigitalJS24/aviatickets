import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Init dropdown
const dropdowns = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdowns);

//init select currency
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstans(elem) {
    return M.FormSelect.getInstance(elem);
}

//init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstans(elem) {
    return M.Autocomplete.getInstance(elem);
}

// init date pickers

const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn: true,
    format: 'yyyy-mm',
});

export function getDatePickerInstans(elem) {
    return M.Datepicker.getInstance(elem);
}

// init modal

var modals = document.querySelectorAll('.modal');
M.Modal.init(modals);