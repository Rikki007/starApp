import perksDevide from "./perksDevide.js";

const zodiacItemCreate = (signUnit) => {

    return `
      <div class="description-container">

        <div class="title-wrapper">
          <h3 class="sign__title">${signUnit.name}</h3>
          <p class="sign__date">${signUnit.date}</p>
        </div>

        <div class="common-description-wrapper">
          <img src="${signUnit.sign}" class="common-description__pic" alt="${signUnit.name}"/>
          <p class="common-description__data">${signUnit.description.common}</p>
          <p class="common-description__data">${signUnit.description.archetype.extra}</p>
          <p class="common-description__data">${signUnit.description.archetype.intro}</p>
        </div>

        <div class="common-description-wrapper">
          <p class="common-description__data">${signUnit.description.planet}</p>
          <img src="${signUnit.planetPic}" class="common-description__pic" alt="${signUnit.planet}"/>
        </div>
        
        <div class="common-description-wrapper">

          <h3 class="sign__title">Мифология</h3>
          <img src="${signUnit.description.mythology.pic}" class="common-description__pic" alt="picture"/>
          <p class="common-description__data">${signUnit.description.mythology.main}</p>

          <div class="myth-wrapper">
            <h3 class="sign__title">${signUnit.description.mythology.branch1.title}</h3>
            <p class="common-description__data">${signUnit.description.mythology.branch1.description}</p>
            <img src="${signUnit.description.mythology.branch1.pic}" class="common-description__pic" alt="picture"/>
          </div>

          <div class="myth-wrapper">
            <h3 class="sign__title">${signUnit.description.mythology.branch2.title}</h3>
            <img src="${signUnit.description.mythology.branch2.pic}" class="common-description__pic" alt="picture"/>
            <p class="common-description__data">${signUnit.description.mythology.branch2.description}</p>
          </div>

          <div class="perks">${perksDevide(signUnit.description.facts)}</div>

        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Детство</h3>
          <p class="common-description__data">${signUnit.childhood.description}</p>
          <div class="perks">${perksDevide(signUnit.childhood.perks)}</div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Школьные годы</h3>
          <p class="common-description__data">${signUnit.schoolboy.description}</p>
          <div class="perks">${perksDevide(signUnit.schoolboy.inclinations)}</div>
          <div class="perks">${perksDevide(signUnit.schoolboy.perks)}</div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title"></h3>
          <p class="common-description__data"></p>
          <div class="perks"></div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title"></h3>
          <p class="common-description__data"></p>
          <div class="perks"></div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title"></h3>
          <p class="common-description__data"></p>
          <div class="perks"></div>
          <div class="perks"></div>
          <div class="perks"></div>
        </div>
      
      <div/>
  `
}

export default zodiacItemCreate;