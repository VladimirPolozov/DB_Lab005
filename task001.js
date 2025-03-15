use("FirstBase");

db.employee_blank.insertMany([
    {
      ID: 1,
      NAME: "Иван",
      SERNAME: "Иванов",
      FATHER_NAME: "Иванович",
      EMAIL: "ivan@gmail.com",
      TELEFONE_NUMBER: "8(777)111-11-11",
      INFORMATION: "Дата рождения: 10.10.1987. Увлечения: плавание, шахматы",
      PRIKAZ: "Номер уведомления: 123"
    },
    {
      ID: 2,
      NAME: "Николай",
      SERNAME: "Семерук",
      FATHER_NAME: "Александрович",
      EMAIL: "killer@rambler.ru",
      TELEFONE_NUMBER: "7(777)523-68-91",
      INFORMATION: "Увлечения: бокс",
      PRIKAZ: "Номер приказа: 1001"
    },
    {
      ID: 3,
      NAME: "Александр",
      SERNAME: "Хопта",
      FATHER_NAME: "Петрович",
      EMAIL: "sasha@.ru",
      TELEFONE_NUMBER: "(2-20-47)",
      INFORMATION: "Дата рождения: 10.07.1987. Увлечения: плавание",
      PRIKAZ: "Номер распоряжения: 202"
    },
    {
      ID: 4,
      NAME: "Владимир",
      SERNAME: "Никифоров",
      FATHER_NAME: "Александрович",
      EMAIL: "vova@rambler.ru",
      TELEFONE_NUMBER: "2-45-48",
      INFORMATION: "Дата рождения: 12.07.1967",
      PRIKAZ: "Номер приказа: 404"
    },
    {
      ID: 5,
      NAME: "Семен",
      SERNAME: "Лобанов",
      FATHER_NAME: "Иванович",
      EMAIL: "semen@yandex.com",
      TELEFONE_NUMBER: "8(777)654-12-21",
      INFORMATION: "Дата рождения: 10.01.1987. Увлечения: борьба",
      PRIKAZ: "Номер приказа: 15"
    },
    {
      ID: 6,
      NAME: "Глеб",
      SERNAME: "Кисегач",
      FATHER_NAME: "Викторович",
      EMAIL: "gleb@mail.",
      TELEFONE_NUMBER: "2-87-98",
      INFORMATION: "Увлечения: компьютерные игры",
      PRIKAZ: "Номер распоряжения: 333"
    },
    {
      ID: 7,
      NAME: "Варя",
      SERNAME: "Черноус",
      FATHER_NAME: "Петрович",
      EMAIL: "cher@mail.ru",
      TELEFONE_NUMBER: null,
      INFORMATION: "Дата рождения: 14.01.1980",
      PRIKAZ: "Номер приказа: 1"
    }
  ]);