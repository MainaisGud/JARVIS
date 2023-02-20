const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//user schema
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
//user model
const Data = mongoose.model('Data', dataSchema);
module.exports = Data;



