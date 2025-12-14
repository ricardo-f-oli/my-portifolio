import Image from 'next/image'
import authorImage from '@/public/images/authors/ricardo.png'

export default function Intro() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between gap-8 pb'>
      <div className='flex-1 text-center md:text-left'>
        <h1 className='title no-underline'>
          Hey, I&#39;m Ricardo.
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Software Engineer with +6 years of professional experience specializing in building and maintaining 
high-quality, secure RESTful APIs and backend systems for global enterprises in finance, 
e-commerce, and healthcare. 
        </p>
      </div>
    <div className='relative'>
      <Image 
        className='rounded-lg'
        src={authorImage}
        alt='Ricardo Oliveira'
        width={175}
        height={175}
        priority
        />
    </div>
    </section>
  )
}
