import React from 'react';
import style from './results.module.css';

const Result = ({ title, name, id, tabTypes }) => {

  const URL = `https://www.songsterr.com/a/wsa/${name}-${title}-tab-g-s${id}`

    return(
        <li className={style.result}>
            <a href={URL}><strong>{title}</strong> - {name}</a>
            <ol className={style.result__tabulars}>
                <p>Tabular types: </p>{tabTypes.map((tab, index) =>(
                    <li key={index}>{tab}</li>
                ))}
            </ol>
        </li>
    );
}

export default Result;