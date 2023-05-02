# Challenge 3 - Costão do Santinho - Omnibees

## Open the html with Live Server: `challenge-3/costao_do_santinho.html`

You need to get the data from the HTML with pure JS and create an array of objects like the example below (example for first room (only first price is needed)):

```json
    const rooms = [
        {
            "name": "Superior",
            "description": "Quarto padrão hoteleiro, localizado na Vilas Portuguesas, com vista para os jardins do resort, banheiro, frigobar, ar-condicionado, TV a cab...", // can be just what is seen in the page
            "price": "R$ 2.639,10", // price formated this way (currency symbol first, dot as thousand separator and comma as decimal separator)
            "amenities": ["ar condicionado", "frigobar", "telefone"], // amenities array must be sorted alphabetically and all lowercase.
            "numberOfNights": 2, // number (not string)
            "area": 25, // only number (not string)
            "imageUrl": "https://media.omnibees.com/Images/4937/RoomTypes/246x197/485801.jpg"
        }
    ]

```

- Cannot touch HTML. Just using pure JS.
- Print to console
