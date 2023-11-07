/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Header.module.css';
import SearchBar from '../searchBar/SearchBar';
import LogoEtniablanco from '../../assets/png/LogoEtniablanco.png'; // Importa los estilos CSS

function Header({initialFilters, setInitialFilters, initialPageSet, setInitialPageSet}) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoEtniablanco} alt="Etnia Logo" />
      </div>
      <SearchBar initialFilters={initialFilters} setInitialFilters={setInitialFilters} initialPageSet={initialPageSet} setInitialPageSet={setInitialPageSet}/>
    </div>
  );
}

export default Header;
