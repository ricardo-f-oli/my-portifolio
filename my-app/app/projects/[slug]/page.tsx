import MDXContent from "@/components/mdx-content";
import { getProjectsBySlug, getProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const projects = await getProjects()
    const slugs = projects.map( project => ({ slug: project.slug}))

    return slugs
}

export default async function Projects({params}: {params: {slug: string}}){
    const {slug} = await params
    const post = await getProjectsBySlug(slug)

    if(!post){
        notFound()
    }

    const{metadata, content}  = post
    const{title, image, author, publishedAt} = metadata

    return(
        <section className='pb-24 pt-32'>
            <div className='container max-w-3x1'>
                <Link
                    href='/posts'
                    className='mb-8 inline-flex items-center gap-2 text-sm font-light'
                >
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span> Back to Projects</span>
                </Link> 
            

            {image && (
                <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
                    <Image
                        src={image}
                        alt={title || ''}
                        className='object-cover'
                        fill
                    />
                </div>
            )}

            <header>
                <h1 className='title'>{title}</h1>
                <p className='mt-3 text-xs text-muted-foreground'>
                    {author}/ {formatDate(publishedAt ?? '')}
                </p>

                <main className='prose mt-16 dark:prose-invert'>
                    <MDXContent source={content} />
                </main>
            </header>

            </div>
        </section>
    )
}