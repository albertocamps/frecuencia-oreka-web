import { useSyncExternalStore } from 'react'

const query = '(max-width: 1020px)'

function subscribe(callback) {
  const media = window.matchMedia(query)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(query).matches
}

export default function useCompactLayout() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
