exports.getProducts = (req, res) => {
  const DUMMY_PRODUCTS = [
    {
      "id": "EPAYTEST",
      "productImage": "http://dummyimage.com/231x100.png/cc0000/ffffff",
      "name": "Twinder",
      "description": "Implantation of electromagnetic hearing device",
      "price": 265
    },
    {
      "id": "b74b4c37-5bb8-45c7-bb0d-88387b264059",
      "productImage": "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
      "name": "Twiyo",
      "description": "Injection or infusion of oxazolidinone class of antibiotics",
      "price": 2558
    },
    {
      "id": "e886eda1-8d4f-4a11-86ee-5786fc7f5646",
      "productImage": "http://dummyimage.com/196x100.png/dddddd/000000",
      "name": "Camido",
      "description": "Closed [transurethral] biopsy of bladder",
      "price": 6671
    },
    {
      "id": "839390cb-2e68-4df4-907d-ca31b4db6434",
      "productImage": "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
      "name": "Lazzy",
      "description": "Scraping of cornea for smear or culture",
      "price": 3069
    },
    {
      "id": "f217f5c1-21d0-4f29-ab7c-9fecd34731b5",
      "productImage": "http://dummyimage.com/114x100.png/5fa2dd/ffffff",
      "name": "Kazio",
      "description": "Microscopic examination of specimen from liver, biliary tract, and pancreas, parasitology",
      "price": 6349
    },
    {
      "id": "e01136de-43b7-42fb-9569-55d6e0cc187e",
      "productImage": "http://dummyimage.com/238x100.png/cc0000/ffffff",
      "name": "Leexo",
      "description": "Insertion of skull plate",
      "price": 7069
    },
    {
      "id": "5b089db1-a811-48cb-b832-04939aba274f",
      "productImage": "http://dummyimage.com/246x100.png/5fa2dd/ffffff",
      "name": "Browseblab",
      "description": "Local excision of esophageal diverticulum",
      "price": 3862
    },
    {
      "id": "3141529b-43a3-492a-bce3-6537bafa6292",
      "productImage": "http://dummyimage.com/104x100.png/ff4444/ffffff",
      "name": "Jabbercube",
      "description": "Other procedures for creation of esophagogastric sphincteric competence",
      "price": 4526
    },
    {
      "id": "0c5e0ede-57f9-4cc3-a7a4-adf830184244",
      "productImage": "http://dummyimage.com/234x100.png/5fa2dd/ffffff",
      "name": "Aimbu",
      "description": "Other revision of exenteration cavity",
      "price": 8290
    } 
  ]
  
  res.status(200).send({ success: true, products: DUMMY_PRODUCTS })
}