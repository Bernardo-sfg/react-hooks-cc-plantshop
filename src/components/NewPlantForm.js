import { useState } from 'react'

function NewPlantForm() {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:6001/plants', {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
        name: name,
        image: img,
        price: price,
        inStock: true
      })
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setName(e.target.value)} value={name} name="name" placeholder="Plant name" />
        <input type="text" onChange={e => setImg(e.target.value)} value={img} name="image" placeholder="Image URL" />
        <input type="number"onChange={e => setPrice(e.target.value)} value={price} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
