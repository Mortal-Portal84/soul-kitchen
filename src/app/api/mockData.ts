import { Category, Recipe, Unit } from "@/app/models"

const recipes: Recipe[] = [
  {
    id: "1",
    name: "Блинчики",
    description: "Вкусные супер-блинчики без яиц",
    image: "https://img.iamcook.ru/old/upl/recipes/cat/u-b83b2d7709b7107444f1115876015289.JPG",
    authorId: "1213123",
    category: Category.baking,
    ingredients: [
      {
        id: '2',
        name: 'Молоко',
        count: 2,
        unit: Unit.glass
      },
      {
        id: '3',
        name: 'Мука',
        count: 1,
        unit: Unit.glass
      },
      {
        id: '4',
        name: 'Сода',
        count: 0.5,
        unit: Unit.spoon
      },
      {
        id: '5',
        name: 'Соль',
        count: 3,
        unit: Unit.gram
      },
      {
        id: '6',
        name: 'Сахар',
        count: 2,
        unit: Unit.spoon
      },
      {
        id: '7',
        name: 'Масло растительное',
        count: 50,
        unit: Unit.ml
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/d431729458f9d908d4debe45a34279b4.jpg',
        text: 'В молоко добавить муку, сахар, соль и соду. Все размешать венчиком. Дать тесту постоять 30 минут',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/29c3842a15ea6919093869e20cdeea82.jpg',
        text: 'В готовое тесто влить растительное масло',
      },
      {
        id: '16',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/3a429d8350abf65373b0032c5aeceaa4.jpg',
        text: 'На заранее разогретую сковороду вылить 1 половник теста и распределить тесто по сковороде равномерно. Жарить на маленьком огне около 2 минут',
      },
      {
        id: '17',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/885f42ef91cbb2e54e99079379ee5420.jpg',
        text: 'Аккуратно поддеть блинчик лопаткой и перевернуть на другую сторону, выпекать  минуту. Готовый блинчик выложить на тарелку. По желанию можно покрыть сверху сливочным маслом',
      },
    ]
  },
  {
    id: "2",
    name: "Салат из капусты со свёклой",
    description: "Самый простой, но очень вкусный и полезный салат из капусты со свёклой быстрого приготовления",
    image: "https://img.iamcook.ru/2017/upl/recipes/zen/u-614b766d2f0665b0180b5ce7c0fc97de.JPG",
    authorId: "332433",
    category: Category.salads,
    ingredients: [
      {
        id: '12',
        name: 'Капуста красная белокочанная',
        count: 300,
        unit: Unit.gram
      },
      {
        id: '13',
        name: 'Свёкла',
        count: 150,
        unit: Unit.gram
      },
      {
        id: '14',
        name: 'Сок лимона',
        count: 2,
        unit: Unit.teaspoon
      },
      {
        id: '15',
        name: 'Масло оливковое',
        count: 3,
        unit: Unit.gram
      },
      {
        id: '16',
        name: 'Сахар',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '17',
        name: 'Перец чёрный острый, молотый',
        count: 0,
        unit: Unit.taste
      },
      {
        id: '18',
        name: 'Петрушка свежая',
        count: 0,
        unit: Unit.taste
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/2017/upl/recipes/byusers/misc/5856/878061a09494d837dbd4f3e42a277d98-2017.jpg',
        text: 'Капусту тонко нашинкуем. Сырую свёклу почистим и натрём на тёрке.',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/2017/upl/recipes/byusers/misc/5856/85f43d0dc2ef340735fe589ef8bd5379-2017.jpg',
        text: 'Сделаем заправку для салата. Оливковое масло, лимонный сок и сахар смешаем до растворения сахара.',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/2017/upl/recipes/byusers/misc/5856/583fee5c4322ffcc3c00de600da7aad2-2017.jpg',
        text: 'Капусту со свёклой перемешаем руками, немного прижимая, чтобы выделился сок. Добавим заправку.',
      },
      {
        id: '14',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/2017/upl/recipes/byusers/misc/5856/7401935a18af28e5d02912c6051e0c3b-2017.jpg',
        text: 'Перемешаем салат с заправкой, оставим настояться на 5 минут. Добавить зелень сверху (по желанию)',
      },
    ]
  },
  {
    id: "3",
    name: "Бурфи",
    description: "Сливочной помадки из сказочной Индии",
    image: "https://img.iamcook.ru/old/upl/recipes/cat/u-070dab3421b923ae90f4025d76e281ac.JPG",
    authorId: "3657433",
    category: Category.desserts,
    ingredients: [
      {
        id: '12',
        name: 'Сливочное масло 82,5%',
        count: 200,
        unit: Unit.gram
      },
      {
        id: '13',
        name: 'Сметана 20%',
        count: 200,
        unit: Unit.gram
      },
      {
        id: '14',
        name: 'Сухое молоко',
        count: 400,
        unit: Unit.gram
      },
      {
        id: '15',
        name: 'Орехи кешью',
        count: 200,
        unit: Unit.gram
      },
      {
        id: '16',
        name: 'Сахар',
        count: 200,
        unit: Unit.gram
      },
      {
        id: '17',
        name: 'Ванилин',
        count: 0,
        unit: Unit.taste
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/6fcaf8f20f281886b920f5aa165541bd.jpg',
        text: 'Первым делом разогреваем сковороду и кладем сливочное масло. Оно должно растопиться.',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/f03f92c3b921d804e04d5d5a49079c8e.jpg',
        text: 'Как только масло растаяло, кладем сахар и, постоянно помешивая, доводим до кипения, точнее до пузырьков. Затем добавляем сметану и, продолжая помешивать, готовим до пенного состояния. Выключаем огонь.',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/1e7b600d3e86e4cd112eef720403e9e2.jpg',
        text: 'Массу (горячую) выливаем в емкость для взбивания, добавляем ваниль и начинаем взбивать, постепенно подсыпая сухое молоко.',
      },
      {
        id: '14',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/9bb50a6df623539a75bc6717a997ab24.jpg',
        text: 'Форму смазываем маслом растительным и выкладываем полученную массу. Поверхность массы выровнять силиконовой лопаткой',
      },
      {
        id: '15',
        stepNumber: 5,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/76c7658f297532328b1eda9c9a1ba425.jpg',
        text: 'Сверху вдавливаем орешки и отправляем на 12 часов в холодильник.',
      },
    ]
  },
  {
    id: "4",
    name: "Тыквенный суп-пюре",
    description: "Классический тыквенный суп-пюре – прекрасный вариант полезного и вкусного первого блюда, с приготовлением которого с легкостью справится даже начинающий кулинар",
    image: "https://img.iamcook.ru/2017/upl/recipes/zen/u6009-9baa1fbecae569df31b376ccd55765bd.jpg",
    authorId: "3657433",
    category: Category.soups,
    ingredients: [
      {
        id: '12',
        name: 'Тыква',
        count: 1000,
        unit: Unit.gram
      },
      {
        id: '13',
        name: 'Картошка',
        count: 500,
        unit: Unit.gram
      },
      {
        id: '14',
        name: 'Растительное масло',
        count: 2,
        unit: Unit.spoon
      },
      {
        id: '15',
        name: 'Карри',
        count: 2,
        unit: Unit.teaspoon
      },
      {
        id: '16',
        name: 'Сливки',
        count: 150,
        unit: Unit.ml
      },
      {
        id: '17',
        name: 'Вода',
        count: 700,
        unit: Unit.ml
      },
      {
        id: '18',
        name: 'Соль',
        count: 0,
        unit: Unit.taste
      },
      {
        id: '19',
        name: 'Чёрный перец',
        count: 0,
        unit: Unit.taste
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/old/upl/recipes/byusers/misc/1378/d4c3d070a7356bcd66479b2f4e913f14-2017.jpg',
        text: 'Тыкву и картофель нарезать кубиками, положить в кастрюлю, залить водой и варить на среднем огне до мягкого состояния (15 минут)',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/old/upl/recipes/byusers/misc/1378/725bc0785c52b9465fa703921b4bf00b-2017.jpg',
        text: 'На разогретую сковороду с маслом высыпать карри и чёрный перец, обжарить не более 5 секунд. Готовые специи переложить в массу из овощей, добавив сливки',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/old/upl/recipes/byusers/misc/1378/652bb2a1a1c7eaefdff85c1fa8f68182-2017.jpg',
        text: 'Полученную массу взбить погружным блендером, дать постоять 30 минут',
      },
      {
        id: '14',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/old/upl/recipes/zen/u-17b3e87d7dd9025e79b5fcda527a1a06.jpg',
        text: 'Подать томатный суп-пюре со сметаной и сухариками. Сверху можно посыпать зеленью',
      },
    ]
  },
  {
    id: "5",
    name: "Кичари",
    description: "Кичари - можно сказать, практически король в аюрведической кулинарии",
    image: "https://img.iamcook.ru/old/upl/recipes/middle/u-7316672e40498e937c1c0e146602d0b3.JPG",
    authorId: "4656774",
    category: Category.sideDishes,
    ingredients: [
      {
        id: '12',
        name: 'Маш',
        count: 0.5,
        unit: Unit.glass
      },
      {
        id: '13',
        name: 'Растительное масло',
        count: 100,
        unit: Unit.ml
      },
      {
        id: '14',
        name: 'Помидор',
        count: 2,
        unit: Unit.piece
      },
      {
        id: '15',
        name: 'Зира',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '16',
        name: 'Имбирь',
        count: 0.5,
        unit: Unit.teaspoon
      },
      {
        id: '17',
        name: 'Куркума',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '18',
        name: 'Соль',
        count: 0,
        unit: Unit.taste
      },
      {
        id: '19',
        name: 'Паприка сушёная, молотая',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '20',
        name: 'Асафетида',
        count: 0.5,
        unit: Unit.teaspoon
      },
      {
        id: '21a',
        name: 'Рис',
        count: 1,
        unit: Unit.glass
      },
      {
        id: '21',
        name: 'Перец чили',
        count: 0.5,
        unit: Unit.piece
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/006b786215c16cb93ba2c6fd4012d94e.jpg',
        text: 'Замочите маш в воде за сутки до приготовления. После этого промойте его холодной водой. Промойте рис холодной водой так же',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/d0e5a950c35386fbe52017599070ce67.jpg',
        text: 'На разогретую сковороду с маслом высыпать все специи, обжарить не более 5 секунд. Готовые специи переложить в массу из овощей, добавив сливки',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/928ba4590d92a56a267925fd467ea353.jpg',
        text: 'Добавьте к специям помидоры (без шкурки), а также кубики нарезанного перца чили',
      },
      {
        id: '14',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/b8d7cd55c1c9e59cdcec2aa3c012396c.jpg',
        text: 'Всыпать подготовленный маш и промытый рис. Всё хорошо размешайте и залейте водой, выше густой массы на 3 сантиметра',
      },
      {
        id: '15',
        stepNumber: 5,
        picture: 'https://img.iamcook.ru/old/upl/recipes/misc/bec712970d1023b3aa6d386aec9f6d68.jpg',
        text: 'Закрывайте сковородку крышкой и ставьте на маленький огонь. Готовится кичари около 25 минут',
      },
    ]
  },
  {
    id: "6",
    name: "Брускетта с авокадо и помидорами",
    description: "Брускетты с различными начинками - это полезный и вкусный завтрак, на приготовление которого уходит совсем немного времени",
    image: "https://img.iamcook.ru/2023/upl/recipes/zen/u-3f7aa677a70b736c61da0102a957b2e5.jpg",
    authorId: "4656774",
    category: Category.appetizers,
    ingredients: [
      {
        id: '12',
        name: 'Багет',
        count: 150,
        unit: Unit.gram
      },
      {
        id: '13',
        name: 'Авокадо',
        count: 1,
        unit: Unit.piece
      },
      {
        id: '14',
        name: 'Помидоры черри',
        count: 5,
        unit: Unit.piece
      },
      {
        id: '15',
        name: 'Сок лимона',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '16',
        name: 'Оливковое масло',
        count: 1,
        unit: Unit.teaspoon
      },
      {
        id: '17',
        name: 'Чёрный перец',
        count: 0,
        unit: Unit.taste
      },
      {
        id: '18',
        name: 'Соль',
        count: 0,
        unit: Unit.taste
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/2023/upl/recipes/byusers/misc/126663/8e14417afda7546d4edce33609e4087d-2023.jpg',
        text: 'Багет нарежьте на ломтики и немного подсушите на сухой сковороде, до подрумянивания. Затем снимите на тарелку и оставьте остыть',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/2023/upl/recipes/byusers/misc/126663/9cbedc3ba298b11af576c476c5fa2547-2023.jpg',
        text: 'Авокадо разрежьте пополам и удалите косточку. Извлеките мякоть и сбрызните соком лимона, чтобы она не начала темнеть',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/2023/upl/recipes/byusers/misc/126663/ef6efff03dcd3d31f75c4805789f792a-2023.jpg',
        text: 'Разомните мякоть авокадо вилкой и добавьте немного оливкового масла. По вкусу добавьте соль и молотый перец. Все смешайте',
      },
      {
        id: '15',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/2023/upl/recipes/byusers/misc/126663/912a120090a9d31435c344c1c5034f90-2023.jpg',
        text: 'Готовую массу разложите на ломтики багета. Сверху выложите нарезанные помидоры. Сверху можно украсить зеленью',
      },
    ]
  },
  {
    id: "7",
    name: "Смузи с бананом и апельсином",
    description: "Простой в приготовлении, полезный и вкусный напиток",
    image: "https://img.iamcook.ru/2018/upl/recipes/zen/u6009-8d24f37ca774a8fc5bbebc9806e41c1b.jpg",
    authorId: "4656774",
    category: Category.drinks,
    ingredients: [
      {
        id: '12',
        name: 'Банан',
        count: 450,
        unit: Unit.gram
      },
      {
        id: '13',
        name: 'Апельсин',
        count: 2.5,
        unit: Unit.piece
      },
      {
        id: '14',
        name: 'Мёд',
        count: 0,
        unit: Unit.taste
      },
      {
        id: '15',
        name: 'Лёд',
        count: 3,
        unit: Unit.piece
      },
      {
        id: '16',
        name: 'Йогурт',
        count: 150,
        unit: Unit.ml
      },
    ],
    steps: [
      {
        id: '11',
        stepNumber: 1,
        picture: 'https://img.iamcook.ru/2018/upl/recipes/byusers/misc/6009/a96c9317c762b8a8161124abc6147ed7-2018.jpg',
        text: 'Выжмите сок из апельсинов (200 мл). Очистите и нарежьте бананы крупными кусочками.',
      },
      {
        id: '12',
        stepNumber: 2,
        picture: 'https://img.iamcook.ru/2018/upl/recipes/byusers/misc/6009/35f07af602288f688562f1457ffe7902-2018.jpg',
        text: 'Поместите кусочки бананов в чашу блендера. Влейте апельсиновый сок и взбейте все 30-60 секунд, до однородности',
      },
      {
        id: '13',
        stepNumber: 3,
        picture: 'https://img.iamcook.ru/2018/upl/recipes/byusers/misc/6009/81c811577b01ecdbcf4270e00e8fb98d-2018.jpg',
        text: 'Добавьте 150 мл йогурта и взбейте все еще 10-15 секунд. Добавьте 3-4 кубика льда и мед по вкусу. Взбейте все еще 15-30 секунд.',
      },
      {
        id: '14',
        stepNumber: 4,
        picture: 'https://img.iamcook.ru/2018/upl/recipes/zen/u6009-8d24f37ca774a8fc5bbebc9806e41c1b.jpg',
        text: 'Разлейте напиток по бокалам, дополните соломинками и/или украсьте по настроению',
      },
    ]
  },
]

export default recipes