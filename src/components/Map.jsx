import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const [searchParam, setSearchParam] = useSearchParams();

  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
