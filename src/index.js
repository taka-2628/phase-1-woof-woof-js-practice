document.addEventListener('DOMContentLoaded', () => {
    getFetch();
})

function getFetch(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogsArr => handleArr(dogsArr))
}

function handleArr(dogsArr){
    dogsArr.forEach(dog => renderDogName(dog))
}

function renderDogName(dog){
    let dogBar = document.getElementById('dog-bar');
    // let dogInfo = document.getElementById('dog-info');

    let span = document.createElement('span');
    span.textContent = dog['name'];
    dogBar.appendChild(span);

    makeDogNameInteractive(dog, span)

    /*
    span.addEventListener('click', () => {
        let img = document.createElement('img');
        img.src = dog['image'];

        let h2 = document.createElement('h2');
        h2.textContent = dog['name'];

        let btn = document.createElement('button');
        let isGoodDog = dog['isGoodDog'];
        let goodOrBad = ''
        test(isGoodDog)
        function test (isGoodDog){
            if (isGoodDog){
                return goodOrBad = 'Good Dog!'
            } else {
                return goodOrBad = 'Bad God!'
            }
        }
        btn.textContent = goodOrBad;

        dogInfo.innerHTML = '';
        dogInfo.appendChild(img);
        dogInfo.appendChild(h2);
        dogInfo.appendChild(btn);
    })
    */
}

function makeDogNameInteractive(dog, span){
    let dogInfo = document.getElementById('dog-info')
    span.addEventListener('click', () => {
        let img = document.createElement('img');
        img.src = dog['image'];

        let h2 = document.createElement('h2');
        h2.textContent = dog['name'];

        let btn = document.createElement('button');
        let isGoodDog = dog['isGoodDog'];
        let goodOrBad = ''
        test(isGoodDog)
        function test (isGoodDog){
            if (isGoodDog){
                return goodOrBad = 'Good Dog!'
            } else {
                return goodOrBad = 'Bad God!'
            }
        }
        btn.textContent = goodOrBad;

        dogInfo.innerHTML = '';
        dogInfo.appendChild(img);
        dogInfo.appendChild(h2);
        dogInfo.appendChild(btn);

        btn.addEventListener('click', () => {
            if (isGoodDog){
                isGoodDog = false;
            } else {
                isGoodDog = true;
            }
            dog['isGoodDog'] = isGoodDog
            fetch(`http://localhost:3000/pups/${dog['id']}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(dog)
            })
            .then(res => res.json())
            .then(newDog => {
                if (newDog['isGoodDog']){
                    btn.textContent = 'Good Dog!'
                } else {
                    btn.textContent = 'Bad Dog!'
                }
            })
            
        })
        // makeGoodDogButtonInteractive(btn)
    })
    
}