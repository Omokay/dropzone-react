export const formatToBase64 = (file) => {
    if (file.length < 1) {
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onabort = () =>  'File reading was aborted'
    reader.onerror = () => 'File could not be read'

    reader.onload = () => {
        return reader.result;
    }
}
