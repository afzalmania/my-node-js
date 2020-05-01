const customerModel = require('../models/mongo/customers');

/* @Description: function to get customer data from db
  @Params: none
  return type list of objects if customers found
* */
const getAllCustomers = () => {
  const result = customerModel.find();
  return result;
};

/* @Description: function to get customer data from db by id
  @Params: id
  return type object
* */
const getCustomerById = (id) => {
  const result = customerModel.findOne({ id });
  return result;
};

/* @Description: function to delete customer data from db by id
  @Params: id
  return type object
* */
const deleteCustomerById = (id) => {
  const result = customerModel.remove(
    {
      id,
    },
    {
      justOne: true,
    }
  );
  return result;
};

/* @Description: function to update customer data into db by id
  @Params: id
  return type object
* */
const updateCustomerById = (id, data) => {
  const result = customerModel.update(
    {
      id,
    },
    { $set: data }
  );

  return result;
};

/* @Description: function to insert customer data into db
  @Params: form-data
  return type object
* */
const saveCustomer = (data) => {
  const result = customerModel.insertMany(data);
  return result;
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
  saveCustomer,
};
