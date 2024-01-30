const crypto = require("node:crypto")

const { ESEWA_SECRET } = process.env

 const generateSignature = message => {
  const hash = crypto.createHmac("sha256", ESEWA_SECRET)
  const hashInBase64 = hash.update(message).digest("base64")

  return hashInBase64
}

exports.buyProduct = (req, res) => {
  const message = req.body.signedInput
  const signature = generateSignature(message)

  res.status(200).send({ success: true, signature })
}