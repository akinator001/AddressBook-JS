class Contact {

    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNo = params[6];
      this.email = params[7];
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) { this._firstName = firstName;}

    get lastName() {return this._lastName;}
    set lastName(lastName) {this._lastName = lastName;}

    get address() {return this._address;}
    set address(address) {this._address = address; }

    get city() {return this._city;}
    set city(city) {this._city = city;}

    get state() {return this._state;}
    set state(state) {this._state = state;}

    get zip() {return this._zip;}
    set zip(zip) {this._zip = zip;}

    get phoneNo() {return this._phoneNo;}
    set phoneNo(phoneNo) {this._phoneNo = phoneNo;}

    get email() {return this._email;}
    set email(email) {this._email = email;}

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + 
        ", city : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone No : "+ this.phoneNo + ", Email : "+ this.email;
    }
}  

let contact = new Contact("Aakash", "Gandhi", "MT", "Panipat", "Haryana", "132103", "7206080198", "aakash@gmail.com");
console.log(contact.toString());