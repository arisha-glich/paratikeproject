import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function Checkout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-1 items-start justify-center p-4 bg-gray-100">
        <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg flex flex-col lg:flex-row">
          
          {/* Left Side - Order Summary */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Total Amount</h2>
            <h1 className="text-4xl font-bold mb-8">$133.23</h1>
            
            <div className="mb-4">
              <p>Same Event Name</p>
              <p className="text-sm text-gray-500">Qty 2</p>
              <p>$64.00</p>
            </div>
            <div className="mb-4">
              <p>Same Event Name</p>
              <p className="text-sm text-gray-500">Qty 2</p>
              <p>$66.00</p>
            </div>
            <div className="mb-4">
              <p>Same Event Name</p>
              <p className="text-sm text-gray-500">Qty 3</p>
              <p>$28.00</p>
            </div>

            <div className="mt-8">
              <p>Subtotal: $158.00</p>
              <p>Sales Tax (6.5%): $10.27</p>
              <p className="font-bold text-lg mt-4">Total Due: $168.27</p>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="w-full lg:w-1/2 p-8 bg-gray-50">
            <h2 className="text-xl font-bold mb-6">Payment Checkout</h2>
            <form className="space-y-4">
              <div className="flex items-center">
                <input type="radio" id="creditCard" name="paymentMethod" checked className="mr-2" />
                <label htmlFor="creditCard">Credit Card</label>
                <input type="radio" id="bankTransfer" name="paymentMethod" className="ml-8 mr-2" />
                <label htmlFor="bankTransfer">Bank Transfer</label>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email Address</label>
                <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="muddassarhaseeb34@gmail.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Card Number</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="**** **** **** 0000" />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600">Expiry*</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="12/22" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600">CVV*</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="456" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Account Holder Name</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="MUDDASSAR HASEEB" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-600">I agree to the Terms and conditions and Privacy Policy</label>
              </div>
              <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-3 rounded-md">Pay $168.27</button>
              <button className="w-full mt-4 bg-black text-white p-3 rounded-md flex items-center justify-center">
                <span className="mr-2">Pay with</span> <span className="font-bold"> Pay</span>
              </button>
              <button className="w-full mt-4 bg-gray-100 text-gray-600 p-3 rounded-md flex items-center justify-center">
                <span className="mr-2">Buy with</span> <span className="font-bold">G Pay</span>
              </button>
              <button className="w-full mt-4 bg-red-100 text-red-600 p-3 rounded-md flex items-center justify-center">
                <span className="mr-2">Pay with</span> <span className="font-bold">VALU</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Checkout;
