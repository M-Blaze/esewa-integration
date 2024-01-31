const useEsewa = () => {
  const proceedToBuy = async (product) => {
    const response = await fetch("/esewa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product }),
    })

    const { success, payload, esewaLink } = await response.json()

    if (!success) {
      return alert('error')
    }

    createEsewaFormAndSubmit(payload, esewaLink)
  }

  const createEsewaFormAndSubmit = (payload, esewaLink) => {
    const esewaForm = document.createElement('form')

    esewaForm.setAttribute("method", "POST");
    esewaForm.setAttribute("action", esewaLink);

    for (const field in payload) {
      const input = document.createElement("input")

      input.type = "hidden"
      input.id = field
      input.name = field
      input.setAttribute("value", payload[field])
      input.required = true
      esewaForm.appendChild(input)
    }
    
    document.body.appendChild(esewaForm)
    esewaForm.submit()
  }
  
  return [proceedToBuy]
}

export default useEsewa