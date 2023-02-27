let container = document.querySelector('.container');
let arr = [];

async function server() {
    let res = await fetch('https://dog.ceo/api/breeds/list/all');
    let resData = await res.json();
    arr = await resData.message
    return arr
}


async function main() {

    for (let key in arr) {
        let card = document.createElement('div');
        card.classList.add('card')
        let p = document.createElement('p');
        p.innerHTML = key;
        container.appendChild(card);
        card.appendChild(p)

        p.addEventListener('click', () => {

            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    let imgBox = document.createElement('div')
                    imgBox.classList.add('img-box')
                    let img = document.createElement('img')
                    img.src = data.message;
                    card.appendChild(imgBox)
                    imgBox.appendChild(img)
                    console.log('sdf');

                    img.addEventListener('click', () => {
                        imgBox.parentNode.removeChild(imgBox);
                    });
                });
        })

    }

}


async function start() {
    await server()
    await main()
};
start();