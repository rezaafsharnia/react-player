import { v4 as uuidv4 } from "uuid";
export const musics = [
  {
    name: "Darde Shirin",
    artist: "Aron Afshar",
    cover:
      "https://music-fa.com/wp-content/uploads/2022/04/Aron-Afshar-Music-fa.com_.jpg",
    audio:
      "https://ups.music-fa.com/tagdl/8e401/Aron%20Afshar%20-%20Darde%20Shirin%20(320).mp3",
    id: uuidv4(),
    color: ["#313131"],
    active: true,
  },
  {
    name: "Khounamoon",
    artist: "Hamim",
    cover:
      "https://music-fa.com/wp-content/uploads/2023/02/Hamim-Music-fa.com_.jpg",
    audio:
      "https://ups.music-fa.com/tagdl/8e401/Haamim%20-%20Khoonamoon%20(320).mp3",
    id: uuidv4(),
    color: ["#313131"],
    active: false,
  },
  {
    name: "Bekhab Donya",
    artist: "Mehdi Jahani",
    cover:
      "https://upmusics.com/wp-content/uploads/2019/02/jahani.jpg",
    audio:
      "https://irsv.upmusics.com/Downloads/Musics/Mehdi%20Jahani%20-%20Bekhab%20Donya%20(320).mp3",
    id: uuidv4(),
    color: ["#313131"],
    active: false,
  },
  {
    name: "Kheyli Ghashangi To",
    artist: "Ahmad Saeedi",
    cover:
      "https://upmusics.com/wp-content/uploads/2022/08/Ahmad-Saeedi-Kheyli-Ghashangi-To-1.jpg",
    audio:
      "https://irsv.upmusics.com/AliBZ/Ahmad%20Saeedi%20%E2%80%93%20Khili%20Ghashngi%20To%20(128).mp3",
    id: uuidv4(),
    color: ["#313131"],
    active: false,
  },
];
