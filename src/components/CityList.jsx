import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';
import styles from './CityList.module.css';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {!cities.length ? (
        <Message message='No cities found, add your first city by clicking on a city on the map' />
      ) : (
        cities.map((city) => <CityItem key={city.id} city={city} />)
      )}
    </ul>
  );
}

export default CityList;
