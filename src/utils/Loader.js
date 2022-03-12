import { Spinner } from 'react-bootstrap';

const Loader = ({ variant, message }) => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
        margin: '140px auto',
        display: 'block',
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;