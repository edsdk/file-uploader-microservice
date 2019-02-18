import * as express from "express"
import {Express} from "express";
import {bindFileUploader} from "@edsdk/file-uploader-server";

export interface FileUploaderMicroserviceConfig {
    host?: string,        // host to listen
    port?: number,        // port to listen
    urlUploader?: string, // path only
    dirRoot?: string,    // dir to serve static content from
    dirFiles: string,    // dir of directory with files to upload into,
    config?: {[key: string]: string} // config to pass into file-uploader-server
}

export function startFileUploaderMicroservice(config: FileUploaderMicroserviceConfig): Express {

    // Create Express app
    let app = express();

    // Attach uploader
    bindFileUploader({
        app: app,                                           // Application to attach to
        url: config.urlUploader ? config.urlUploader : '/', // URL to serve
        dir: config.dirFiles                                // Where to store files
    });

    if (config.dirRoot)
        app.use(express.static(config.dirRoot)); // Serve HTML and CSS files from 'www' directory

    // Listen the 8080-th port on localhost
    app.listen(
        config.port ? config.port : 8080,
        config.host ? config.host : 'localhost',
        () => {
            // Server started successfully
            console.log("Image Editor SDK microservice started on localhost:8080");
        }
    );

    return app;
}