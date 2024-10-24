export async function getFileBlob(url: string) {
  const response = await fetch(url);

  if ( !response.ok ) {
    if ( response.status === 401 ) {
      throw new Error('UNAUTHORIZED');
    }
    throw new Error('UNKNOWN_ERROR');
  }

  const blob = await response.blob();

  return blob;
}

/**
 * downloadUrl
 */

interface DownloadUrlOptions {
  downloadBlob?: boolean;
}

export async function downloadUrl(url: string, filename: string = 'file', options?: DownloadUrlOptions) {
  const { downloadBlob = false } = options || {};
  let downloadUrl = url;

  if ( downloadBlob ) {
    const blob = await getFileBlob(url);
    const blobUrl = URL.createObjectURL(blob);
    downloadUrl = blobUrl;
  }

  const a = document.createElement('a');

  a.href = downloadUrl;
  a.download = filename;

  function handleOnClick() {
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 150);
    removeEventListener('click', handleOnClick);
  };

  a.addEventListener('click', handleOnClick, false);

  a.click();
}
