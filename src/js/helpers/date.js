import { format } from 'date-fns';

/**
 * 
 * @param {String} str - date string
 * @param {String} type - 'yyyy.mm.dd'
 * @returns Date
 */
export default function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}