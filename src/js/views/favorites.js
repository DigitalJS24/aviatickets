import locations from '../store/locations';
import currencyUI from './currency';

class FavoritesUI {
    constructor() {
        this.container = document.querySelector('.header #dropdown1');
        this.currencySymbol = currencyUI.getCurrencySymbol.bind(currencyUI);
    }
    renderFavoriteTickets(ident) {
        const favTicket = locations.lastSearch.find(el => el.favorites_ident === ident);

        let fragment = '';
        const currency = this.currencySymbol();
        const template = FavoritesUI.favoriteTemplate(favTicket, currency);
        fragment = template;

        this.container.insertAdjacentHTML("afterbegin", fragment);
    }

    static favoriteTemplate(ticket, currency) {
        return `
    <div class="favorite-item  d-flex align-items-start" data-identFav="${ticket.favorites_ident}">
        <img src="${ticket.airline_logo}" class="favorite-item-airline-img" />
        <div class="favorite-item-info d-flex flex-column">
            <div class="favorite-item-destination d-flex align-items-center">
                <div class="d-flex align-items-center mr-auto">
                    <span class="favorite-item-city">${ticket.origin_name}</span>
                    <i class="medium material-icons">flight_takeoff</i>
                </div>
                <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                    <span class="favorite-item-city">${ticket.destination_name}</span>
                </div>
            </div>
            <div class="ticket-time-price d-flex align-items-center">
                <span class="ticket-time-departure">${ticket.departure_at}</span>
                <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
            </div>
            <div class="ticket-additional-info">
                <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
            </div>
            <a class="waves-effect waves-light btn-small deep-purple accent-2 delete-favorite ml-auto">Delete</a>
        </div>
    </div>`
    }
}

const favoritesUI = new FavoritesUI;

export default favoritesUI;