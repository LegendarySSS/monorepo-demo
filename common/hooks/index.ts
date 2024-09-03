import { useEffect } from 'preact/hooks'

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}