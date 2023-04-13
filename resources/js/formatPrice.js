
const fields = [
    {
        field: 'tarifa_maritimo',
        money: 'usd'
    },
    {
        field: 'tarifa_aereo',
        money: 'usd'
    },
    {
        field: 'monto_tc',
        money: 'ves'
    },
    {
        field: 'monto_gasto_extra',
        money: 'usd'
    },
    {
        field: 'monto_cond',
        money: 'usd'
    },
    {
        field: 'seguro',
        money: 'usd'
    }
];

export const formatPrice = {     
    
    init (){
        console.log('as')
        for (let i = 0; i < fields.length; i++) {
            if ( document.getElementById(fields[i].field) ){
                console.log('ass')
                const spdor_decimal = ( fields[i].money == 'usd' ) ? '.' : ( fields[i].money == 'ves' ) ? ',' : null;
                const spdor_unid = ( fields[i].money == 'usd' ) ? ',' : ( fields[i].money == 'ves' ) ? '.' : null;
    
                document.getElementById(fields[i].field).addEventListener('keypress', function(e) {
                    let key = window.Event ? e.which : e.keyCod;
                    if ( key < 48 || key > 57  ) {
                        e.preventDefault();
                    }
                });
    
                /*document.getElementById(fields[i].field).addEventListener('keyup', function(e) {
                    let key = window.Event ? e.which : e.keyCod;
    
                    if( key == 8 || key >= 96 && key <= 105 ){
                        e.target.value = constructPrice(e.target.value, spdor_unid, spdor_decimal);
                    }
                    
                });*/
    
                document.getElementById(fields[i].field).addEventListener('click', function(e) {
                    if( e.target.value == '' )
                        e.target.value = '0'+spdor_decimal+'00';
                })
            }
        }
    },

    destructPrecio(precio, fieldName){
        const field = ( val ) => fields.filter( (item) => item.field === val );
        let rePrecio = precio;

        console.log(field(fieldName))

        if( field(fieldName).length != 0 ){
            const spdor_unid = ( field(fieldName)[0].money == 'usd' ) ? ',' : ( field(fieldName)[0].money == 'ves' ) ? '.' : null;
            if( precio.includes(spdor_unid) ){
                let arrPrecio = precio.split(spdor_unid);
                let aux = '' 
                for (let i = 0; i < arrPrecio.length; i++) {
                    aux = aux+''+arrPrecio[i]
                }

                rePrecio = aux;
            }
        }

        return rePrecio;
    },

    constPrice(value, spdor_unid, spdor_decimal){
        return constructPrice(value, spdor_unid, spdor_decimal);
    },
    desctPrice(precio,spdor_unid){
        let rePrecio = precio;
        console.log('precio', precio);
        if( precio.includes(spdor_unid) ){
            let arrPrecio = precio.split(spdor_unid);
            let aux = '' 
            for (let i = 0; i < arrPrecio.length; i++) {
                aux = aux+''+arrPrecio[i]
            }

            rePrecio = aux;
        }

        return rePrecio;
    },
    checkField(field){
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].field == field) {
                return true;                    
            }
        }

        return false;
    },
    moneda(field){
        for (let i = 0; i < fields.length; i++) {
            if( fields[i].field == field ){
                return fields[i].money;
            }
        }
    }
}

const constructPrice = (value, spdor_unid, spdor_decimal) => {
    let arrayAux = [];
    let salida = [];

    let arregloValue = value.split('');
    
    for (let i = 0; i < arregloValue.length; i++) {
        if( !isNaN(parseInt(arregloValue[i])) ){
            arrayAux.push(arregloValue[i]);
        }
    }

    if( arrayAux.length == 1 || arrayAux.length == 2 ){
        let arr = ( arrayAux.length == 2 ) ? 1 : 2;
        for (let i = 0; i < arr; i++) {
            arrayAux.unshift(0)
        }
    }

    arrayAux = arrayAux.reverse();
    let j = 4;

    /* Recorremosy aguardamos em arreglo de salida  */
    for (let i = 0; i < arrayAux.length; i++) {
        let boleano = true;
        let aux = '';

        if( i == 1 ){
            aux = spdor_decimal;
            salida.push(arrayAux[i])
        }else if( j == i &&  i != arrayAux.length - 1 && arrayAux.length > 5){
            aux = spdor_unid;
            j = j + 3;
            salida.push(arrayAux[i]) 
        }else if( arrayAux.length == 4 && (arrayAux.length - 1 == i && arrayAux[i] == 0 && arrayAux[arrayAux.length - 2] == 0) || arrayAux.length == 4 && (arrayAux.length - 1 == i && arrayAux[i] == 0 && arrayAux[arrayAux.length - 2] != 0) ){
            boleano = false;
            console.log('*')
        }else{
            aux = arrayAux[i];
        }

        if( boleano )
            salida.push(aux);
    }

    /*Retornarmos el arreglo salido de forma inversa*/
    return salida.reverse().join('');
}


