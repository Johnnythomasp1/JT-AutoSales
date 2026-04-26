const DEALER_EMAIL = "dealer@jtautosales.com";

const cars = [
  {
    name: "2025 Toyota Camry XSE",
    img: "img/camry hybrid.jpeg",
    desc: "Hybrid sedan with great fuel economy, wireless CarPlay and Toyota Safety Sense 3.0.",
    engine: "2.5L Hybrid",
    miles: "12,400 mi",
    trans: "CVT Auto",
    color: "Blue",
    price: 33000,
    financing: true,
    downpayment: 1500,
    monthly: 520
  },
  {
    name: "2021 Cadillac Escalade Sport",
    img: "img/escalade.jpeg",
    desc: "6.2L V8 with Magnetic Ride Control, 22-inch wheels and Super Cruise.",
    engine: "6.2L V8 420hp",
    miles: "38,200 mi",
    trans: "10-Speed Auto",
    color: "Black",
    price: 53500,
    financing: false,
    downpayment: 0,
    monthly: 0
  },
  {
    name: "2022 Porsche Cayenne S",
    img: "img/porsche cayenne.jpeg",
    desc: "Luxury performance SUV with twin-turbo V6.",
    engine: "2.9L TT V6",
    miles: "21,800 mi",
    trans: "8-Speed Auto",
    color: "Gray",
    price: 45000,
    financing: true,
    downpayment: 5000,
    monthly: 750
  },
  {
    name: "2023 BMW M3 Competition",
    img: "img/bmw m3 island.jpeg",
    desc: "High performance sedan with AWD and 500+ horsepower.",
    engine: "3.0L TT I-6",
    miles: "8,100 mi",
    trans: "Auto",
    color: "Green",
    price: 89000,
    financing: true,
    downpayment: 10000,
    monthly: 1390
  },
  {
    name: "2020 Ford Mustang GT500",
    img: "img/mustang.jpeg",
    desc: "Supercharged V8 with extreme performance.",
    engine: "5.2L V8",
    miles: "14,900 mi",
    trans: "DCT",
    color: "Black",
    price: 35000,
    financing: true,
    downpayment: 5000,
    monthly: 650
  },
  {
    name: "2022 Mercedes GLE 63 AMG",
    img: "img/amg obsidian.jpeg",
    desc: "Luxury SUV with powerful V8 engine.",
    engine: "4.0L V8",
    miles: "19,300 mi",
    trans: "Auto",
    color: "Black",
    price: 70000,
    financing: true,
    downpayment: 7000,
    monthly: 1050
  },
  {
    name: "2021 Macan GTS",
    img: "img/macan gts.jpeg",
    desc: "Sporty compact SUV with great handling.",
    engine: "2.9L V6",
    miles: "28,700 mi",
    trans: "Auto",
    color: "Red",
    price: 41000,
    financing: true,
    downpayment: 3000,
    monthly: 640
  },
  {
    name: "2023 Tesla Model 3 Performance",
    img: "img/Tesla Blue.jpeg",
    desc: "Electric car with fast acceleration and long range.",
    engine: "Electric AWD",
    miles: "11,600 mi",
    trans: "Single-Speed",
    color: "Blue",
    price: 32000,
    financing: true,
    downpayment: 2000,
    monthly: 500
  },
  {
    name: "2025 Ford Explorer Sport",
    img: "img/explorer.jpeg",
    desc: "Spacious SUV with strong performance.",
    engine: "3.0L V6",
    miles: "44,200 mi",
    trans: "Auto",
    color: "Black",
    price: 45000,
    financing: true,
    downpayment: 4000,
    monthly: 700
  },
  {
    name: "2022 Range Rover Sport",
    img: "img/rover.jpg",
    desc: "Luxury SUV with off-road capability.",
    engine: "3.0L I-6",
    miles: "17,500 mi",
    trans: "Auto",
    color: "Black",
    price: 45000,
    financing: true,
    downpayment: 6000,
    monthly: 650
  }
];

let currentCar = null;

function renderCars() {
  let html = "";

  for (let i = 0; i < cars.length; i++) {
    let c = cars[i];

    let priceInfo = "";
    if (c.financing) {
      priceInfo = "From $" + c.downpayment + " down · $" + c.monthly + "/mo";
    } else {
      priceInfo = "Cash only";
    }

    let tagClass = c.financing ? "yes" : "no";
    let tagText = c.financing ? "Financing" : "Cash Only";

    html += `
      <div class="car-card">
        <div class="thumb">
          <img src="${c.img}" alt="${c.name}">
          <span class="tag ${tagClass}">${tagText}</span>
        </div>
        <div class="car-body">
          <h3>${c.name}</h3>
          <div class="car-specs">
            <span class="spec">${c.engine}</span>
            <span class="spec">${c.miles}</span>
            <span class="spec">${c.trans}</span>
          </div>
          <div class="car-bottom">
            <div>
              <div class="car-price">$${c.price}</div>
              <div class="car-down">${priceInfo}</div>
            </div>
            <button class="btn-view" onclick="openModal(${i})">View Details</button>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById("carsGrid").innerHTML = html;
}

function openModal(i) {
  currentCar = cars[i];

  document.getElementById("m-img").src = currentCar.img;
  document.getElementById("m-name").textContent = currentCar.name;
  document.getElementById("m-price").textContent = "$" + currentCar.price;
  document.getElementById("m-desc").textContent = currentCar.desc;

  document.getElementById("m-specs").innerHTML = `
    <div class="mspec"><strong>Engine</strong>${currentCar.engine}</div>
    <div class="mspec"><strong>Miles</strong>${currentCar.miles}</div>
    <div class="mspec"><strong>Transmission</strong>${currentCar.trans}</div>
    <div class="mspec"><strong>Color</strong>${currentCar.color}</div>
  `;

  if (currentCar.financing) {
    document.getElementById("m-fin").innerHTML = `
      <div class="fin-text">
        <h4>Financing Available</h4>
        <p>Down $${currentCar.downpayment} · $${currentCar.monthly}/mo</p>
      </div>
    `;
  } else {
    document.getElementById("m-fin").innerHTML = `
      <div class="fin-text">
        <h4>Cash Only</h4>
      </div>
    `;
  }

  document.getElementById("overlay").classList.add("open");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
}

function sendInquiry() {
  let name = document.getElementById("mc-name").value;
  let email = document.getElementById("mc-email").value;

  if (name === "" || email === "") {
    alert("Please enter name and email");
    return;
  }

  let subject = "Car: " + currentCar.name;
  let body = "Name: " + name + "\nEmail: " + email;

  window.location.href =
    "mailto:" + DEALER_EMAIL +
    "?subject=" + subject +
    "&body=" + body;
}

function sendGeneral() {
  let name = document.getElementById("g-name").value;
  let email = document.getElementById("g-email").value;
  let msg = document.getElementById("g-msg").value;

  if (name === "" || email === "" || msg === "") {
    alert("Please fill all fields");
    return;
  }

  let subject = "General Inquiry";
  let body = "Name: " + name + "\nEmail: " + email + "\n\n" + msg;

  window.location.href =
    "mailto:" + DEALER_EMAIL +
    "?subject=" + subject +
    "&body=" + body;
}

renderCars();