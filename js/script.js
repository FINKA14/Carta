document.addEventListener('DOMContentLoaded', () => {
    const flapTop = document.getElementById('top')
    flapTop.value = false
    flapTop.addEventListener('click', () => {
        if (flapTop.value === false) {
            flapTop.value = true
            flapTop.classList.add('open')
        } else {
            flapTop.value = false
            flapTop.classList.remove('open')
        }
    })

    const msg = document.getElementById('msg')
    msg.addEventListener('click', () => {
        msg.classList.add('message-open')
        msg.children[0].remove()
        msg.classList.add('lined-paper')
        setTimeout(() => {
            let message = ` 
                        <p style="text-align: center; color: red; font-size: 25px;">Xiomy</p><br>
                        <p>Te he amado, como no he amado a</p>
                        <p>nadie en mi vida, por eso me quedaré</p>
                        <p>aquí esperandote.</p><br>
                        <p>El tiempo puede pasar, las estaciones</p>
                        <p>pueden cambiar, pero mi amor por tí</p>
                        <p>permanece intacto.</p><br>
                        <p>No es solo una promesa, es una</p>
                        <p>eleccíon.</p><br>
                        <p>Elijo quedarme, esperar, no rendirme,</p>
                        <p>creer q algun día nuestro caminos</p>
                        <p>se cruzaran de nuevo.</p><br>
                        <p>Estoy aquí, para tí.</p><br>
                        <p>Te amo un monton mi cachetona</p><br>
                        <p>P.D Perdon por el diseño, aun me</p>
                        <p>falta mejorar en ello</p>
                        <p style="text-align: right">🦥💜</p>`
            msg.innerHTML = message
        }, 500);
        let noTouch = document.createElement('div')
        noTouch.classList.add('noTouch')
        document.getElementById('body').appendChild(noTouch)
    })
})
