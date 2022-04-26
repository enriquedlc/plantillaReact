import PropTypes from 'prop-types';

const Card = ({name, birthday}) => {
    return (                        
    <>   
    <div className='cajaGrande'> 
      <div className='cajaPequeña'> Información </div>  
        <div className='textoCaja'>                    
        <p><strong>Nombre</strong> : {name} </p>
        <p><strong> Fecha de nacimiento</strong> : {birthday}</p>
        <p><strong>Día </strong>: {}</p>
        <p><strong>Edad </strong>: </p>
        </div>
    </div> 
    </>
    );
  };

Card.propTypes = {
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string
}  

export default Card;