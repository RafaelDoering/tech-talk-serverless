const axios = require("axios");

module.exports = class MercadoPagoPaymentService {
  accessToken;

  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  async createPix(
    amount,
    email,
    description,
  ){
    const paymentData = {
      transaction_amount: amount,
      description: description,
      payment_method_id: 'pix',
      installments: null,
      payer: {
        email: email,
      },
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`,
    }

    const {data: createPaymentResponse} = await axios.post(
      'https://api.mercadopago.com/v1/payments',
      paymentData, {
      headers: headers
    });

    return {
      id: createPaymentResponse.id,
      qrCode: createPaymentResponse.point_of_interaction.transaction_data.qr_code,
      qrCodeBase64: createPaymentResponse.point_of_interaction.transaction_data.qr_code_base64,
    };
  }
}