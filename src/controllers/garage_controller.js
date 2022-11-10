import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["carsList"]

  connect() {
    const garageUrl = "https://wagon-garage-api.herokuapp.com/12cargarage/cars"
    console.log("hello from garage controller!")
    fetch(garageUrl)
      .then(response => response.json())
      .then((data) => {
        const cars = data
        cars.forEach(car => {
          this.insertCarCard(car)
        });
      })
    };
  insertCarCard(car){
    const card = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`
    this.carsListTarget.insertAdjacentHTML("afterbegin", card )
  }
}
