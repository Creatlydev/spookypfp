'use client'

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';

// `pnpm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Button() {
  const [file, setFile] = useState([])
  return (
      <FilePond
        className='w-[200px] mt-12'
        files={file}
        onupdatefiles={setFile}
        name='file'
        labelIdle='Drag & Drop your photo or <span class="filepond--label-action">Browse</span>'
      />
  )
}