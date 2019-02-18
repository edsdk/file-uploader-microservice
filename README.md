# File Uploader microservice

> Handle uploaded files on separate server instance

File Uploader microservice is [Express](https://www.npmjs.com/package/express)-based webserver application which will save file uploads to your server storage.

This package is simple to use wrap for [File Uploader](https://www.npmjs.com/package/@edsdk/file-uploader-server) library.


## Install

With [npm](https://npmjs.com/) installed, run

```
$ npm install @edsdk/file-uploader-microservice
```


## Usage

```js
require("@edsdk/file-uploader-microservice").startFileUploaderMicroservice({
    host: 'localhost',
    port: 8080,
    urlUploader: '/uploader',
    dirRoot: './www',
    dirFiles: './www/images'
});
```

The code above will:

- Listen `http://localhost/8080/uploader` and wait for files uploaded by file uploader compatible clients (like [ImgPen](https://npmjs.com/package/@edsdk/imgpen)).
- Save uploaded files to `./www/images` directory
- Serve `./www` directory as public in order to allow accessing uploaded files by there URLs.

If you do not wish to share uploaded files with File Uploader microservice you can set `dirRoot: null`. This can be useful if you handle uploads with File Uploader but want to share them using another webserver which has access to the same storage.

See [sample of usage](https://github.com/edsdk/imgpen-example) of File Uploader microservice together with [ImgPen](https://imgpen.com) image editor.


## See Also

- [ImgPen website](https://imgpen.com)
- [File Uploader server](https://npmjs.com/package/@edsdk/file-uploader-server)
- [ImgPen package](https://npmjs.com/package/@edsdk/imgpen)
- [ImgPen + File Uploader example](https://github.com/edsdk/imgpen-example)

## License

Double licensing with EdSDK licenses family. Free usage is available.
File Uploader now comes in bundle with ImgPen image editor and uses the same license you choose for [ImgPen](https://npmjs.com/package/@edsdk/imgpen).
