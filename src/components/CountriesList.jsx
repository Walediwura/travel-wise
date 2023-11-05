import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import styles from './CountryList.module.css';

function CountriesList({ cities, isLoading }) {
  // if (isLoading) return <Spinner />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {!countries.length ? (
        <Message message='No countries found, add your first country by clicking on a city on the map' />
      ) : (
        countries.map((country) => (
          <CountryItem key={country.id} countries={country} />
        ))
      )}
    </ul>
  );
}

export default CountriesList;
