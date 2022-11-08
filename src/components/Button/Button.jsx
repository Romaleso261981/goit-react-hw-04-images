import { ButtonLoad } from './ButtonStyle.js';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
  <ButtonLoad type="button" onClick={onClick}>Load more</ButtonLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;


