export default [
  {
    id: 1,
    name: {
      en: "Mercury",
      ru: "Меркурий",
    },
    radius: {
      value: 2439.7,
      multiply: 0.38,
    },
    weight: {
      value: 3.3e23,
      multiply: 1,
    },
    distance: 57909175,
    day_length: {
      days: 0,
      hours: 176,
      minutes: 0,
    },
    satellite_count: {
      count: 0,
      names: [],
    },
    temperature: {
      min: -180,
      max: 430,
    },
    description: {
      en: "Mercury is the smallest planet in the Solar System and the closest to the Sun. It has a heavily cratered surface resembling that of the Moon and possesses a very thin atmosphere known as an exosphere. Mercury has no moons and experiences extreme temperature fluctuations.",
      ru: "Меркурий — самая маленькая планета в Солнечной системе и ближайшая к Солнцу. У него сильно кратеризированная поверхность, напоминающая поверхность Луны, и очень тонкая атмосфера, известная как экзосфера. У Меркурия нет луны, и он испытывает экстремальные колебания температуры.",
    },
    rotation_period: {
      hours: 1407.6,
      days: 58.65,
    },
  },
  {
    id: 2,
    name: {
      en: "Venus",
      ru: "Венера",
    },
    radius: {
      value: 6051.8,
      multiply: 0.95,
    },
    weight: {
      value: 4.867e24,
      multiply: 1,
    },
    distance: 108208000,
    day_length: {
      days: 0,
      hours: 243,
      minutes: 0,
    },
    satellite_count: {
      count: 0,
      names: [],
    },
    temperature: {
      min: 462,
      max: 462,
    },
    description: {
      en: "Venus is the second planet from the Sun and is similar in structure and size to Earth, often referred to as Earth's 'sister planet.' It has a thick, toxic atmosphere primarily composed of carbon dioxide, with clouds of sulfuric acid, making it the hottest planet in the Solar System.",
      ru: "Венера — вторая планета от Солнца и похожа по структуре и размеру на Землю, часто называемая 'сестрой Земли'. У нее толстая токсичная атмосфера, в основном состоящая из углекислого газа, с облаками серной кислоты, что делает ее самой горячей планетой в Солнечной системе.",
    },
    rotation_period: {
      hours: -5832.5,
      days: 243,
    },
  },
  {
    id: 3,
    name: {
      en: "Earth",
      ru: "Земля",
    },
    radius: {
      value: 6371,
      multiply: 1,
    },
    weight: {
      value: 5.9722e24,
      multiply: 1,
    },
    distance: 149600000,
    day_length: {
      days: 1,
      hours: 0,
      minutes: 0,
    },
    satellite_count: {
      count: 1,
      names: [
        {
          en: "Moon",
          ru: "Луна",
        },
      ],
    },
    temperature: {
      min: -88,
      max: 58,
    },
    description: {
      en: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has a diverse climate and geography, with a surface covered in approximately 71% water.",
      ru: "Земля — третья планета от Солнца и единственный известный астрономический объект, на котором существует жизнь. Она имеет разнообразный климат и географию, а её поверхность покрыта примерно на 71% водой.",
    },
    rotation_period: {
      hours: 23.93,
      days: 1,
    },
  },
  {
    id: 4,
    name: {
      en: "Mars",
      ru: "Марс",
    },
    radius: {
      value: 3389,
      multiply: 0.53,
    },
    weight: {
      value: 6.4171e23,
      multiply: 1,
    },
    distance: 227940000,
    day_length: {
      days: 1,
      hours: 1,
      minutes: 37,
    },
    satellite_count: {
      count: 2,
      names: [
        {
          en: "Phobos",
          ru: "Фобос",
        },
        {
          en: "Deimos",
          ru: "Деймос",
        },
      ],
    },
    temperature: {
      min: -153,
      max: 35,
    },
    description: {
      en: "Mars is the fourth planet from the Sun and is known for its reddish appearance due to iron oxide on its surface. It has a thin atmosphere and features the largest volcano and canyon in the solar system.",
      ru: "Марс является четвертой планетой от Солнца и известен своим красноватым внешним видом из-за оксида железа на его поверхности. Он имеет тонкую атмосферу и имеет самый большой вулкан и каньон в Солнечной системе.",
    },
    rotation_period: {
      hours: 24.623,
      days: 1,
    },
  },
  {
    id: 5,
    name: {
      en: "Jupiter",
      ru: "Юпитер",
    },
    radius: {
      value: 69911,
      multiply: 11.209,
    },
    weight: {
      value: 1.8982e27,
      multiply: 318,
    },
    distance: 778479000,
    day_length: {
      days: 0,
      hours: 9,
      minutes: 55,
    },
    satellite_count: {
      count: 95,
      names: [
        {
          en: "Io",
          ru: "Ио",
        },
        {
          en: "Europa",
          ru: "Европа",
        },
        {
          en: "Ganymede",
          ru: "Ганимед",
        },
        {
          en: "Callisto",
          ru: "Калисто",
        },
        {
          en: "Amalthea",
          ru: "Амальтея",
        },
        {
          en: "Himalia",
          ru: "Гималия",
        },
        {
          en: "Elara",
          ru: "Элара",
        },
        {
          en: "Pasiphae",
          ru: "Пасифая",
        },
        {
          en: "Thebe",
          ru: "Теба",
        },
        {
          en: "Adrastea",
          ru: "Адрастея",
        },
        {
          en: "Metis",
          ru: "Метида",
        },
        {
          en: "Leda",
          ru: "Леда",
        },
        {
          en: "Callirrhoe",
          ru: "Каллирхоя",
        },
      ],
    },
    temperature: {
      min: -145,
      max: -108,
    },
    description: {
      en: "Jupiter is the largest planet in the Solar System, known for its Great Red Spot and prominent bands of clouds. It is a gas giant primarily composed of hydrogen and helium, with a strong magnetic field and numerous moons.",
      ru: "Юпитер — самая большая планета в Солнечной системе, известная своим Большим Красным Пятном и ярко выраженными облачными полосами. Это газовый гигант, в основном состоящий из водорода и гелия, с сильным магнитным полем и множеством луны.",
    },
    rotation_period: {
      hours: 9.84,
      days: 0,
    },
  },
  {
    id: 6,
    name: {
      en: "Saturn",
      ru: "Сатурн",
    },
    radius: {
      value: 58232,
      multiply: 9.449,
    },
    weight: {
      value: 5.683e26,
      multiply: 95,
    },
    distance: 1427000000,
    day_length: {
      days: 0,
      hours: 10,
      minutes: 42,
    },
    satellite_count: {
      count: 118,
      names: [
        {
          en: "Titan",
          ru: "Титан",
        },
        {
          en: "Rhea",
          ru: "Рея",
        },
        {
          en: "Iapetus",
          ru: "Япет",
        },
        {
          en: "Dione",
          ru: "Диона",
        },
        {
          en: "Tethys",
          ru: "Тетис",
        },
        {
          en: "Enceladus",
          ru: "Энцелад",
        },
        {
          en: "Mimas",
          ru: "Мимас",
        },
        {
          en: "Hyperion",
          ru: "Гиперион",
        },
        {
          en: "Pan",
          ru: "Пан",
        },
        {
          en: "Atlas",
          ru: "Атлас",
        },
        {
          en: "Prometheus",
          ru: "Прометей",
        },
        {
          en: "Pandora",
          ru: "Пандора",
        },
        {
          en: "Epimetheus",
          ru: "Эпиметей",
        },
        {
          en: "Janus",
          ru: "Янус",
        },
        {
          en: "Telesto",
          ru: "Телесто",
        },
        {
          en: "Calypso",
          ru: "Калипсо",
        },
        {
          en: "Helene",
          ru: "Элене",
        },
        {
          en: "Polydeuces",
          ru: "Полидевки",
        },
        {
          en: "Methone",
          ru: "Метон",
        },
        {
          en: "Anthe",
          ru: "Антей",
        },
        {
          en: "Pallene",
          ru: "Паллен",
        },
      ],
    },
    temperature: {
      min: -178,
      max: -133,
    },
    description: {
      en:
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, known for its stunning ring system composed primarily of ice particles and rocky debris." +
        "It has a thick atmosphere mainly made of hydrogen and helium, with strong winds and a complex weather system.",
      ru:
        "Сатурн — шестая планета от Солнца и вторая по величине в Солнечной системе, известная своей потрясающей системой колец." +
        "У него плотная атмосфера, состоящая в основном из водорода и гелия, с сильными ветрами и сложной погодной системой.",
    },
    rotation_period: {
      hours: 10.7,
      days: 0,
    },
  },
  {
    id: 7,
    name: {
      en: "Uranus",
      ru: "Уран",
    },
    radius: {
      value: 50724,
      multiply: 3.88,
    },
    weight: {
      value: 8.681e25,
      multiply: 14.5,
    },
    distance: 2870680000,
    day_length: {
      days: 0,
      hours: 17,
      minutes: 14,
    },
    satellite_count: {
      count: 28,
      names: [
        {
          en: "Ariel",
          ru: "Ариэль",
        },
        {
          en: "Umbriel",
          ru: "Умбриэль",
        },
        {
          en: "Titania",
          ru: "Титания",
        },
        {
          en: "Oberon",
          ru: "Оберон",
        },
        {
          en: "Miranda",
          ru: "Миранда",
        },
        {
          en: "Cordelia",
          ru: "Корделия",
        },
        {
          en: "Ophelia",
          ru: "Офелия",
        },
        {
          en: "Bianca",
          ru: "Бианка",
        },
        {
          en: "Cressida",
          ru: "Крессида",
        },
        {
          en: "Desdemona",
          ru: "Джэззэбелла",
        },
        {
          en: "Juliet",
          ru: "Джульетта",
        },
        {
          en: "Portia",
          ru: "Порция",
        },
        {
          en: "Rosalind",
          ru: "Розалинда",
        },
        {
          en: "Belinda",
          ru: "Белинда",
        },
        {
          en: "Puck",
          ru: "Пук",
        },
        {
          en: "Caliban",
          ru: "Калибан",
        },
        {
          en: "Sycorax",
          ru: "Сикоракса",
        },
        {
          en: "Prospero",
          ru: "Просперо",
        },
        {
          en: "Setebos",
          ru: "Сетебос",
        },
        {
          en: "Stephano",
          ru: "Стефано",
        },
        {
          en: "Trinculo",
          ru: "Тринкуло",
        },
        {
          en: "Francisco",
          ru: "Франциско",
        },
        {
          en: "Margaret",
          ru: "Маргарет",
        },
        {
          en: "Ferdinand",
          ru: "Фердинанд",
        },
        {
          en: "Perdita",
          ru: "Пердита",
        },
        {
          en: "Mab",
          ru: "Мэб",
        },
        {
          en: "Cupid",
          ru: "Купидон",
        },
      ],
    },
    temperature: {
      min: -224,
      max: -197,
    },
    description: {
      en:
        "Uranus is the seventh planet from the Sun and is classified as an ice giant due to its composition." +
        "It has a unique axial tilt of about 98 degrees, causing extreme seasonal variations." +
        "Uranus has a faint ring system and is known for its blue-green color.",
      ru:
        "Уран — седьмая планета от Солнца и классифицируется как ледяной гигант из-за своего состава." +
        "У него уникальный наклон оси примерно на 98 градусов, что вызывает экстремальные сезонные изменения." +
        "У Урана есть тусклая система колец." +
        "Он известен своим голубовато-зеленым цветом." +
        "Который возникает из-за метана в его атмосфере.",
    },
    rotation_period: {
      hours: 17.24,
      days: 17,
    },
  },
  {
    id: 8,
    name: {
      en: "Neptune",
      ru: "Нептун",
    },
    radius: {
      value: 24622,
      multiply: 3.88,
    },
    weight: {
      value: 1.024e26,
      multiply: 17.15,
    },
    distance: 4498252900,
    day_length: {
      days: 16,
      hours: 16,
      minutes: 6,
    },
    satellite_count: {
      count: 16,
      names: [
        {
          en: "Triton",
          ru: "Тритон",
        },
        {
          en: "Nereid",
          ru: "Нереида",
        },
        {
          en: "Naiad",
          ru: "Наяда",
        },
        {
          en: "Thalassa",
          ru: "Таласа",
        },
        {
          en: "Despina",
          ru: "Деспина",
        },
        {
          en: "Galatea",
          ru: "Галатея",
        },
        {
          en: "Larissa",
          ru: "Ларисса",
        },
        {
          en: "Proteus",
          ru: "Протей",
        },
        {
          en: "Halimede",
          ru: "Алимеда",
        },
        {
          en: "Psamathe",
          ru: "Псамафа",
        },
        {
          en: "Sao",
          ru: "Сао",
        },
        {
          en: "Laomedeia",
          ru: "Лаомедея",
        },
        {
          en: "Neso",
          ru: "Несо",
        },
        {
          en: "Hippocamp",
          ru: "Гиппокамп",
        },
      ],
    },
    temperature: {
      min: -218,
      max: -200,
    },
    description: {
      en:
        "Neptune is the eighth and farthest planet from the Sun," +
        "known as an ice giant due to its composition of water," +
        "ammonia," +
        "and methane." +
        "It has a striking blue color resulting from methane in its atmosphere," +
        "and is characterized by supersonic winds that can reach speeds of up to" +
        "2,100 km/h (1,300 mph)." +
        "Neptune takes about" +
        "165 Earth years to complete one orbit around the Sun.",
      ru:
        "Нептун — восьмая и самая дальняя планета от Солнца," +
        "известная как ледяной гигант из-за своего состава," +
        "состоящего из воды," +
        "аммиака" +
        "и метана." +
        "У него ярко-синий цвет," +
        "который возникает из-за метана в атмосфере," +
        "и он характеризуется супервысокими ветрами," +
        "которые могут достигать скорости до" +
        "2100 км/ч (1300 миль/ч)." +
        "Нептун делает полный оборот вокруг Солнца примерно за" +
        "165 земных лет.",
    },
    rotation_period: {
      hours: 16,
      days: 16,
    },
  },
];
