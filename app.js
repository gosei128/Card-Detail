
const btn = document.getElementById('confirm-btn')

const form = document.getElementById('form')

const error = []

form.addEventListener('submit', event =>{
    try{
        const forms = new FormData(form)
        
        let name = forms.get('cardholder')

        if(name.length < 1){
            event.preventDefault();

            console.log('Invalid input. Cannot be empty')
        }
        

    }catch(error){
        console.error(error)
    }
})