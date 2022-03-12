import {Alert} from 'react-bootstrap'

const Message = ({variant, children}) => {
  return <Alert variant={variant} className="col-md-12 text-center">{children}</Alert>
}

Message.defaultProps = {
  variant: 'info'
}

export default Message