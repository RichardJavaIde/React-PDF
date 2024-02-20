import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import './App.css'

function App() {
  
const facturaData = {
  numero:'12345678',
  producto:'Burito de pollo',
  cantidad:'5',
  precio:'20',
  fecha:'2024/02/19',
  cliente:'Antonia',
  total:'100.00'
}

const generarPDF = ()=>{
  const doc = new jsPDF();
  

  // Encabezado de la factura

  doc.setFontSize(10.8);
  doc.text(10, 30, 'Recibo de venta de orquídeas');
  doc.text(10, 35, `Comprobante No.: ${facturaData.numero}`);
  doc.text(10, 40, `PDV: ${facturaData.cliente}`);
  doc.text(10, 45, 'Operador: 123654');
  doc.setFontSize(9);
  doc.text(10, 55, 'Especie vendida: Sophronitis coccinea');
  doc.text(10, 60, `Valor: ${facturaData.precio}`);
  doc.text(10, 65, `Cantidad: ${facturaData.cantidad}`);

  
  doc.text(10, 70, `Fecha/Hora: ${facturaData.fecha} 12:28:21`);
  doc.text(10, 75, `Total: ${facturaData.total}`);

  doc.text(10, 90, '_______________________________');
  doc.text(10, 95, 'Recibí conforme');


  //agregar tablas
  
    
    const heads= ['ID', 'Name', 'Email', 'Country', 'IP-address'];
    const body = [
      ['1', 'Donna', 'dmoore0@furl.net', 'China', '211.56.242.221'],
      ['2', 'Janice', 'jhenry1@theatlantic.com', 'Ukraine', '38.36.7.199'],
      [
        '3',
        'Ruth',
        'rwells2@constantcontact.com',
        'Trinidad and Tobago',
        '19.162.133.184',
      ],
      ['4', 'Jason', 'jray3@psu.edu', 'Brazil', '10.68.11.42'],
      ['5', 'Jane', 'jstephens4@go.com', 'United States', '47.32.129.71'],
      ['6', 'Adam', 'anichols5@com.com', 'Canada', '18.186.38.37'],
    ];
  

  
  doc.autoTable({
    startY: 109,
    head: [heads],
    body: body
    
  })


  //abrir en otra pestaña el PDF
  doc.output('dataurlnewwindow', {filename: 'comprobante.pdf'});

}
  return (
    <>
      <h1>Factura</h1>
      <h4>Logo</h4>
      <h2>Numero de factura: {facturaData.numero}</h2>
      <h2>Fecha: {facturaData.fecha}</h2>
      <h2>Cliente: {facturaData.cliente}</h2>
      <h2>Precio: {facturaData.precio}</h2>
      <h2>Cantidad: {facturaData.cantidad}</h2>

      <h2>Total: {facturaData.total}</h2>
      <button onClick={generarPDF}>Generar PDF</button>
    </>
  )
}

export default App
