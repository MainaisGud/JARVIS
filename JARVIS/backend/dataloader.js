const mongoose = require("mongoose")

//read data from dataset.csv
const fs = require("fs")
const csv = require("csv-parser")

//connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/jarvis", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



//create schema
const Schema = mongoose.Schema
//Customer ID,Referred a Friend,Number of Referrals,Tenure in Months,Offer,Phone Service,Avg Monthly Long Distance Charges,Multiple Lines,Internet Service,Internet Type,Avg Monthly GB Download,Online Security,Online Backup,Device Protection Plan,Premium Tech Support,Streaming TV,Streaming Movies,Streaming Music,Unlimited Data,      Contract,Paperless Billing, Payment Method,Monthly Charge,Total Regular Charges,Total Refunds,Total Extra Data Charges,Total Long Distance Charges,Gender,Age,Under 30,Senior Citizen,Married,Dependents,Number of Dependents,       City,Zip Code,Latitude,  Longitude,Population,Churn Value,CLTV,Churn Category,                Churn Reason,Total Customer Svc Requests,Product/Service Issues Reported,Customer Satisfaction
// 8779-QRDMV,               No,                   0,              1, None,           No,                              0.0,            No,             Yes,  Fiber Optic,                      9,             No,           No,                   Yes,                  No,          No,             Yes,             No,            No,Month-to-Month,Yes              ,Bank Withdrawal,        41.236,                39.65,          0.0,                     0.0,                        0.0,  Male, 78,      No,           Yes,     No,        No,                   0,Los Angeles,   90022,34.02381,-118.156582,     68701,          1,5433,    Competitor,Competitor offered more data,                          5,                              0,

//create schema for data in dataset.csv
const dataSchema = new Schema({
    customer_id: String,
    referred_a_friend: String,
    number_of_referrals: Number,
    tenure_in_months: Number,
    offer: String,
    phone_service: String,
    avg_monthly_long_distance_charges: Number,
    multiple_lines: String,
    internet_service: String,
    internet_type: String,
    avg_monthly_gb_download: Number,
    online_security: String,
    online_backup: String,
    device_protection_plan: String,
    premium_tech_support: String,
    streaming_tv: String,
    streaming_movies: String,
    streaming_music: String,
    unlimited_data: String,
    contract: String,
    paperless_billing: String,
    payment_method: String,
    monthly_charge: Number,
    total_regular_charges: Number,
    total_refunds: Number,
    total_extra_data_charges: Number,
    total_long_distance_charges: Number,
    gender : String,
    age: Number,
    under_30: String,
    senior_citizen: String,
    married: String,
    dependents: String,
    number_of_dependents: Number,
    city: String,
    zip_code: Number,
    latitude: String,
    longitude: String,
    population: Number,
    churn_value: Number,
    cltv: Number,
    churn_category: String,
    churn_reason: String,
    total_customer_svc_requests: Number,
    product_service_issues_reported: Number,
    customer_satisfaction: Number
})

//create model for data in dataset.csv
const Data = mongoose.model("Data", dataSchema)

//creating a placeholder for data
const data = []




//read data from dataset.csv
fs.createReadStream("dataset.csv")
    .pipe(csv())
    .on("data", (row) => {
        data.push(row)
    }
    )
    .on("end", () => {
        //map data to schema
        const dataToSave = data.map((d) => {
            dataSchema1 = new Data({
                customer_id: d["Customer ID"],
                referred_a_friend: d["Referred a Friend"],
                number_of_referrals: d["Number of Referrals"],
                tenure_in_months: d["Tenure in Months"],
                offer: d["Offer"],
                phone_service: d["Phone Service"],
                avg_monthly_long_distance_charges: d["Avg Monthly Long Distance Charges"],
                multiple_lines: d["Multiple Lines"],
                internet_service: d["Internet Service"],
                internet_type: d["Internet Type"],
                avg_monthly_gb_download: d["Avg Monthly GB Download"],
                online_security: d["Online Security"],
                online_backup: d["Online Backup"],
                device_protection_plan: d["Device Protection Plan"],
                premium_tech_support: d["Premium Tech Support"],
                streaming_tv: d["Streaming TV"],
                streaming_movies: d["Streaming Movies"],
                streaming_music: d["Streaming Music"],
                unlimited_data: d["Unlimited Data"],
                contract: d["Contract"],
                paperless_billing: d["Paperless Billing"],
                payment_method: d["Payment Method"],
                monthly_charge: d["Monthly Charge"],
                total_regular_charges: d["Total Regular Charges"],
                total_refunds: d["Total Refunds"],
                total_extra_data_charges: d["Total Extra Data Charges"],
                total_long_distance_charges: d["Total Long Distance Charges"],
                gender: d["Gender"],
                age: d["Age"],
                under_30: d["Under 30"],
                senior_citizen: d["Senior Citizen"],
                married: d["Married"],
                dependents: d["Dependents"],
                number_of_dependents: d["Number of Dependents"],
                city: d["City"],
                zip_code: d["Zip Code"],
                latitude: d["Latitude"],
                longitude: d["Longitude"],
                population: d["Population"],
                churn_value: d["Churn Value"],
                cltv: d["CLTV"],
                churn_category: d["Churn Category"],
                churn_reason: d["Churn Reason"],
                total_customer_svc_requests: d["Total Customer Svc Requests"],
                product_service_issues_reported: d["Product/Service Issues Reported"],
                customer_satisfaction: d["Customer Satisfaction"]
            })
            return dataSchema1
        })
        //save data to database
        Data.insertMany(dataToSave)
            .then(() => {
                console.log("Data saved to database")
            }
            )
            .catch((err) => {
                console.log(err)
            }
            )
    }
    )
