let phoneContacts = {
    contacts : [{name: 'Riccardo', surname: 'Moschetti', phone: 123243534},
                {name: 'Cernica', surname: 'Procop', phone: 233545436},
                {name: 'Mobylicious', surname: 'Chocolicious', phone: 123243534},
                {name: 'John', surname: 'Smith', phone: 123243534},
                {name: 'Franz', surname: 'Kafka', phone: 123243534},],
    
    checkContactList : function (){
        this.contacts.forEach((contact) => {
            console.log (contact)
        })
    },

    showContact : function () {
        let inputUser = prompt ("Chi vuoi stalkerare?")
        this.contacts.forEach((contact) =>
        {if (contact.name == inputUser){
            console.log (contact);//.name + " "+contact.phone)
        }
        })
    }
    
}

phoneContacts.contacts[2] = {name: 'Linda'}
phoneContacts.checkContactList()

