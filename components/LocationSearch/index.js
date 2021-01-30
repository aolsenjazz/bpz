import React from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import uuidv4 from 'uuid';
import './LocationSearch.css';

const getSuggestionValue = suggestion => suggestion.text;
 
const renderSuggestion = suggestion => (
	<div>
		{suggestion.text}
	</div>
);

class LocationSearch extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			suggestions: [],
			uuid: uuidv4(),
		};

		this.onChange = this.onChange.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
	}

	onChange(event, { newValue }) {
		this.setState({
			value: newValue,
		});
	};
 	
	onSuggestionsFetchRequested({ value }) {
		axios.get(API + '/suggestions?q=' + value + '&sessionId=' + this.state.uuid)
			.then(response => {
				this.setState({
					suggestions: response.data
				});
			})
			.catch(error => {
				console.error(error);
			});
	};

	onSuggestionsClearRequested() {
		this.setState({
			suggestions: []
		});
	};

	onSuggestionSelected(event, {suggestion, suggestionValue}) {
		axios.get(API + '/places?placeId=' + suggestion.place_id + '&sessionId=' + this.state.uuid)
			.then(response => {
				this.props.activeLocation(response.data.lat, response.data.lng);
				this.props.center(response.data.lat, response.data.lng);
				this.setState({
					uuid: uuidv4()
				});

			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'Enter an address...',
			value,
			onChange: this.onChange
		};

		return (
			<div className={'component-location-search ' + (this.props.overlayMode ? 'component-search-hidden' : '')}>
				<div>
					<img src='/magnifier.svg' className='magnifier' alt='parkboston meter location search' />
					<Autosuggest
						inputProps={inputProps}
						suggestions={suggestions}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						onSuggestionSelected={this.onSuggestionSelected}
					/>
				</div>
			</div>
		)
	}

}

export default LocationSearch;