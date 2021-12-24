//////////////////////////////////////////////////////////////////////////// Main Code //////////////////////////////////////////////////////////////////////
import('/data.js')
    .then((data) => {
        mainFunction(data);
    });

function mainFunction(data) {
    const all = data.data();
    const destinations = all.destinations;
    const crew = all.crew;
    const tech = all.technology;

    destPage(destinations);
    crewPage(crew);
    techPage(tech);
}


//////////////////////////////////////////////////////////////////////////// Destination Page //////////////////////////////////////////////////////////////////////

function destPage(dest) {
    const detalsContainer = document.getElementById('details');
    const img_container = document.getElementById('pick');
    dest.forEach(element => {

        detalsContainer.insertAdjacentHTML('beforeend',
            `<div class="tab" id="${element.name}">
        <h1>${element.name}</h1>
        <p>${element.description}</p>
        <hr />
        <div class="numbers">
            <div class="col">
                <h5> Avg. distance</h5>
                <h3>${element.distance}</h3>
            </div>
            <div class="col">
                <h5> Est. travel time</h5>
                <h3>${element.travel}</h3>
            </div>
        </div>
        </div>`
        );

        img_container.insertAdjacentHTML('beforeend',
            `<img src="${element.images.png}" alt="" class="destimgs" id="img-${element.name}">`
        );
    });

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaulttab").click();

}


//////////////////////////////////////////////////////////////////////////// Crew Page //////////////////////////////////////////////////////////////////////

function crewPage(crew) {
    const crewContainer = document.getElementById('member');
    const img_container = document.getElementById('imgContainer');

    for (let i = 0; i < crew.length; i++) {
        crewContainer.insertAdjacentHTML('beforeend',
            `<div class="info" id="inf${i}">
          <h3>${crew[i].role}</h3>
          <h1> ${crew[i].name}</h1>
          <p>${crew[i].bio}</p>
        </div>`);
        img_container.insertAdjacentHTML('beforeend',
            `<img src="${crew[i].images.png}" alt="" class="crew-imgs" id="img${i}">`
        );
    }

    crewContainer.insertAdjacentHTML('beforeend',
        `<div class="slide-btns">
    <button class="mem-btn active" onclick="(showMember(event,0))" id="defualtmember"></button>
    <button class="mem-btn" onclick="(showMember(event,1))"></button>
    <button class="mem-btn" onclick="(showMember(event,2))"></button>
    <button class="mem-btn" onclick="(showMember(event,3))"></button>
  </div>`);

    document.getElementById('defualtmember').click();
}


//////////////////////////////////////////////////////////////////////////// Technology Page //////////////////////////////////////////////////////////////////////

function techPage(tech) {
    const techContainer = document.getElementById('techinfo');
    const img_container = document.getElementById('techimgcontainer');

    for (let i = 0; i < tech.length; i++) {
        techContainer.insertAdjacentHTML('afterbegin',
            `<div class="slide-info" id="t-info-id${i}">
            <h5>The terminology...</h5>
            <h1>Space capsule</h1>
            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
              capsule to reenter the Earth's atmosphere without wings. Our capsule is where
              you'll spend your time during the flight. It includes a space gym, cinema,
              and plenty of other activities to keep you entertained.</p>
          </div>`);
        techContainer.insertAdjacentHTML('beforeend',
            `<img src="${tech[i].images.portrait}" alt="" class="tech-imgs" id="t-img${i}">`
        );
    }

    techContainer.insertAdjacentHTML('afterbegin',
    `<div class="slide-controllers">
    <button class="slidebtn active" onclick="showTich(event,0)" id="defualttech">1</button>
    <button class="slidebtn" onclick="showTich(event,1)">2</button>
    <button class="slidebtn" onclick="showTich(event,2)">3</button>
   </div>`);

   document.getElementById('defualttech').click();
}