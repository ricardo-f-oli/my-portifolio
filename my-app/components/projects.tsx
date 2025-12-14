
import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects( {projects}: {projects: ProjectMetadata []}){
    return(
        <ul className='flex flex-col gap-8'>
            {projects.map(project => (
                <li key={project.slug} className='group relative'>
                   <Link href={`/projects/${project.slug}`}>
                      <div className='relative h-64 w-full overflow-hidden bg-muted'>
                        {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title || ''}
                                    fill
                                    className='rounded-lg object-cover object-center transition'
                                    />
                        )}
                        
                         <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <div className='text-white'>
                                    <h2 className='title text-lg md:text-xl font-bold mb-2 line-clamp-2'>
                                        {project.title}
                                    </h2>
                                    <p className='text-sm mb-2 line-clamp-2 opacity-90'>
                                        {project.summary}
                                    </p>
                                    <p className='text-xs opacity-75'>
                                        {formatDate(project.publishedAt ?? '')}
                                    </p>
                                </div>
                            </div>
                            </div>
                    </Link> 
                </li>
            ))}
        </ul>
    )
}