import React, { Fragment, useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../styles/Search.css'

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      name_id: '',
      searchState: 0,
      searchResult: {
        CustomerId: 1234,
        city: 'Chicago',
        age: 20,
        gender: 'Male',
        monthlyCharges: 0,
        phoneService: 'yes',
        multipleLines: 'yes',
        internetService: 'yes',
        internetType: 'cable',
        onlineSecurity: 'yes',
        onlineBackup: 'yes',
        deviceProtectionPlan: 'yes',
        premiumTechSupport: 'yes',
        streamingTV: 'no',
        streamingMovies: 'no',
        unlimitedData: 'no',
        contract: 'Month-to-Month',
        churnValue: 'Churn',
        reason: 'Churn Reason if any'
      }
    }
  }
  //update the searchResult object outside the thread
  updateSearchResult = data => {
    console.log('I am being called.')
    this.setState({
      searchResult: {
        CustomerId: data.customer_id,
        city: data.city,
        age: data.age,
        gender: data.gender,
        monthlyCharges: data.monthly_charge,
        phoneService: data.phone_service,
        multipleLines: data.multiple_lines,
        internetService: data.internet_service,
        internetType: data.internet_type,
        onlineSecurity: data.online_security,
        onlineBackup: data.online_backup,
        deviceProtectionPlan: data.device_protection_plan,
        premiumTechSupport: data.premium_tech_support,
        streamingTV: data.streaming_tv,
        streamingMovies: data.streaming_movies,
        unlimitedData: data.unlimited_data,
        contract: data.contract,
        churnValue: data.churn_value ? "Churn" : "Non Churn",
        reason: data.churn_reason,
      }
    })
  }

  setSearchSate = state => {
    this.setState({
      searchState: state
    })
  }

  handleName_idChange = event => {
    this.setState({
      name_id: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const submitData = {
      name_id: this.state.name_id
    }

    // API call to get the search result
    // setSearchSate(2)
    let response = fetch('http://127.0.0.1:3001/query/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.updateSearchResult(data)
        this.setSearchSate(1)
        return data
      })
      .catch(error => {
        console.log(error)
      })

    //modify the searchResult object
  }

  render () {
    return (
      <Fragment>
        {this.state.searchState === 0 && (
          <Fragment><Header/><Sidebar>
            <form onSubmit={this.handleSubmit}>
              <label className='NameInputPropmt'>Customer ID</label>
              <label className='NameInputPropmt2'>
                (Enter the customer id to search)
              </label>
              <input
                className='name_idtxtbox'
                type='text'
                value={this.state.name_id}
                onChange={this.handleName_idChange}
              />
              <button type='submit' className='searchbutton'>
                Search
              </button>
            </form>
            </Sidebar>
          </Fragment>
        )}
        {this.state.searchState === 1 && (
          <Fragment><Header/><Sidebar>
            <div className='resultContainer'>
              <div className='resultID'>
                {this.state.searchResult.CustomerId}
              </div>
              <div className='resultStatus'>
                {this.state.searchResult.churnValue}
              </div>
              <div className='resultstxt'>
                <div className='resultReason'>
                  {this.state.searchResult.reason}
                </div>
                <div className='resultCity'>City</div>
                <div className='resultCityVal'>
                  {this.state.searchResult.city}
                </div>
                <div className='resultAge'>Age</div>
                <div className='resultAgeVal'>
                  {this.state.searchResult.age}
                </div>
                <div className='resultGender'>Gender</div>
                <div className='resultGenderVal'>
                  {this.state.searchResult.gender}
                </div>
                <div className='resultMonthlyCharges'>Monthly Charges</div>
                <div className='resultMonthlyChargesVal'>
                  {this.state.searchResult.monthlyCharges}
                </div>
                <div className='resultPhoneService'>Phone Service</div>
                <div className='resultPhoneServiceVal'>
                  {this.state.searchResult.phoneService}
                </div>
                <div className='resultMultipleLines'>Multiple Lines</div>
                <div className='resultMultipleLinesVal'>
                  {this.state.searchResult.multipleLines}
                </div>
                <div className='resultInternetService'>Internet Service</div>
                <div className='resultInternetServiceVal'>
                  {this.state.searchResult.internetService}
                </div>
                <div className='resultInternetType'>Internet Type</div>
                <div className='resultInternetTypeVal'>
                  {this.state.searchResult.internetType}
                </div>
                <div className='resultOnlineSecurity'>Online Security</div>
                <div className='resultOnlineSecurityVal'>
                  {this.state.searchResult.onlineSecurity}
                </div>
                <div className='resultOnlineBackup'>Online Backup</div>
                <div className='resultOnlineBackupVal'>
                  {this.state.searchResult.onlineBackup}
                </div>
                <div className='resultDeviceProtectionPlan'>
                  Device Protection Plan
                </div>
                <div className='resultDeviceProtectionPlanVal'>
                  {this.state.searchResult.deviceProtectionPlan}
                </div>
                <div className='resultPremiumTechSupport'>
                  Premium Tech Support
                </div>
                <div className='resultPremiumTechSupportVal'>
                  {this.state.searchResult.premiumTechSupport}
                </div>
                <div className='resultStreamingTV'>Streaming TV</div>
                <div className='resultStreamingTVVal'>
                  {this.state.searchResult.streamingTV}
                </div>
                <div className='resultStreamingMovies'>Streaming Movies</div>
                <div className='resultStreamingMoviesVal'>
                  {this.state.searchResult.streamingMovies}
                </div>
                <div className='resultUnlimitedData'>Unlimited Data</div>
                <div className='resultUnlimitedDataVal'>
                  {this.state.searchResult.unlimitedData}
                </div>
                <div className='resultContract'>Contract</div>
                <div className='resultContractVal'>
                  {this.state.searchResult.contract}
                </div>
              </div>
            </div>
            </Sidebar>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default Search
