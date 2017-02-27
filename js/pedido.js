/*-------pedidos-----------
Creado: Daniel Sarmiento Paszor.
Fecha: 27-02-2017
descripcion:pedido de productos

- Una fecha de pedido

- Un número total de artículos

- Un total de pedido

- Una dirección de entrega

- Una dirección de facturación
--------------------------------*/

function Pedidos(Fecha, Cantidad, Precio, DireccionEntrega, DireccionFacturacion){
	this.FechaPedido = FechaPedido;
	this.Cantidad = Cantidad;
	this.Precio = Precio;
	this.DireccionEntrega = DireccionEntrega;
	this.DireccionFacturacion = DireccionFacturacion;

	this.MostrarPedidos = function (){
		document.write('<p>La fecha del Pedido es: ' + this.FechaPedido + '</p>');
		document.write('<p>La cantidad del Pedido es: ' + this.cantidad + '</p>');
		document.write('<p>El precio total del Pedido es: ' + this.Precio + '</p>');
		document.write('<p>La direccion de entrega del Pedido es: ' + this.DireccionEntrega + '</p>');
		document.write('<p>La direccion de facturacion del Pedido es: ' + this.DireccionFacturacion + '</p>');
		console.log('La fecha del Pedido es: ' + this.FechaPedido );
		console.log('La cantidad del Pedido es: ' + this.cantidad );
		console.log('El precio total del Pedido es: ' + this.Precio );
		console.log('La direccion de entrega del Pedido es: ' + this.DireccionEntrega );
		console.log('La direccion de facturacion del Pedido es: ' + this.DireccionFacturacion );


			this.getFechaPedido = function (){
				return this.FechaPedido;
			};
			this.getCantidad = function (){
				return this.Cantidad;
			};
			this.getPrecio = function (){
				return this.Precio;
			};
			this.getDireccionEntrega = function (){
				return this.DireccionEntrega;
			};
			this.getDireccionFacturacion = function (){
				return this.DireccionFacturacion;
			};
			/*cambiar la direccion de entrega del pedido*/
			this.setDireccionEntrega = function (DireccionEntrega) {
				this.DireccionEntrega = DireccionEntrega;
			};


			/*cambiar la direccion de facturacion del pedido*/
			this.setDireccionFacturacion = function (DireccionFacturacion) {
				this.DireccionEntrega = DireccionEntrega;
			};
	}
}

/*
var Pedido1 = new Pedidos('27-02-2017', '200unidades', '500euros', 'Calle la estacion numero 51', 'Calle Sublime text numero 32');
Pedido1.MostrarPedidos();
var Pedido2 = new Pedidos('25-01-2017', '300unidades', '750euros', 'Calle la visila numero 2', 'Calle Sublime text numero 4');
Pedido2.MostrarPedidos();*/