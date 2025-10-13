"use client"

import { useRouter } from 'next/navigation';
import React, { MouseEventHandler } from 'react'

interface Props {
    image: string;
    title: string;
    description: string;
    id: number;
}

export default function CourseCard(props: Props) {
    const router = useRouter()

    const handleSubscription = (e: any) => {
        e.stopPropagation()
        router.push("/login")
    }

    //página de curso
    const handleOpenCourse = () =>{
        router.push(`/curso/${props.id}`)
    }

    return (
        <div onClick={handleOpenCourse} className="course-card" data-href="" role="option">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href="login.html" className="btn" onClick={handleSubscription}>INSCREVA-SE</a>
            </div>
        </div>
    )
}
