let supportedWebp: boolean

export const supportsWebp = async () => {
  if (typeof window === 'undefined') return

  if (typeof supportedWebp !== 'undefined') {
    return supportedWebp
  }

  if (!window.createImageBitmap) return false

  const webpData =
    'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = await fetch(webpData).then(r => r.blob())

  return createImageBitmap(blob).then(
    () => {
      supportedWebp = true
      return true
    },
    () => {
      supportedWebp = false
      return false
    }
  )
}

supportsWebp()
