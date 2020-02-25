import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import employees from "../employees.json";
import './App.css';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class App extends Component {
    constructor() {
        super()
        this.state = {
            employees,
            searchfield: '',
            sorted: undefined //undefined || ASC || DESC
        }
    }

    onChange = ({target:{name, value}}) => {
        this.setState({ [name]: value });
    }

    onSortedChange = (evt) => {
        const name = evt.currentTarget.getAttribute('name');
        const value = this.state.sorted === undefined ?  'ASC' : this.state.sorted === 'ASC' ? 'DESC' : undefined; 
        console.log(name, value)
        this.setState({ 'sorted': value });
    }

    // Sort method
    sortEmployees = (sortType, filteredEmployees) => {
        if(sortType === undefined) throw new Error('Sort type cannot be undefined');
        const isASC = sortType === 'ASC';
        filteredEmployees.sort((a,b) => {
            const aFormatted = a.name.split(' ')[1];
            const bFormatted = b.name.split(' ')[1];
            const firstVal = isASC ? aFormatted : bFormatted;
            const secondVal = isASC ? bFormatted : aFormatted;
            return firstVal.localeCompare(secondVal);
        });
    }

    render() {
        const { employees, searchfield, sorted } = this.state;
        console.log('sorted', sorted);
        const filteredEmployees = employees.filter(employee => {
            return employee.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        const sortedEmployees = this.state.sorted === undefined ? filteredEmployees : this.sortEmployees(this.state.sorted, filteredEmployees);
        console.log(sortedEmployees);
        return (!employees.length) ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                <h1 className='f1'>Employee Directory</h1>
                    <SearchBox name={'searchfield'} searchChange={this.onChange}/>
                    <p className="show-sort">Sort</p>
                    <FontAwesomeIcon name={'sorted'} onClick={this.onSortedChange} icon={faArrowDown} />
                    <FontAwesomeIcon name={'sorted'} onClick={this.onSortedChange} icon={faArrowUp} />

                    <Scroll>
                        <ErrorBoundary>                        
                        <CardList employees={filteredEmployees}/>
                        </ErrorBoundary>
                    </Scroll> 
                </div>
            );
        }
}

export default App;