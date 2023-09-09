const fetchAndCache = async (videoFileUrl: string, cache: Cache) => {
  try {
    const cacheResponse = await cache.match(videoFileUrl);
    if (cacheResponse) {
      return cacheResponse;
    }

    const networkResponse = await fetch(videoFileUrl);
    cache.put(videoFileUrl, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    console.log(error);
  }
}

const getCache = async (filesToCache: string | string[]): Promise<void> => {
  try {
    const toCache = typeof filesToCache === 'object' ? filesToCache : [filesToCache];
    const cache = await window?.caches?.open('video-pre-cache');
    if (cache) {
      
      Promise.all(toCache.map((fileToCache) => fetchAndCache(fileToCache, cache)));
    }
  } catch (error) {
    console.log(error);
  }
}

export default getCache;
