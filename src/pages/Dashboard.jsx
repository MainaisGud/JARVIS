import React, { useEffect } from 'react'
import { Fragment } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../styles/Dashboard.css'
import totalCustomers from '../assets/totalCustomers1.png'
import Churners from '../assets/churners1.png'
import NonChurners from '../assets/nonChurners.png'
import ChurnerIcon from '../assets/churner.png'
import totalCustomersIcon from '../assets/totalCustomers.png'
import label1 from '../assets/label1.PNG'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      loaded: false,
      Data : [450, 150, 300],
      G_Data : [220, 80],
      chartData: [
        { name: 'Churners', value: 150 },
        { name: 'Non-Churners', value: 300 }
      ],
      COLORS: ['#FF0091', '#2958AE'],

      GenderData : [
        { name: 'Male', value: 220 },
        { name: 'Female', value: 80 }
      ], 
      AgeData: [
        { name: '<20', value: 9 },
        { name: '20-40', value: 35 },
        { name: '40-60', value: 20 },
        { name: '>60', value: 5 }
      ],
    
      StatesData: [
        { name: 'Texas', value: 60 },
        { name: 'California', value: 20 },
        { name: 'Florida', value: 60 },
        { name: 'Alaska', value: 10 },
        { name: 'Georgia', value: 6 },
        { name: 'Ohio', value: 30 }
      ],
      RADIAN: Math.PI / 180
    }
    this.updateData()

  }

  updateData = () => {
    let submitData = {
      customer_id: 'all'
    }

    let response = fetch('http://127.0.0.1:3001/query/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then(response => response.json())
      .then(data => {
        //update Data and G_Data
        this.setState({
          Data : [data.total, data.churned, data.retained],
          G_Data : [data.male, data.female]
        })

        this.setState({
          loaded: true
        })

        console.log(data)
      }
      )
  }




  
  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * this.state.RADIAN)
    const y = cy + radius * Math.sin(-midAngle * this.state.RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  //calling updateData
  render () {

    if (!this.state.loaded) {
      return <div>Loading...</div>
    }

  return (
    <Fragment><Header/><Sidebar>
      <div className='Container1'>
        <img
          className='totalCustomer'
          src={totalCustomers}
          alt='totalCustomers icon!'
        />
        <img
          className='totalCustomer1'
          src={totalCustomersIcon}
          alt='totalCustomers icon!'
        />
        <div className='totalCustomertxt'> TotalCustomers</div>
        <div className='totalCustomerVal'>{this.state.Data[0]}</div>
        <img className='Churners' src={Churners} alt='totalCustomers icon!' />
        <img
          className='Churners1'
          src={ChurnerIcon}
          alt='totalCustomers icon!'
        />
        <div className='Churnerstxt'> Churners</div>
        <div className='ChurnerVal'>{this.state.Data[1]}</div>
        <img
          className='NonChurners'
          src={NonChurners}
          alt='totalCustomers icon!'
        />
        <div className='NonChurnerstxt'> Non-Churners</div>
        <div className='NonChurnerVal'>{this.state.Data[2]}</div>
      </div>

      <div className='Container2'>
        <img className='label1' src={label1} alt='label icon!' />
        <PieChart width={350} height={400}>
          <Pie
            data={this.state.chartData}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={this.renderCustomizedLabel}
            outerRadius={120}
            fill='#8884d8'
            dataKey='value'
          >
            {this.state.chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={this.state.COLORS[index % this.state.COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='Container3'>
        <div className='chartTxt'>Statistics by Gender</div>
        <PieChart width={350} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={this.state.GenderData}
            cx='50%'
            cy='50%'
            outerRadius={120}
            fill='#8884d8'
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className='Container4'>
        <div className='chartTxt'>Statistics by Age</div>
        <PieChart width={350} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={this.state.AgeData}
            cx='50%'
            cy='50%'
            outerRadius={120}
            fill='#F08080'
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className='Container5'>
        <div className='chartTxt'>Statistics by City</div>
        <PieChart width={350} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={this.state.StatesData}
            cx='50%'
            cy='50%'
            outerRadius={120}
            fill='#F4D03F'
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      </Sidebar>
    </Fragment>
  )}
}

export default Dashboard
