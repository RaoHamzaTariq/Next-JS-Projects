
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Bookmark, Share2 } from 'lucide-react'
import { BlogCardProps } from '@/data/interfaces'


const BlogHoriCard :React.FC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <Link href={`/blogs/${props.slug}`}>
    <article
        className="dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex"
      >
        <Image
          src={
                      props.mainImage
                        ? urlFor(props.mainImage).url()
                        : "/default-image.png"
                    }
          alt="Article"
          className="w-1/3 object-cover"
          width={788}
          height={636}
        />
        <div className="p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
          <p className=" mb-4">{props.shortDesc}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={
                                                 props.author?.image
                                                   ? urlFor(props.author?.image).url()
                                                   : "/default-image.png"
                                               }
                alt={`Author: ${props.author?.name}`}
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
              <div className="ml-3">
                <p className="text-sm font-medium">{props.author?.name}</p>
                <p className="text-xs">
                  {props.publishedAt}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className=" ">
                <Bookmark className=""/>
              </button>
              <button className="">
                <Share2 className=""/>
              </button>
            </div>
          </div>
        </div>
      </article>
      </Link>
  )
}

export default BlogHoriCard