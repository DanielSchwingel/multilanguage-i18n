import React from 'react';
import { useTranslation } from 'react-i18next';


import './styles.css';
import imgBrazil from '../../assets/images/brazil.svg';
import imgUnitedStates from '../../assets/images/united-states.svg';

const Home = () => {
    const { t, i18n } = useTranslation();

    function handleLanguage(language){
        i18n.changeLanguage(language);
    }

    return(
        <div>
            <h1>{t('title.string')}</h1>
            <p>
                {t('message.string')}
            </p>
            <img src={imgBrazil} alt='Bandeira do Brasil' className='flags' onClick={() => handleLanguage('pt')}/>
            <img src={imgUnitedStates} alt='Bandeira dos EUA' className='flags' onClick={() => handleLanguage('en')}/>
        </div>
    );
}
export default Home;