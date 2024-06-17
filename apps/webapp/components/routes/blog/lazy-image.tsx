'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
const aspectRatioThreshold = 0.2

export function LazyImage({
  src,
  alt,
  className,
  imgWrapperClassName,
  ...props
}: React.ComponentProps<typeof Image> & { imgWrapperClassName?: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  })

  const calculateAdjustedHeight = (
    img: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const width = img.currentTarget.naturalWidth
    const height = img.currentTarget.naturalHeight
    setImageDimensions({ width, height })
    setIsLoading(false)
  }

  const isSameDimensions = useMemo(() => {
    const aspectRatio = imageDimensions.width / imageDimensions.height
    return Math.abs(aspectRatio - 1) <= aspectRatioThreshold
  }, [imageDimensions.height, imageDimensions.width])

  return (
    <picture
      className={cn(
        className?.includes('absolute') ? 'absolute' : 'relative',
        'flex w-full overflow-hidden',
        isLoading &&
          'scale-110 bg-gray-300 blur-2xl grayscale dark:bg-gray-700',
        className?.includes('blogImages')
          ? 'rounded-images border border-black'
          : '',
        className?.includes('blogImages') && isSameDimensions
          ? 'h-[320px] md:h-[465px]'
          : '',
        className?.includes('blogImages') && !isSameDimensions
          ? 'rounded-images sm:h-space-127 lg:h-space-157 xl:h-space-213 h-[110px]'
          : '',
        imgWrapperClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        onLoad={calculateAdjustedHeight}
        loading="lazy"
        className={cn(
          'h-max w-full duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          isSameDimensions
            ? 'object-cover'
            : 'rounded-images object-contain object-center',
          className
        )}
        {...props}
      />
    </picture>
  )
}
