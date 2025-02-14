// const themeParams = Telegram.WebApp.themeParams;

// // Example usage:
// const backgroundColor = themeParams.bg_color;
// const textColor = themeParams.text_color;

// const text = document.querySelector(".text")

// text.innerHTML = textColor;

let games = [
    {
        name: "WERAJ",
        discription: "An exciting Ethiopian taxi game...",
        img: "https://firebasestorage.googleapis.com/v0/b/kinet-web.appspot.com/o/icons%2FwerajA.webp?alt=media&token=0f77deca-27cf-4b65-a092-4c5a25e06a06",
        url: "https://kinet-games-fendika-74cc4.web.app/?startapp=%7B%22source%22%3A%22telegram%22%2C%22user_id%22%3A592276807%2C%22username%22%3A%22DawitMengistu%22%2C%22start_param%22%3A%22game_start%22%2C%22chat_type%22%3A%22private%22%2C%22auth_date%22%3A1739502798%7D"
    },
    {
        name: "Tras",
        discription: "Swap pillows, create explosive matches...",
        img: "https://firebasestorage.googleapis.com/v0/b/kinet-web.appspot.com/o/icons%2FtrasE.webp?alt=media&token=0ede0fe4-0e07-40f6-a596-562645df4132",
        url: "https://kinet-games-fendika-74cc4.web.app/?startapp=%7B%22source%22%3A%22telegram%22%2C%22user_id%22%3A592276807%2C%22username%22%3A%22DawitMengistu%22%2C%22start_param%22%3A%22game_start%22%2C%22chat_type%22%3A%22private%22%2C%22auth_date%22%3A1739502798%7D"
    },
    {
        name: "SILET",
        discription: "Challenge Yourself With Quick-Fire Math Questions...",
        img: "https://firebasestorage.googleapis.com/v0/b/kinet-web.appspot.com/o/CompressedAssets%2FSiletThumbnailIcon.png?alt=media&token=39f47d66-50c1-4aef-a7c0-34c368b3dc59",
        url: "https://kinet-games-fendika-74cc4.web.app/?startapp=%7B%22source%22%3A%22telegram%22%2C%22user_id%22%3A592276807%2C%22username%22%3A%22DawitMengistu%22%2C%22start_param%22%3A%22game_start%22%2C%22chat_type%22%3A%22private%22%2C%22auth_date%22%3A1739502798%7D"
    },
    {
        name: "DAMA",
        discription: "An exciting checker game. Move diagonally...",
        img: "https://firebasestorage.googleapis.com/v0/b/kinet-web.appspot.com/o/icons%2FdamaE.webp?alt=media&token=d4b38d0f-4307-4cab-861a-8a2bc2619a34",
        url: "https://kinet-games-fendika-74cc4.web.app/?startapp=%7B%22source%22%3A%22telegram%22%2C%22user_id%22%3A592276807%2C%22username%22%3A%22DawitMengistu%22%2C%22start_param%22%3A%22game_start%22%2C%22chat_type%22%3A%22private%22%2C%22auth_date%22%3A1739502798%7D"
    },
    {
        name: "KUKULU",
        discription: "A chicken named Kukulu is being held... ",
        img: "https://firebasestorage.googleapis.com/v0/b/kinet-web.appspot.com/o/kukuluLeader.jpeg?alt=media&token=19e88d86-bee3-40e2-9489-001e340599d7",
        url: "https://kinet-games-fendika-74cc4.web.app/?startapp=%7B%22source%22%3A%22telegram%22%2C%22user_id%22%3A592276807%2C%22username%22%3A%22DawitMengistu%22%2C%22start_param%22%3A%22game_start%22%2C%22chat_type%22%3A%22private%22%2C%22auth_date%22%3A1739502798%7D"
    },
]


const gameListCon = document.querySelector(".store-con");









{/* <div class="game-title poppins-regular ">KUKULU</div>
<div class="game-dis poppins-regular">*/}



listGame();
listGame();
listGame();

function listGame() {
    games.forEach(element => {
        gameListCon.innerHTML += singleGameComponent(element.img, element.name, element.discription, element.url)
    });
}

function handlePlay(url) {
    window.location = url;
}
function singleGameComponent(img, name, discription, url) {
    return `
    <div class="sg-con">
        <div class="sg-img-con center">
            <img class="sg-img"
                src="${img}"
                alt="">
        </div>
        <div class="dis-con">
        <div class="game-title poppins-regular ">${name}</div>
        <div class="game-dis poppins-regular">${discription}
            </div>
        </div>
        <div class="play-btn-con center">
            <button class="play-btn" onclick="handlePlay('${url}')">PLAY</button>
        </div>
    </div>
`
}