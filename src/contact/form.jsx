export default function Form(){

    function handleSubmit(e){
        e.preventDefault()

        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const title = document.getElementById('title')
        const companyName = document.getElementById('companyName')
        const message = document.getElementById('message')

        const nameSpan = document.getElementById('nameSpan')
        const emailSpan = document.getElementById('emailSpan')
        const titleSpan = document.getElementById('titleSpan')
        const companyNameSpan = document.getElementById('companyNameSpan')
        const messageSpan = document.getElementById('messageSpan')

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // return to default

            name.style.borderBottomColor = 'rgb(209 213 219)'
            email.style.borderBottomColor = 'rgb(209 213 219)'
            title.style.borderBottomColor = 'rgb(209 213 219)'
            companyName.style.borderBottomColor = 'rgb(209 213 219)'
            message.style.borderBottomColor = 'rgb(209 213 219)'


            nameSpan.style.display='none'
            emailSpan.style.display='none'
            titleSpan.style.display='none'
            companyNameSpan.style.display='none'
            messageSpan.style.display='none'

            // check index.css

            name.classList.remove('invalid')
            email.classList.remove('invalid')
            title.classList.remove('invalid')
            companyName.classList.remove('invalid')
            message.classList.remove('invalid')

        ///////

        if(name.value.length === 0){
            nameSpan.style.display='block'
            name.style.borderBottomColor = 'rgb(220 38 38)'
            name.classList.add('invalid')            
        }
          
        if(!email.value.match(pattern) || email.value.length === 0){
            emailSpan.style.display='block'
            email.style.borderBottomColor = 'rgb(220 38 38)'
            email.classList.add('invalid')
        }
        
        if(title.value.length === 0){
            titleSpan.style.display='block'
            title.style.borderBottomColor = 'rgb(220 38 38)'
            title.classList.add('invalid')
        }

        if(companyName.value.length === 0){
            companyNameSpan.style.display='block'
            companyName.style.borderBottomColor = 'rgb(220 38 38)'
            companyName.classList.add('invalid')
        }

        if(message.value.length === 0){
            messageSpan.style.display='block'
            message.style.borderBottomColor = 'rgb(220 38 38)'
            message.classList.add('invalid')
        }
    }


    return(
        <form action="" id='form' onSubmit={handleSubmit} className="flex flex-col gap-5 basis-1/2 w-full relative z-10 max-lg:basis-full max-lg:mt-12 max-lg:items-stretch">

            <input type="text" id="name" placeholder="Name" className="bg-transparent placeholder-gray-300 border-b-2 border-gray-300 pb-3 px-4 outline-none " />
            <span id="nameSpan" className='text-end italic text-[rgb(220_38_38)] hidden'>Can&apos;t be empty</span>

            <input type="text" id="email" placeholder="Email" className="bg-transparent placeholder-gray-300 border-b-2 border-gray-300 pb-3 px-4 outline-none" />
            <span id="emailSpan" className='text-end italic text-[rgb(220_38_38)] hidden'>Look like this is not email</span>

            <input type="text" id="companyName" placeholder="Company Name" className="bg-transparent placeholder-gray-300 border-b-2 border-gray-300 pb-3 px-4 outline-none" />
            <span id="companyNameSpan" className='text-end italic text-[rgb(220_38_38)] hidden'>Can&apos;t be empty</span>

            <input type="text" id="title" placeholder="Title" className="bg-transparent placeholder-gray-300 border-b-2 border-gray-300 pb-3 px-4 outline-none" />
            <span id="titleSpan" className='text-end italic text-[rgb(220_38_38)] hidden'>Can&apos;t be empty</span>

            <textarea id="message" placeholder="Message" className="bg-transparent placeholder-gray-300 border-b-2 border-gray-300 pb-3 px-4 outline-none">
            </textarea>
            <span id="messageSpan" className='text-end italic text-[rgb(220_38_38)] hidden'>Can&apos;t be empty</span>

            <button className="border-2 border-white rounded-3xl px-4 py-2 self-start transition-all duration-500 hover:text-black hover:bg-white">submit</button>
        </form>
    )
}