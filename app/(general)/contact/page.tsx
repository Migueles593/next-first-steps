import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contacto Migueles',
 description: 'Contacto Clientes',
 keywords:['Migueles']
};

export default function ContactPage(){
    return(
        <>
            <span className="text-5xl">Contact</span>
        </>
    )
}