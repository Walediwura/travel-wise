import styles from './CountryItem.module.css';

function CountryItem({ countries }) {
  const { country, emoji } = countries;
  console.log(emoji);
  console.log(country);
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
