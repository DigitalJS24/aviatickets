import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import currencyUI from './views/currency';
import ticketsUI from './views/tickets';
import favoritesUI from './views/favorites';


document.addEventListener('DOMContentLoaded', () => {

    initApp();
    const form = formUI.form

    // Events

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })

    ticketsUI.container.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-fav')) {
            return;
        };
        addToFavorites(e.target.dataset.ident);
    })

    favoritesUI.container.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-favorite')) {
            return;
        };
        favoritesUI.container.removeChild(e.target.parentElement.parentElement);
    })

    // Handlers

    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);

    }

    async function onFormSubmit() {
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue || depart_date;
        const currency = currencyUI.currencyValue;

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        })

        ticketsUI.renderTickets(locations.lastSearch);
    };

    function addToFavorites(ident) {
        const favoritesList = document.querySelector('#dropdown1');
        if (favoritesList.children.length === 0) {
            favoritesUI.renderFavoriteTickets(ident);
        } else {
            const test = [...favoritesList.children].some(el => {
                return el.getAttribute('data-identFav') === ident;
            });
            if (!test) {
                favoritesUI.renderFavoriteTickets(ident);
            } else {
                alert('This ticket is already in favorites');
            }
        }

    }

})