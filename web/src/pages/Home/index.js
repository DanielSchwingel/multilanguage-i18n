import React from 'react';

import i18next from '../../translate/i18n';

import './styles.css';
import imgBrazil from '../../assets/images/brazil.svg';
import imgUnitedStates from '../../assets/images/united-states.svg';

const Home = () => {

    function handleLanguage(language){
        localStorage.setItem('i18nextLng', language);
        window.location = window.location;
    }

    return(
        <div>
            <h1>{i18next.t('title.string')}</h1>
            <p>
                {i18next.t('message.string')}
            </p>
            <img src={imgBrazil} alt='Bandeira do Brasil' className='flags' onClick={() => handleLanguage('pt-BR')}/>
            <img src={imgUnitedStates} alt='Bandeira dos EUA' className='flags' onClick={() => handleLanguage('en-US')}/>
        </div>
    );
}
export default Home;