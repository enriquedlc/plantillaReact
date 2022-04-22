
const App = ({name, surname}) => {

  return (                        
  <>                                  
    <h1>Hello World</h1>             
    <p>Hola {name} {surname}</p>
  </>
  );
};

export default App;

 // para poner varias etiquetas, una dentro de otra, utilizamos un div.
 // tambien podemos hacerlo con Fragment o como sale en el documento, vacío.