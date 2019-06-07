import React, {Component} from 'react';
import './App.css';
import Autocomplete from 'react-autocomplete';
import Header from './Components/Header.js';
import Buttons from './Components/Buttons.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Autocomplete
          // getItemValue prop contains a function that takes item as an argument, and returns the label of that item
          getItemValue={item => item.label}
          // items prop object contains an array of objects that will populate the dropdown menu of suggestions
          items={[
            { id: "Alabama", label: "Alabama"},
            { id: "Alaska", label: "Alaska"},
            { id: "Arizona", label: "Arizona"},
            { id: "Arkansas", label: "Arkansas"},
            { id: "California", label: "California"},
            { id: "Colorado", label: "Colorado"},
            { id: "Connecticut", label: "Connecticut"},
            { id: "Delaware", label: "Delaware"},
            { id: "Florida", label: "Florida"},
            { id: "Georgia", label: "Georgia"},
            { id: "Hawaii", label: "Hawaii"},
            { id: "Idaho", label: "Idaho"},
            { id: "Illnois", label: "Illnois"},
            { id: "Indiana", label: "Indiana"},
            { id: "Iowa", label: "Iowa"},
            { id: "Kansas", label: "Kansas"},
            { id: "Kentucky", label: "Kentucky"},
            { id: "Louisiana", label: "Louisiana"},
            { id: "Maine", label: "Maine"},
            { id: "Maryland", label: "Maryland"},
            { id: "Massachusetts", label: "Massachusetts"},
            { id: "Michigan", label: "Michigan"},
            { id: "Minnesota", label: "Minnesota"},
            { id: "Mississippi", label: "Mississippi"},
            { id: "Missouri", label: "Missouri"},
            { id: "Montana", label: "Montana"},
            { id: "Nebraska", label: "Nebraska"},
            { id: "Nevada", label: "Nevada"},
            { id: "New Hampshire", label: "New Hampshire"},
            { id: "New Jersey", label: "New Jersey"},
            { id: "New Mexico", label: "New Mexico"},
            { id: "New York", label: "New York"},
            { id: "North Carolina", label: "North Carolina"},
            { id: "North Dakota", label: "North Dakota"},
            { id: "Ohio", label: "Ohio"},
            { id: "Oklahoma", label: "Oklahoma"},
            { id: "Oregon", label: "Oregon"},
            { id: "Pennsylvania", label: "Pennsylvania"},
            { id: "Rhode Island", label: "Rhode Island"},
            { id: "South Carolina", label: "South Carolina"},
            { id: "South Dakota", label: "South Dakota"},
            { id: "Tennessee", label: "Tennessee"},
            { id: "Texas", label: "Texas"},
            { id: "Utah", label: "Utah"},
            { id: "Vermont", label: "Vermont"},
            { id: "Virginia", label: "Virginia"},
            { id: "Washington", label: "Washington"},
            { id: "West Virginia", label: "West Virginia"},
            { id: "Wisconsin", label: "Wisconsin"},
            { id: "Wyoming", label: "Wyoming"},
          ]}
          // 
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          // renderItem prop contains a function that generates the render tree for each item in the dropdown menu
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
            >
              {item.label}
            </div>
          }
          // stores this.state.value in a variable called value
          value={this.state.value}
          // onChange's value is a function that sets the state of value to be equal to the value of the target on which the event is happening
          onChange={e => this.setState({ value: e.target.value })}
          // onSelect's value is a function that takes value as an argument, and sets the state of value to be equal to the value variable
          onSelect={value => this.setState({ value })}
        />
        <Buttons />
      </div>
    );
  }
}

export default App;
