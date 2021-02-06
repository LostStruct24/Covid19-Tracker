import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from'./App.module.css';
import { fetchData } from './api';
import coronaVirus from './images/corona.png';


class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
    }

    render () {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaVirus} alt="COVID-19"/>
                <h1 className={styles.h1}>COVID-19</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;