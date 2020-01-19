import React from "react";
import './App.css';
import { Profile } from "./components/profile/Profile.js";
import {History} from "./components/history/History.js";
import {Pending} from "./components/pending/Pending.js";
import {SubmitNew} from "./components/submitNew/SubmitNew.js";

const tempDate = new Date();
export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      submitBtn:false,
      formBtn: false,
      hisBtn:false,
      pendBtn: false,
      business:'',
      place:'',
      from: '08:30:00',
      to: '08:30:00',
      date: '',
      history: [
        {
          id:1,
          business: 'CS CLUB',
          place: 'SJSU',
          from: '1:00 PM',
          to: '6:00 PM',
          date: '1/1/2020',
          status: false
        },
        {
          id:2,
          business: 'CS CLUB',
          place: 'UCD',
          from: '10:00 AM',
          to: '3:00 PM',
          date: '1/2/2020',
          status: true

        },
        {
          id:3,
          business: 'CS CLUB',
          place: 'SFSU',
          from: '4:00 PM',
          to: '8:00 PM',
          date: '1/3 /2020',
          status: true

        }
      ],
      pending: [
        {
          id:1,
          business: 'Water For People',
          place: 'Denver',
          from: '2:00 PM',
          to: '6:00 PM',
          date: '8/1/2019',
        },
        {
          id:2,
          business: 'Team Trees',
          place: 'Los Angeles',
          from: '4:00 PM',
          to: '9:00 PM',
          date: '8/4/2019',
        },
        {
          id:3,
          business: 'Montrey Bay Aquarium',
          place: 'Montrey',
          from: '10:00 AM',
          to: '6:00 PM',
          date: '2/1/2019',
        }
      ]

    }
  }
  
  onSubmitForm =(e)=> {
    e.preventDefault();
    console.log('from Pending');
    const newForm = {
      id: Math.random() * 2.4 / Math.random(),
      business: this.state.business,
      place: this.state.place,
      from: this.state.from,
      to: this.state.to,
      date: this.state.date
    }
    this.setState({pending: [...this.state.pending, newForm]})
  }

  onBusinessChange = (e) => 
  {
    this.setState({business: e.target.value});
  }
  onPlaceChange = (e) => 
  {
    this.setState({place: e.target.value});
  }
  onFromChange = (e) => 
  {
    this.setState({from: e.target.value});
  }
  onToChange = (e) => 
  {
    this.setState({to: e.target.value});
  }
    onDateChange = (e) => 
  {
    this.setState({date: e.target.value});
  }

submitBtnClick =()=>
{
  this.setState({submitBtn: !this.state.submitBtn})
}
 
  formBtnClick =() =>
  {
    this.setState({formBtn: !this.state.formBtn})
  }

  hisBtnClick =() =>
  {
    this.setState({hisBtn: !this.state.hisBtn})
  }
  pendBtnClick =() =>
  {
    this.setState({pendBtn: !this.state.pendBtn})
  }

  render() {
    return (
      <div>
        <Profile 
        formBtnClick = {this.formBtnClick}
        formBtn = {this.state.formBtn}
        />
        <History 
        hisBtn = {this.state.hisBtn}
        History = {this.state.history}
        hisBtnClick = {this.hisBtnClick}/>
        <Pending 
        pendBtn = {this.state.pendBtn}
        Pending = {this.state.pending}
        pendBtnClick = {this.pendBtnClick}/>
        <SubmitNew 
        business = {this.state.business}
        place = {this.state.place}
        to = {this.state.to}
        from = {this.state.from}
        submitBtn = {this.state.submitBtn}

        submitBtnClick = {this.submitBtnClick}
        onSubmitForm = {this.onSubmitForm}
        onPlaceChange = {this.onPlaceChange}
        onBusinessChange = {this.onBusinessChange}
        onDateChange = {this.onDateChange}
        onFromChange = {this.onFromChange}
        onToChange = {this.onToChange}/>
      </div>
      
    );
  }
}

export default App;
