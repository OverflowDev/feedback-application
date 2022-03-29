import PropTypes from 'prop-types'

function Button({children, classVersion, type, isDisabled}) {
  return (
    <button className={`btn btn-${classVersion}`} type={type} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    classVersion: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classVersion: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button