function AddressBook(){
	this.contactList = [];
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
	var self = this;
	window.setTimeout(function(){
		self.initialComplete = true;
		if(cb){
			return cb;
		}
	}, 3);
};
AddressBook.prototype.addContact = function(contact){
	this.contactList.push(contact);
};

AddressBook.prototype.getContact = function(index){
	//console.log(this.contactList);
   return this.contactList[index];

};

AddressBook.prototype.deleteContact = function(index){
	this.contactList.splice(index, 1);
};
ad = new AddressBook();
ad.addContact('test');
ad.getContact();
//ad.getContact(0).toBe(); //should print test, but error TypeError: Cannot read property '0' of undefined is coming.