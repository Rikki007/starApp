import perksDevide from "./perksDevide.js";

const zodiacItemCreate = (signUnit) => {

    return `
      <div class="description-container">

        <div class="title-wrapper">

          <h3 class="sign__title">${signUnit.name}</h3>
          <p class="sign__date">${signUnit.date}</p>

        </div>

        <div class="common-description-wrapper">

          <div class="pic-disc">

            <img src="${signUnit.sign}" class="common-description__pic" alt="${signUnit.name}"/>

            <div class="common-info-container">
              <p class="common-description__data">${signUnit.description.common}</p>
              <p class="common-description__data">${signUnit.description.archetype.extra}</p>
              <p class="common-description__data">${signUnit.description.archetype.intro}</p>
            </div>
            
          </div>
          
        </div>

        <div class="common-description-wrapper">
          <div class="pic-disc">
            <div class="common-info-container">
              <p class="common-description__data">${signUnit.description.planet}</p>
            </div>
            <img src="${signUnit.planetPic}" class="common-description__pic" alt="${signUnit.planet}"/>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Особенности знака.</h3>
          <div class="perks">${perksDevide(signUnit.description.facts)}</div>
        </div>
        
        <div class="common-description-wrapper">

          <h3 class="sign__title">Мифология</h3>
          <div class="pic-disc">
            <img src="${signUnit.description.mythology.pic}" class="common-description__pic" alt="picture"/>
            <p class="common-description__data">${signUnit.description.mythology.main}</p>
          </div>

          <div class="myth-wrapper">
            <h3 class="sign__title">${signUnit.description.mythology.branch1.title}</h3>
            <div class="pic-disc">
              <p class="common-description__data">${signUnit.description.mythology.branch1.description}</p>
              <img src="${signUnit.description.mythology.branch1.pic}" class="common-description__pic" alt="picture"/>
            </div>
          </div>

          <div class="myth-wrapper">
            <h3 class="sign__title">${signUnit.description.mythology.branch2.title}</h3>
            <div class="pic-disc">
              <img src="${signUnit.description.mythology.branch2.pic}" class="common-description__pic" alt="picture"/>
              <p class="common-description__data">${signUnit.description.mythology.branch2.description}</p>
            </div>
          </div>

          

        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Детство</h3>
          <p class="common-description__data">${signUnit.childhood.description}</p>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Особенности знака.</h3>
            <div class="perks">${perksDevide(signUnit.childhood.perks)}</div>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Школьные годы</h3>
          <p class="common-description__data">${signUnit.schoolboy.description}</p>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Склонности знака.</h3>
            <div class="perks">${perksDevide(signUnit.schoolboy.inclinations)}</div>
          </div>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Особенности знака.</h3>
            <div class="perks">${perksDevide(signUnit.schoolboy.perks)}</div>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Взрослая жизнь.</h3>
          <p class="common-description__data">${signUnit.adult.description}</p>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Особенности знака.</h3>
            <div class="perks">${perksDevide(signUnit.adult.perks)}</div>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Старость.</h3>
          <p class="common-description__data">${signUnit.oldman.description}</p>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Особенности знака.</h3>
            <div class="perks">${perksDevide(signUnit.oldman.perks)}</div>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Работа.</h3>
          <p class="common-description__data">${signUnit.work.description}</p>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Особенности знака.</h3>
            <div class="perks">${perksDevide(signUnit.work.perks)}</div>
          </div>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Подходящие рабочие условия.</h3>
            <div class="perks">${perksDevide(signUnit.work.conditions)}</div>
          </div>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Подходящие профессии.</h3>
            <div class="perks">${perksDevide(signUnit.work.professions)}</div>
          </div>
        </div>

        <div class="common-description-wrapper">
          <h3 class="sign__title">Отношения.</h3>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Романтические.</h3>
            <p class="common-description__data">${signUnit.relationships.romantic.description}</p>
          </div>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Дружба.</h3>
            <p class="common-description__data">${signUnit.relationships.friend.description}</p>
          </div>
          <div class="common-description-wrapper start-wrapper">
            <h3 class="sign__title">Вражда.</h3>
            <p class="common-description__data">${signUnit.relationships.foe.description}</p>
          </div>
        </div>
      
      <div/>
  `
}

export default zodiacItemCreate;