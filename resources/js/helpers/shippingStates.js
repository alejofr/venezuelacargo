export const shippingStates = [
    {
        title: 'ALMACÉN MIAMI',
        valor: 'FACTURADO',
        check: true,
        active: false,
    },
    {
        title: 'PENDIENTE POR PAGO',
        valor: 'ENVIO-VENEZUELA',
        map: {
            id: "a",
            position: { lat: 25.7745431, lng: -80.1708802 },
        },
        check: false,
        active: false,
    },
    {
        title: 'EN TRÁNSITO HACIA VENEZUELA',
        valor: 'ENTRANSITO-VENEZUELA',
        map: {
            id: "b",
            position: { lat: 23.732230669979263, lng: -71.19582448995914 },
        },
        check: false,
        active: false,
    },
    /*{
        title: 'EN PUERTO VENEZOLANO',
        valor: 'PUERTO-VENEZOLANO',
        map: {
            id: "c",
            position: { lat: 10.601428576954985, lng: -66.96054375984357 },
        },
        check: false,
        active: false,
    },*/
    {
        title: 'HACIENDO ADUANA VENEZUELA',
        valor: 'ADUANA-VENEZUELA',
        map: {
            id: "d",
            position: { lat: 10.6012894, lng: -66.9466783 },
        },
        check: false,
        active: false,
    },
   /* {
        title: 'ALMACEN EXTERNO ADUANA',
        valor: 'ALMACEN-EXTERNO-ADUANA',
        map: {
            id: "e",
            position: { lat: 10.601428576954985, lng: -66.96054375984357 },
        },
        check: false,
        active: false,
    },*/
    {
        title: 'ALMACÉN VENEZUELA CARGO LA GUAIRA',
        valor: 'ALMACEN-VENEZUELA',
        map: {
            id: "h",
            position: { lat: 10.5997551, lng: -66.954827 },
        },
        check: false,
        active: false,
    },
    /*{
        title: 'EN RUTA NACIONAL',
        valor: 'EN-RUTA-NACIONAL',
        map: {
            id: "i",
            position: { lat: 10.458737617888016, lng: -66.91349306300683 },
        },
        check: false,
        active: false,
    },*/
    {
        title: 'ENTREGADO',
        valor: 'ENTREGADO',
        check: false,
        active: false,
    }
];