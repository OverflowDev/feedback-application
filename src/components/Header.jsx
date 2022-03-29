import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style={headerStyles}>
        
        <div className='container'>
            {text}
        </div>

    </header>
  )
}

Header.defaultProps = {
    text: 'FeedBack Application by Overflow',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#00000'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,

}

export default Header