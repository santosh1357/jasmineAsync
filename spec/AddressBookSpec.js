describe('Address Book', function(){ // start be define a new test suite and name it 'Address Book'
	//Jasmine provides before each function, the code inside it will run before every spec
	//we can use before each to refactor our code
	var addressBook,
		thisContact;
	beforeEach(function(){
		//iniate a new add book and contact
		addressBook = new AddressBook();
		thisContact = new Contact();
	});	

	it('should be able to add a contact', function(){ //make a spec for adding a contact inside test suite 			
		addressBook.addContact(thisContact); //adding the contact into address book

		//verifying that the contact exists in add book
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	//adding another test spec for deleting contact
	it('should be able to delete a contact', function(){
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		
		//test expectation should be that contact should not defined after deletion
		expect(addressBook.getContact(0)).not.toBeDefined();

	});
});	
	//adding another spec for testing async call
	//testing async functions are tricky as the async code runs after some time 
	//to test async func we make our asyc test spec to run after async code using done(a spl fun) and beforeEach
	//done signals the jasmine framework that spec is ready after sync code has been completed

describe('Async Add Book', function(){
   //move addressbook to suite level scope
   var addressBook = new AddressBook();
   //use beoforeEach to signal when async call is finsished with done and calling the async func in src js
   beforeEach(function(done){
   		//call the async function with done()
   		addressBook.getInitialContacts(function(){
   			done(); //signal to FW to start testing to spec by call done fun
   		});
   });

   it('should be able to load data from async api call', function(done){ //done here is used to map spec with async call like spec with only done wil  run  		
   		expect(addressBook.initialComplete).toBe(true);
   		done(); // to signal jasmine framework that spech test has finsihed
   });
});

//expect(add(0.1, 0.2)).toBe(0.3);
//We can use negate also with expect
//expect(add(0.1, 0.2)).not.toBe(0.3);
//expect entry point for starting the test - func that takes single param as input
//input param is called "ACTUAL"
//MATCHER - its the comparison method tested against the ACTUAL
//EXPECTED VALUE - Ideal or expected passed to MATCHER
//