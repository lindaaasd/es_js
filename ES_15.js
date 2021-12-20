let garage = {
    automobili : [{marca: 'Audi', model: 'A6'},
                  {marca: 'Audi', model: 'TT'},
                  {marca: 'Mazda', model: 'CX30'},
                  {marca: 'Ferrari', model: '812'},
                  {marca: 'Porsche', model: 'Cayman'},],


showCars : function(){
    this.automobili.forEach((auto) =>
    { console.log (auto.marca)})
},

showModel : function () {
    let inputUser = prompt ("Quale marca è tua macchina?")
this.automobili.forEach((auto) =>
    {if (auto.marca == inputUser)[
        console.log (auto.model)
    ]})
}

}

garage.showModel();