const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', () => {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert('Dia já incluso')
        return
    }

    nlwSetup.addDay(today)
    
})

form.addEventListener('change', () => {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data) )
})


// const data = {
//     run: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
//     takePills: ['01-01', '01-02', '01-03', '01-04'],
//     journal: ['01-01', '01-03', '01-06']
// }
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()