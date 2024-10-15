import { formatPrice } from '../formatPrice';

//detalles
let details = {
    tarifa: '0.00',
    fecha_factura: '',
    nro_factura: '',
    tipo_envio: '',
    monto_tc: '0,00',
    nro_container: ''
}

// dato de content Aereo
const dataContentAereo = {
    warehouse: '',
    pie_cubico: '',
    volumen: '',
    peso: '',
    total_lb: '',
    cost_env: '0.00',
    seguro: '',
    sub_total: '0.00'
};

/*
id_almacen: '',
almacen_ids: [],
warehouse: '',
warehouse_children: '',
ancho: '',
alto: '',
largo: '',
peso: '',
pie_cubico: '',
volumen: '',
total_seguro: '',
seguro: '',

*/

//funcion de construccion de data para facturar
const create_factura = (almacen = [], extras = []) => {
    let wh = []; //arreglo para determinar los wh
    //let cajas = cajas(extras);

    almacen.forEach(element => {
        const { tipo_envio, id_almacen, warehouse, trackings } = element;
        details.tipo_envio = tipo_envio;

        trackings.map((item) => wh.push({...item, id_almacen, warehouse, total_seguro: formatPrice.constPrice(item.total_seguro, ',', '.')}));
    });

    

    let costo_trackings = calc_costo_track_and_reempaque(extras, 'TRACKING', wh);
    let costo_reempaque = calc_costo_track_and_reempaque(extras, 'REEMPAQUE', wh);

    return { wh, details, costo_trackings, costo_reempaque };
}

const cajas = (extras = []) => {
    let box = [];

    extras.forEach((element) => {
        const { id_gasto_extra, nombre, monto_gasto_extra, tipo } = element;

        if( tipo === 'CAJA' ){
            box.push({
                id_gasto_extra,
                nombre,
                monto_gasto_extra: formatPrice.constPrice(monto_gasto_extra, ',', '.')
            });
        }
    });

    return box;
}

const warehouses_data = (data = [], envio = 'directo') => {
    let wh_old = [];
    let wh_new = [];

    data.forEach((element) => {

        if( element.total_seguro != '' ){
            let total_seguro = parseNum(element.total_seguro);
            element.total_seguro = formatPrice.constPrice(`${total_seguro.toFixed(2)}`, ',', '.');
        }

        if( element.seguro != '' ){
            let seguro = parseNum(element.seguro);
            element.seguro = formatPrice.constPrice(`${seguro.toFixed(2)}`, ',', '.');
        }

        if( envio == 'reempaque' ){
            if( element.warehouse_padre == '' || element.warehouse_padre == null){
                let almacen_ids = [];
                let warehouse_children = '';
                let wh_child = [];
                data.forEach((item) => {
                    if( element.id_factura_tracking == item.warehouse_padre){
                        let id_almacen = generateRandomString(46);
                        wh_old.push({...item, id_almacen});
                        almacen_ids.push(id_almacen);
                        wh_child.push(item.warehouse)
                    }
                });

                for (let i = 0; i < wh_child.length; i++) {
                    warehouse_children = warehouse_children + '' + `${i !== wh_child.length - 1 ? wh_child[i] + ', ': wh_child[i]}`;
                }
                
                let id_almacen = generateRandomString(46);
                wh_new.push({...element, almacen_ids, warehouse_children, id_almacen});
            }
        }else{
            wh_old.push(element);
        }
        
    });

    return { wh_old, wh_new };
}

//costo trackings y costo reempaque
const calc_costo_track_and_reempaque = (extras = [], type = 'TRACKING', data = []) => {
    let costo = 0;

    extras.forEach((element) => {
        const { cant_cond, condicion, activo, monto_cond, monto_gasto_extra, tipo_cond, tipo } = element;
        if( activo === 1 && tipo === type ){
            costo = parseNum(monto_gasto_extra);

            if( condicion === 1 ){
                if( tipo_cond == 'MAYOR' && data.length > parseNum(cant_cond) ){
                    costo = parseNum(monto_cond) * data.length;
                }else if( tipo_cond == 'MENOR' && data.length < parseNum(cant_cond) ){
                    costo = parseNum(monto_cond) * data.length;
                }
            }  
        }
    });

    if( type == 'TRACKING' ){
        costo = costo * data.length;
    }

    return formatPrice.constPrice(`${costo.toFixed(2)}`, ',', '.');
}

//funcion dataContents
const data_contents = (wh = [], type_envio = 'aereo', tarifa = '0.00', envio = 'directo') => {
    let data = [];
    let costo_envio = formatPrice.desctPrice(tarifa, ',');
        costo_envio = parseNum(costo_envio);

        console.log("ver tipo de envio", envio, type_envio);

    wh.forEach((element) => {
        let ft = 0, vol = 0, secure = 0, sub_total = 0, cost_env = 0, pieFt = 0;
        const { pie_cubico, volumen, seguro, warehouse, peso } = element;

        ft = parseNum(pie_cubico);
        pieFt = parseNum(pie_cubico);
        vol = parseNum(volumen);
        secure = formatPrice.desctPrice(seguro, ',');
        secure = parseNum(secure);

        /*if( type_envio === 'maritimo' ){

            if( envio == 'directo' && 1.72 > ft  ){
                ft = 1.72;
                pieFt = 1.72;
            }
                

            cost_env = costo_envio * ft;

        }*/

        sub_total = cost_env + secure;
        cost_env = formatPrice.constPrice(`${cost_env.toFixed(2)}`, ',', '.');
        secure = formatPrice.constPrice(`${secure.toFixed(2)}`, ',', '.');
        sub_total = formatPrice.constPrice(`${sub_total.toFixed(2)}`, ',', '.');

        data.push({
            warehouse,
            pie_cubico: pieFt,
            volumen,
            peso,
            total_lb: '',
            cost_env,
            seguro: secure,
            sub_total
        });
    });

    if( type_envio === 'maritimo' &&  data.length > 0 ){
        data = calc_cost_maritimo(data, costo_envio);
    }

    return type_envio == 'aereo' && data.length > 0 ? calc_cost_env_aereo(data, envio, costo_envio) : data;
}

const calc_cost_maritimo = (data = [], costo_envio = 0) => {
    let pie_cubico = 0, cost_env = 0, sub_total = 0;

    data.forEach((element) => {
        pie_cubico = pie_cubico + parseNum(element.pie_cubico);
    });

    if( 1.72  > pie_cubico ){
        pie_cubico = 1.72;
    }

    cost_env = pie_cubico * costo_envio;
    sub_total = cost_env;
    cost_env = formatPrice.constPrice(`${cost_env.toFixed(2)}`, ',', '.');
    sub_total = formatPrice.constPrice(`${sub_total.toFixed(2)}`, ',', '.');

    data.push({
        ...dataContentAereo,
        pie_cubico,
        cost_env,
        sub_total
    })

    return data;

}

const calc_cost_env_aereo = (data = [], envio = 'directo', costo_envio = 0) => {
    let vol = 0, peso = 0, total_lb = 0, cost_env = 0, sub_total = 0;

    data.forEach((element) => {
        let volumen = parseNum(element.volumen);
        let weight = parseNum(element.peso);

        if( envio === 'directo' ){
            if( volumen >= weight ){
                total_lb = total_lb + volumen;
            }else{
                total_lb = total_lb + weight;
            }
        }else{
            vol = vol + volumen;
            peso = peso + weight;
        }
    });

    if( envio === 'directo' ){
        total_lb = ( total_lb <= 8.5 ) ? 8.5 : total_lb;
    }else{
        if( vol > peso && vol > 8.5 ){
            total_lb = vol;
        }else if( peso > vol && peso > 8.5 ){
            total_lb = peso;
        }else{
            total_lb = 8.5;
        }
    }

    cost_env = total_lb * costo_envio;
    sub_total = cost_env;
    cost_env = formatPrice.constPrice(`${cost_env.toFixed(2)}`, ',', '.');
    sub_total = formatPrice.constPrice(`${sub_total.toFixed(2)}`, ',', '.');

    data.push({
        ...dataContentAereo,
        total_lb,
        cost_env,
        sub_total
    })

    return data;
}

//calculo de total usd, de acuerdo a la data
const calc_total_usd_data = (data = [], field = 'sub_total') => {
    let total = 0;

    data.forEach((element) => {
        for (const property in element) {
            if( property === field ){
                let sub_total = formatPrice.desctPrice(element[property], ',');
                sub_total = parseNum(sub_total);

                total = total + sub_total;
            }
        }
    });

    return formatPrice.constPrice(`${total.toFixed(2)}`, ',', '.');
}

//suma de cualquier variable a la variable total USD
const suma_total_usd_var = (total, field) => {
    let total_usd = 0;
    let usd = parseNum(formatPrice.desctPrice(total, ','));
    let varField = parseNum(formatPrice.desctPrice(field, ','));

    total_usd = usd + varField;

    return formatPrice.constPrice(`${total_usd.toFixed(2)}`, ',', '.');
}

//calculo de total en VES
const calc_total_ves = (total, tasa) => {
    let total_usd = parseNum(formatPrice.desctPrice(total, ','));
    let tasa_ves = formatPrice.desctPrice(tasa, '.');
        tasa_ves = tasa_ves.replace(',', '.');
        tasa_ves = parseNum(tasa_ves);
    
    let total_ves = total_usd * tasa_ves;
        total_ves = total_ves.toFixed(2);
        total_ves = total_ves.replace('.', ',');

    return formatPrice.constPrice(`${total_ves}`, '.', ',');
}

//agregar caja a listCajas
const add_box = (listCajas = [], id_gasto_extra = '', nombre = '', monto_gasto_extra = '0.00', cant_caja = 0)  => {
    let monto = 0, cant = 0, sub_total = 0;

    monto = parseNum(formatPrice.desctPrice(monto_gasto_extra, ','));
    cant = parseNum(cant_caja);

    const check = listCajas.filter( caja => caja.id_gasto_extra == id_gasto_extra );

    if( check.length == 0 ){
        sub_total = cant * monto;
        sub_total = sub_total.toFixed(2);

        listCajas.push({
            id_gasto_extra, 
            nombre, 
            monto_gasto_extra,
            cant: cant,
            sub_total: formatPrice.constPrice(`${sub_total}`, ',', '.')
        });
    }else{
        for (let i = 0; i < listCajas.length; i++) {
           if( listCajas[i].id_gasto_extra == id_gasto_extra ){
                cant = cant + parseNum(listCajas[i].cant);
                sub_total = cant * monto;
                sub_total = sub_total.toFixed(2);
                listCajas[i].cant = cant;
                listCajas[i].sub_total = formatPrice.constPrice(`${sub_total}`, ',', '.');
                break;
           }
        }
    }

    return listCajas;
}

//parseNum, es un numero entero o flotante
const parseNum = (val) => val % 1 == 0 ? parseInt(val) : parseFloat(val);

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678.59';
    let result1='';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}

export { create_factura, data_contents, add_box, calc_total_usd_data, suma_total_usd_var, calc_total_ves, parseNum, warehouses_data, cajas, generateRandomString }