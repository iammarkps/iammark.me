import Image from 'next/image'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'

const CustomLink = ({ ...props }) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const CustomImage = ({ ...props }) => {
  return (
    <Image
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}

const MDXComponent = {
  Image: CustomImage,
  a: CustomLink
}

type MdxProps = {
  code: string
}

export const Mdx = ({ code }: MdxProps) => {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={MDXComponent} />
}
