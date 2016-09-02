const contactList = require('../../lib/data.js').all
const db = require('./connections.js')

console.log(contactList);

for (contact of contactList) {
  db.any('INSERT INTO contact_list (first_name, last_name, telephone_number, eye_color, date_of_birth) VALUES ("contact.first_name", "contact.last_name", "contact.telephone_number", "eye_color", "date_of_birth");',[true])
}
