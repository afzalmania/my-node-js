const {
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
  saveCustomer,
} = require('../utils/index');

/* @Description: function for handling customer request
  @Params: none
  return a list of json
* */
exports.index = async (req, res) => {
  const result = await getAllCustomers();
  if (result.length) {
    res.status(200).send(result);
  } else {
    res.status(200).send({ message: 'No customers found!' });
  }
};

/* @Description: function for handling customer request
  @Params: id
  return an object
* */
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  const result = await getCustomerById(id);
  if (result && result.firstName) {
    res.status(200).send(result);
  } else {
    res.status(200).send({ message: 'No customers found with specified id!' });
  }
};

/* @Description: function for handling customer delete request
  @Params: id
  return an object
* */
exports.deleteCustomerById = async (req, res) => {
  const { id } = req.params;
  const result = await deleteCustomerById(id);
  if (result && result.deletedCount === 1) {
    res.status(200).send(result);
  } else {
    res.status(200).send({ message: 'Could not be deleted!' });
  }
};

/* @Description: function for handling customer update request
  @Params: id, form-data in json format
  return an object
* */
exports.updateCustomerById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const result = await updateCustomerById(id, body);
  if (result && result.ok === 1) {
    res.status(200).send(result);
  } else {
    res.status(200).send({ message: 'Could not be updated!' });
  }
};

/* @Description: function for handling customer post request
  @Params: form-data in json format
  return an array of objects
* */
exports.saveCustomer = async (req, res) => {
  const {
    body: { data },
  } = req;
  const { id } = data;
  if (id === undefined) {
    res.status(400).send({ message: 'id field is must!' });
  }
  const result = await saveCustomer(data);
  if (result === null) {
    res.status(200).send(result.errmsg);
  } else {
    res.status(200).send(result);
  }
};
