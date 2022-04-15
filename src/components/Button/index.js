import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({
  children, variant, disableShadow, disabled, startIcon, endIcon, size, color, type, onClick
}) {
  return (
    <Container
      variant={variant}
      disableShadow={disableShadow}
      disabled={disabled}
      size={size}
      color={color}
      type={type}
      onClick={onClick}
    >
      {startIcon && (
        <span className="material-icons startIcon">{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className="material-icons endIcon">{endIcon}</span>
      )}
    </Container>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['gray', 'primary', 'secondary', 'danger']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disableShadow: false,
  disabled: false,
  variant: '',
  startIcon: '',
  endIcon: '',
  size: 'md',
  color: 'primary',
  type: 'button',
  onClick: () => { },
};
