export type PlayerType = {
  id: number;
  index: number;
  name: string;
  age: number;
  rate: number;
  position: "GK" | "CB" | "RB" | "LB" | "DM" | "CM" | "LW" | "RW" | "CF";
  img: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  shirtNumber: number;
};

export const players: PlayerType[] = [
  {
    id: 1,
    index: 2,
    name: "Lloris",
    age: 30,
    rate: 96,
    position: "GK",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3687_by_Stepro_%28cropped%29.jpg/170px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3687_by_Stepro_%28cropped%29.jpg",
    color: "warning",
    shirtNumber: 1,
  },
  {
    id: 2,
    index: 47,
    name: "Fabianski",
    age: 32,
    rate: 92,
    position: "GK",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUEXNAry-o_Tvnr0ikGqSjEnp9X56WUHmbw&s",
    color: "warning",
    shirtNumber: 13,
  },
  {
    id: 3,
    index: 16,
    name: "Sane",
    age: 30,
    rate: 88,
    position: "CB",
    img: "https://storage.schalke04.de/2019/06/190529_sane_senegal-1440x810.jpg",
    color: "primary",
    shirtNumber: 12,
  },

  {
    id: 4,
    index: 18,
    name: "Modric",
    age: 32,
    rate: 96,
    position: "CM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHwnndwjEpe5b7iv1Vl8ip2bXAgEmHhg1hA&s",
    color: "success",
    shirtNumber: 6,
  },
  {
    id: 5,
    index: 31,
    name: "Gundogan",
    age: 30,
    rate: 94,
    position: "CM",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg/440px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg",
    color: "success",
    shirtNumber: 8,
  },
  // {
  //   id: 16,
  //   index: 33,
  //   name: "Joaquin",
  //   age: 32,
  //   rate: 94,
  //   position: "CM",
  //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Joaquin_2022_%28cropped%29.jpg/440px-Joaquin_2022_%28cropped%29.jpg",
  //   color: "success",
  //   shirtNumber: 17,
  // },
  {
    id: 6,
    index: 33,
    name: "Kroos",
    age: 26,
    rate: 92,
    position: "CM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Sp7T6PfBN_vzxxtWKX5VS77y3eVSiwV-WA&s",
    color: "success",
    shirtNumber: 18,
  },
  {
    id: 7,
    index: 6,
    name: "Kante",
    age: 28,
    rate: 95,
    position: "CM",
    img: "https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/news/2021/06/14/kante-france-stock-2021",
    color: "success",
    shirtNumber: 14,
  },
  {
    id: 8,
    index: 8,
    name: "Dede",
    age: 29,
    rate: 90,
    position: "CB",
    img: "https://icdn.thelaziali.com/wp-content/uploads/2018/06/Dede.jpg",
    color: "primary",
    shirtNumber: 20,
  },
  {
    id: 9,
    index: 20,
    name: "Bale",
    age: 31,
    rate: 94,
    position: "LW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwruCBARrEvfFNFw57MIdKevJW6GLUmarmFg&s",
    color: "danger",
    shirtNumber: 11,
  },
  {
    id: 10,
    index: 22,
    name: "Ronaldo",
    age: 29,
    rate: 97,
    position: "CF",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I7wepKjSmrN10TAAtBFCP9zJPYtBgEFqMQ&s",
    color: "danger",
    shirtNumber: 7,
  },
  {
    id: 11,
    index: 24,
    name: "Neymar",
    age: 28,
    rate: 95,
    position: "LW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDjsqyD1OlzpKq7cwdkix_xxhVzyCyHsNgg&s",
    color: "danger",
    shirtNumber: 21,
  },
  {
    id: 12,
    index: 26,
    name: "Hazard",
    age: 29,
    rate: 91,
    position: "LW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxGXf8jOjGRUs4ZRyo-m8OtFnwg1MljqdzQLq917wHtCN5vXWelk0PbrnzoXHyUweR40The2szUT9zyZXwmyw9Q",
    color: "danger",
    shirtNumber: 19,
  },
  {
    id: 13,
    index: 27,
    name: "Ibrahimovic",
    age: 32,
    rate: 94,
    position: "CF",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtUMZQez-SnE3ThUbNt0RZp3gTvF1uxchLDnGURIGUOBY2dSrkoEpHFeRSQW4-QGpAr5JiTsORE1hY8JbNZ6WwPg",
    color: "danger",
    shirtNumber: 9,
  },
  {
    id: 14,
    index: 29,
    name: "Messi",
    age: 30,
    rate: 95,
    position: "RW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJ2sZUUc6xap9g__-HYUVi9LA2MnfG8_7xF33YejfCkudFpb2voAVKP3K2kg9RBHVo4gFx5saiDaNNzxhhMLjPg",
    color: "danger",
    shirtNumber: 10,
  },
  {
    id: 15,
    index: 9,
    name: "Alaba",
    age: 29,
    rate: 92,
    position: "LB",
    img: "https://b3504934.smushcdn.com/3504934/wp-content/uploads/2023/11/David-Alaba-VPH-P.jpg?lossy=2&strip=1&webp=1",
    color: "primary",
    shirtNumber: 4,
  },
  {
    id: 16,
    index: 17,
    name: "Fernandinho",
    age: 29,
    rate: 91,
    position: "DM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJkaTIOmqTD0HcsK0ohsNTHNV_65B8GIGEA&s",
    color: "success",
    shirtNumber: 15,
  },
  // {
  //   id: 18,
  //   index: 40,
  //   name: "Young",
  //   age: 30,
  //   rate: 90,
  //   position: "LB",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEINzCr_XfJm0-NQ5Hm7cJ7yBw-6bRkLwmg&s",
  //   color: "primary",
  //   shirtNumber: 18,
  // },
  {
    id: 17,
    index: 40,
    name: "Robertson",
    age: 26,
    rate: 91,
    position: "LB",
    img: "https://i.guim.co.uk/img/media/f62f426b79aceb530b5ae2812d826688610049a2/1466_62_2518_1511/master/2518.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4f6e6be802b9df69f813ce3f3d5cce71",
    color: "primary",
    shirtNumber: 26,
  },
  {
    id: 18,
    index: 41,
    name: "Van Dijk",
    age: 26,
    rate: 92,
    position: "CB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqa4iQLOuDpUB5l2_oD61nNxbvdHR_dmNQQ&s",
    color: "primary",
    shirtNumber: 3,
  },
  // {
  //   id: 20,
  //   index: 43,
  //   name: "Boateng",
  //   age: 29,
  //   rate: 88,
  //   position: "CB",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxWGaAdX78E7E5IlUDbrNksiw2tvsIqtIHw&s",
  //   color: "primary",
  //   shirtNumber: 5,
  // },
  {
    id: 19,
    index: 43,
    name: "Koulibaly",
    age: 27,
    rate: 95,
    position: "CB",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS_V9bxquw2S0lbBwUqTe_QIBiyT_16VjrCBC64wCn4PgpLycwKCw--K5CgrZ_lEkf9Rwj_xnV3ZDXYHgM",
    color: "primary",
    shirtNumber: 5,
  },
  {
    id: 20,
    index: 44,
    name: "Walker",
    age: 25,
    rate: 92,
    position: "RB",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQd1XyPGH-EJuFth37UVex6K81AUmua1SCGpc4HmvSKRBg3BL63ZXszIAMzDIG-82Po6ob5F9AxPfMidoR8f1Eoxvr7sU7bm-xGLQVgpbo",
    color: "primary",
    shirtNumber: 2,
  },
  {
    id: 21,
    index: 45,
    name: "Cavajal",
    age: 23,
    rate: 86,
    position: "RB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AJq2UgURWuwqmJk8NuarCI-4jV45o8ELjA&s",
    color: "primary",
    shirtNumber: 27,
  },
  {
    id: 22,
    index: 46,
    name: "Gnapry",
    age: 28,
    rate: 91,
    position: "RW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FZaEO7ICFfAcEXQeHXW9dxU0wVCk31e70w&s",
    color: "danger",
    shirtNumber: 17,
  },
  {
    id: 23,
    index: 47,
    name: "Matinez",
    age: 29,
    rate: 90,
    position: "DM",
    img: "https://cdn.vox-cdn.com/thumbor/wJMmCsHOGLt7kCw5-Baep3_sCS8=/0x0:4851x3234/1200x800/filters:focal(2200x1037:2976x1813)/cdn.vox-cdn.com/uploads/chorus_image/image/68469485/1289586641.0.jpg",
    color: "success",
    shirtNumber: 16,
  },
  {
    id: 24,
    index: 48,
    name: "Shaw",
    age: 27,
    rate: 86,
    position: "LB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQuO0IEHQm__i7xqUzEZSKjBed1duJttBwQ&s",
    color: "primary",
    shirtNumber: 23,
  },
  // {
  //   id: 25,
  //   index: 49,
  //   name: "Wanyama",
  //   age: 27,
  //   rate: 82,
  //   position: "DM",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHe5ggqhqk5aEjeUc14YD8YoBDUKDw5SbMw&s",
  //   color: "success",
  //   shirtNumber: 24,
  // },
  // {
  //   id: 26,
  //   index: 50,
  //   name: "Zobnin",
  //   age: 27,
  //   rate: 84,
  //   position: "CM",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnxceObXxMZQBak9zIIVhIYQ5Te5_ASL79Q&s",
  //   color: "success",
  //   shirtNumber: 28,
  // },
  // {
  //   id: 27,
  //   index: 51,
  //   name: "James",
  //   age: 31,
  //   rate: 82,
  //   position: "RW",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOmbK-Z5cjg4O9C2LebX8yjXfKxgSfXcIDg&s",
  //   color: "danger",
  //   shirtNumber: 22,
  // },
  // {
  //   id: 28,
  //   index: 51,
  //   name: "Muller",
  //   age: 30,
  //   rate: 87,
  //   position: "CF",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fB9PMXN6hpXtkja4znIigaptM9D5RFvjVw&s",
  //   color: "danger",
  //   shirtNumber: 25,
  // },
  // {
  //   id: 29,
  //   index: 52,
  //   name: "Mikel Merino",
  //   age: 20,
  //   rate: 79,
  //   position: "CM",
  //   img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTftJImjvjbwqUlqG_zuQCxnubtVdVab8pYiXPSqaweI4j4VVdZUq93-6IXz2NEdBUo22VXIpZAaGBLzfY",
  //   color: "success",
  //   shirtNumber: 0,
  // },
];
