import type { ReactNode, ImgHTMLAttributes } from 'react'
import styles from './style.module.scss'


type ResponsiveImage = {
  src: string
  width: number
}

interface BannerProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string
  images: ResponsiveImage[]
  sizes?: string
  alt: string
  children: ReactNode
}

const Banner = ({ src, images, sizes, alt, children }: BannerProps) => {
  const srcSet = images
    .map(({ src, width }) => `${src} ${width}w`)
    .join(', ')

  return (
    <div className={styles.hero}>
  <img
    src={src}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    className={styles.image}
  />

  <div className={styles.content}>
    {children}
  </div>
</div>

  )
}

export default Banner
