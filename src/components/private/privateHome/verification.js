import {Toast} from 'react-bootstrap/Toast';

function Verification() {
  return (
    <div>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src=""
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Verification</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Bien vouloir confirmer la verification dans le mail qui vous a été envoyé.
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
}

export default Verification;