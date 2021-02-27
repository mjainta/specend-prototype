const stringify = (value, currency='USD') => (value/100).toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  }); /* Returns by default a string formatted like $2,500.00 */

export default {
  stringify
}
