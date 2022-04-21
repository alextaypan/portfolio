import { BallTriangle } from 'react-loader-spinner';
import { Overlay } from './LoaderComponent.style';

function LoaderComponent() {
  return (
    <Overlay>
      <BallTriangle
        heigth="100"
        width="100"
        color="orange"
        ariaLabel="loading-indicator"
      />
    </Overlay>
  );
}

export default LoaderComponent;
