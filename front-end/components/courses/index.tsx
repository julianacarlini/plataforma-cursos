"use client"

import Link from 'next/link'
import React from 'react'
import CourseCard from '../courseCard'
import { KeyboardDoubleArrowRight } from '@mui/icons-material'

export default function Courses() {
  return (
    <section className="courses" aria-labelledby="cursos-disponiveis">
            <h1 id="cursos-disponiveis">Cursos Disponíveis</h1>
        
            <div className="course-wrapper">
                <div className="courses-carousel" role="listbox" aria-label="Carrossel de cursos">
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                    <CourseCard 
                        image={'/assets/images/imagem-curso-alemao.webp'} 
                        title={'Alemão para iniciantes (A1)'} 
                        description={'Curso introdutório de Alemão. Aprenda os fundamentos da língua e regras básicas para conseguir falar alemão.'} 
                        id={0}                        
                    />
                </div>
            </div>
            
            <Link href="curso" className='link-curso'>
                <p className='button' style={{color: '#343A40'}}>Mais cursos</p>
                <KeyboardDoubleArrowRight />
            </Link>
        </section>
  )
}
