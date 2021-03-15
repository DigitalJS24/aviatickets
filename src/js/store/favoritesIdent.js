import formatDate from '../helpers/date';
/* import ticketsUI from '../views/tickets';
import api from '../services/apiService'; */


class FavoritesIdent {
    constructor(helpers) {
        this.favoritesIdent = null;
    }

    getFavoritesIdent(ticket) {
        const favIdent = formatDate(ticket.departure_at, 'yyyy-MM-dd') + ticket.flight_number;
        return favIdent;
    }

}

const favoritesIdent = new FavoritesIdent;
export default favoritesIdent;