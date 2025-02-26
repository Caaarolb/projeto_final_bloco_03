import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center p-1 bg-red-700 text-white">
                <div className="container flex flex-col items-center py-1">
                    <p className='text-xl font-thin'>Farmácia FarMais| Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-5'>
                        <a href="#" target="_blank">
                            <LinkedinLogo size={40} weight='thin' />
                        </a>
                        <a href="#" target="_blank">
                            <InstagramLogo size={40} weight='thin' />
                        </a>
                        <a href="#" target="_blank">
                            <FacebookLogo size={40} weight='thin' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer