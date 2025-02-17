import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About page', 'Migueles','data']
};

export default function AboutPage(){
    return(
        <span className="text-7xl">About Page</span>
    )
}