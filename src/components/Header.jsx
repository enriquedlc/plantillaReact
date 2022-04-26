import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (                        
    <>  
    <div className='title'>                                            
      <h2>Tema 05 Práctica 01 {title} </h2>
    </div> 
    </>
    );
  };

  Header.propTypes = {
    title: PropTypes.string.isRequired,
}  

export default Header;