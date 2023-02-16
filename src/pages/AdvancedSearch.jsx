import React, { useState } from 'react'
import '../styles/AdvancedSearch.css'

const AdvancedSearch = () => {
  const [age, setAge] = useState(0)
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [stage, setStage] = useState('')
  const [codes, setCodes] = useState('')
  const handleAgeChange = event => {
    setAge(event.target.value)
  }
  const handleTypeChange = event => {
    setType(event.target.value)
  }
  const handleLocationChange = event => {
    setLocation(event.target.value)
  }
  const handleEthnicityChange = event => {
    setEthnicity(event.target.value)
  }
  const handleStageChange = event => {
    setStage(event.target.value)
  }
  const handleCodesChange = event => {
    setCodes(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const submitData = {
      age: age,
      type: type,
      location: location,
      ethnicity: ethnicity,
      stage: stage,
      codes: codes
    }
    console.log(submitData)
  }
  return (
    <form className='Text' onSubmit={handleSubmit}>
      <label className='ageText'>Age</label>
      <input
        className='ageTextbox'
        type='number'
        value={age}
        onChange={handleAgeChange}
      />
      <label className='typeText'>CancerType</label>
      <select className='typeTextbox' value={type} onChange={handleTypeChange}>
        <option value='breastcancer'>Breast Cancer</option>
      </select>
      <label className='locationText'>Cancer Location</label>
      <input
        className='locationTextbox'
        type='text'
        value={location}
        onChange={handleLocationChange}
      />
      <label className='ethnicityText'>Ethnicity</label>
      <select
        className='ethnicityTextbox'
        value={ethnicity}
        onChange={handleEthnicityChange}
      >
        <option value='punjabi'>Punjabi</option>
        <option value='pashtun'>Pashtun</option>
        <option value='sindhi'>Sindhi</option>
        <option value='balochi'>Balochi</option>
      </select>
      <label className='stageText'>Stage</label>
      <select
        className='stageTextbox'
        value={stage}
        onChange={handleStageChange}
      >
        <option value='1st'>1st</option>
        <option value='2nd'>2nd</option>
        <option value='3rd'>3rd</option>
        <option value='4th'>4th</option>
      </select>
      <label className='codeText'>Codes</label>
      <select
        className='codeTextbox'
        value={codes}
        onChange={handleCodesChange}
      ></select>
      <button type='submit' className='submitbutton'>
        Submit
      </button>
    </form>
  )
}

export default AdvancedSearch
