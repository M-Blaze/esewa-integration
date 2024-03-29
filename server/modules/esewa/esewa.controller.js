const uuid = require('uuid')
const crypto = require("node:crypto")

const { ESEWA_SECRET, ESEWA_LINK } = process.env
const SIGNED_FIELDS = ["total_amount", "transaction_uuid", "product_code"]

const generateSignature = (message) => {
  const hash = crypto.createHmac("sha256", ESEWA_SECRET)

  hash.update(message)
  const hashInBase64 = hash.digest("base64")

  return hashInBase64
}

const checkIfValuesOfSignatureArePresent = (product) => {
  for (const field of SIGNED_FIELDS) {
    if (!product[field]) return false
  }

  return true
}

const generateSignedInput = (product) => {
  const signedInputs = SIGNED_FIELDS.map(field => {
    return `${field}=${product[field]}`
  })

  return signedInputs.join(",")
}

exports.getEsewaPayload = (req, res) => {
  const product = req.body

  product.transaction_uuid = uuid.v4()
  if (!checkIfValuesOfSignatureArePresent(product)) {
    return res.status(400).send({ success: false, message: "Values unmet" })
  }

  const signedInput = generateSignedInput(product)

  product.signature = generateSignature(signedInput)
  res.status(200).send({ success: true, formData: product, esewaLink: ESEWA_LINK })
}

exports.updateOrderToCompleted = (req, res) => {
  const base64Input = req.params.base64Input
  const decodedInput = decodeBase64ToASCII(base64Input)

  res.status(200).send({ success: true, decodedInput })
}

const decodeBase64ToASCII = (base64Input) => {
  const decodedValue = Buffer.from(base64Input, 'base64').toString('ascii')

  return decodedValue
}