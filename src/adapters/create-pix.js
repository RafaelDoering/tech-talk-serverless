"use strict";
const MercadoPagoPaymentService = require("./mercado-pago-payment-service")

const paymentService = new MercadoPagoPaymentService(process.env.MERCADO_PAGO_ACCESS_TOKEN);

module.exports.handler = async (event) => {
  const data = JSON.parse(event.body)

  let pix = await paymentService.createPix(
    data.amount,
    data.email,
    data.description,
  );

  return {
    statusCode: 200,
    body: JSON.stringify(pix),
  };
};
