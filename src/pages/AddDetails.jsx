import React, { useState } from 'react'
import { Fragment } from 'react'
import '../styles/AddDetails.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const AddDetails = () => {
  const [customerID, setCustomerID] = useState('')
  const [gender, setGender] = useState('')
  const [city, setCity] = useState('')
  const [age, setAge] = useState(NaN)
  const [streamingMovies, setStreamingMovies] = useState('')
  const [streamingTV, setStreamingTV] = useState('')
  const handleAge = event => {
    setAge(event.target.value)
  }
  const handleCustomerID = event => {
    setCustomerID(event.target.value)
  }
  const handleGender = event => {
    setGender(event.target.value)
  }
  const handleCity = event => {
    setCity(event.target.value)
  }
  const handleStreamingMovies = event => {
    setStreamingMovies(event.target.value)
  }
  const handleStreamingTV = event => {
    setStreamingTV(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const submitData = {
      customer_id: customerID,
      gender: gender,
      city: city,
      age: age,
      churn_value:0,
      streaming_movies: streamingMovies,
      streaming_tv: streamingTV
    }
    //API call to submit data
    let response = fetch('http://127.0.0.1:3001/query/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    }).then (
      response => response.json()
    ).then (
      data => {
        console.log(data)
        //popup to show success
        window.alert('Data added successfully')

        return data
      }
    ).catch (
      error => {
        console.log(error)
        window.alert('Error adding data')
      }

    )
    console.log(submitData)
  }
  return (
    <Fragment><Header/><Sidebar>
    <form className='Text' onSubmit={handleSubmit}>
      <label className='customerIDText'>Customer ID</label>
      <input
        className='customerIDTextbox'
        type='text'
        value={customerID}
        onChange={handleCustomerID}
      />
      <label className='genderText'>Gender</label>
      <input
        className='genderTextbox'
        type='text'
        value={gender}
        onChange={handleGender}
      />
      <label className='cityText'>City</label>
      <input
        className='CityTextbox'
        type='text'
        value={city}
        onChange={handleCity}
      />
      <label className='ageText'>Age</label>
      <input
        className='AgeTextbox'
        type='number'
        value={age}
        onChange={handleAge}
      />
      <label className='streamingMoviesText'>Streaming Movies</label>
      <input
        className='streamingMoviesTextbox'
        value={streamingMovies}
        onChange={handleStreamingMovies}
      />
      <label className='streamingTVText'>Streaming TV</label>
      <input
        className='streamingTVTextbox'
        value={streamingTV}
        onChange={handleStreamingTV}
      />
      <button type='submit' className='submitbutton'>
        Submit
      </button>
    </form>
    </Sidebar></Fragment>
  )
}

export default AddDetails
