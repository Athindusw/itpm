import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import axios from 'axios';

export const PaymentsPage = (params) => {
  const history = useHistory();
  const apiUrl = process.env.REACT_APP_API_URL;
  const { newPayment, cartItems } = params;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const [cardPayment, setCardPayment] = useState(false);

  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [payments, setPayments] = useState([]);

  const [isChanged, setIsChanged] = useState('');

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts2`)
      .then((response) => {
        console.log(response.data.existingPosts);
        setPayments(response.data.existingPosts);
      })
      .catch((err) => {
        console.log(err);
      });
    return isChanged;
  }, [apiUrl, isChanged]);

  const handlePaymentOptions = (e) => {
    setPaymentMethod(e.target.value);

    if (e.target.value === 'card') {
      setCardPayment(true);
    } else {
      setCardPayment(false);
    }
  };

  const handlePay = (e) => {
    e.preventDefault();
    let paymentForm = document.getElementById('paymentForm');
    let isFormValid = paymentForm.checkValidity();
    paymentForm.reportValidity();

    if (isFormValid) {
      let payment = {
        paymentId: Date.now().toString().slice(4, 7),
        customerName: name,
        paymentDate: new Date().toISOString(),
        paymentMethod: paymentMethod,
        address: address,
        cardNumber: cardNumber,
        totalAmount: itemPrice,
      };

      axios
        .post(`${apiUrl}/post2/save`, payment)
        .then((response) => {
          console.log(response);
          params.setCartItems([]);
          setIsChanged(response.data);
          history.push('/payments');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDelete = (paymentId, id) => {
    axios
      .delete(`${apiUrl}/post2/delete/${id}`)
      .then((response) => {
        console.log(response);
        setPayments(payments.filter((x) => x.PaymentId !== paymentId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {newPayment ? (
        <form className="row g-3" id="paymentForm">
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={(e) => setName(e.target.value)}
              required></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="payment-method" className="form-label">
              Payment Method
            </label>
            <select
              id="payment-method"
              className="form-select"
              onChange={(e) => handlePaymentOptions(e)}>
              <option defaultValue>Choose...</option>
              <option value="card">VISA / Mastercard</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              onChange={(e) => setAddress(e.target.value)}
              required></input>
          </div>
          <div className="col-12">
            <label htmlFor="inputCard" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCard"
              onChange={(e) => setCardNumber(e.target.value)}
              disabled={!cardPayment}></input>
          </div>
          <div className="col-6">Total Price:</div>
          <div className="col-6">
            <strong>Rs. {itemPrice.toFixed(2)}</strong>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handlePay(e)}>
              Pay
            </button>
          </div>
        </form>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Payment Date</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Total Amount</th>
              <th scope="col" colSpan="3" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{payment.paymentId}</td>
                <td>{payment.customerName}</td>
                <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
                <td>
                  {payment.paymentMethod === 'card'
                    ? 'Visa / Mastercard'
                    : 'Cash on Delivery'}
                </td>
                <td>Rs. {payment.totalAmount} /=</td>
                <td className="text-center">
                  <PDFDownloadLink
                    document={<PaymentReceipt payment={payment} />}
                    className="btn btn-secondary"
                    fileName={`payment-${payment.paymentId}-receipt.pdf`}>
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading..' : 'Get Receipt'
                    }
                  </PDFDownloadLink>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      history.push(`/payments/update/?id=${payment._id}`);
                    }}>
                    Update
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(payment.PaymentId, payment._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const PaymentReceipt = (params) => {
  const { payment } = params;
  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text>Payment ID #{payment.paymentId}</Text>
          <Text>Customer Name: {payment.customerName}</Text>
          <Text>
            Payment Date: {new Date(payment.paymentDate).toDateString()}
          </Text>
          <Text>
            Payment Method:{' '}
            {payment.paymentMethod === 'card'
              ? 'Visa / Mastercard'
              : 'Cash on Delivery'}
          </Text>
          <Text>Total Amount: Rs. {payment.totalAmount} /=</Text>
        </View>
        <View style={styles.section}></View>
      </Page>
    </Document>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
