import Link from "next/link"

const page = () => 
{
    return (
        <>
            <h1 className="mb-2 text-center text-white text-mono text-2xl">Developer</h1>
            <hr className="mx-[20%]"/>
        <section className="flex justify-center text-white p-2">
            <div style={{width:'150px'}} className="text-center m-2">
                <Link href={'https://github.com/fares303'} target='_blank' className="text-xl italic">
                    <img className="mb-2 border-2 hover:border-cyan-500" width={'100%'} src="leox.jpg" alt="xd" style={{borderRadius:'50%'}} />
                    Founas Mohamed Fares
                </Link>
            </div>
            
        </section>
        <div className="flex justify-center place-items-center" >
            
        </div>
            <hr className="mx-[20%]"/>
            <h4 className="mt-2 p-2 text-center text-white">Fares Movies ©2024 all rights reserverd</h4>
        </>
    )
}

export default page