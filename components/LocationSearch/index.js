import { useState, useEffect, useCallback } from 'react';
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

export default function LocationSearch(props) {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [uuid, setUuid] = useState(uuidv4());

	const onSuggestionSelected = useCallback((suggestion) => {
		axios.get('/api/places?placeId=' + suggestion.place_id + '&sessionId=' + uuid)
			.then(response => {
				props.setLocation({
					lat: response.data.lat, 
					lng: response.data.lng,
					zoom: props.location.zoom
				});
				setUuid(uuidv4());
			})
			.catch(error => {
				console.error(error);
			});
	});

	useEffect(() => {
		if (value.trim() === '') return;

		axios.get('/api/suggestions?q=' + value + '&sessionId=' + uuid)
			.then(response => {
				setSuggestions(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, [value]);

	return (
		<div className='component-location-search'>
			<div>
				<img src='/magnifier.svg' className='magnifier' alt='parkboston meter location search' />
				<Autosuggest
					inputProps={{placeholder: 'Enter an address...', value, onChange: (event, { newValue }) => { setValue(newValue) }}}
					suggestions={suggestions}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					onSuggestionsFetchRequested={() => {}}
					onSuggestionsClearRequested={() => setSuggestions([])}
					onSuggestionSelected={(event, {suggestion, suggestionValue}) => {onSuggestionSelected(suggestion)}}
				/>
			</div>
		</div>
	)
}