let garage = {
    automobili : [{name: "Mazda", model: "CX30"}, 
                  {name: "Mercedes", model: "A180"},
                  {name: "Mazda", model: "CX5"},
                  {name: "Audi", model: "A6"},
                  {name: "Porsche", model: "Cayman"}],

    // showAllCars : function (){
    //     this.automobili.forEach((auto) =>
    //     { console.log (auto.name)})
    // },

    showThisBrand : function () {

        let userInput = prompt ("Che marca ti interessa?")
        this.automobili.forEach((auto) => {
        if ( userInput == auto.name){
            console.log (auto.model)
        }

        })

    }

}

// garage.showAllCars();
garage.showThisBrand();

