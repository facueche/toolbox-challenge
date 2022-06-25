const FetchFilesService = require("../../application/fetchFiles.service");
const FilesMockRepository = require("../repositories/files.mock.repository");
const FilesRepository = require("../repositories/files.repository");

class FetchFilesController
{
    async handle(request, response)
    {
        try {
            const filesRepository = process.env.APP_ENV == "test" ? FilesMockRepository : FilesRepository;
            const fetchFilesService = new FetchFilesService(filesRepository);

            if (request.query.fileName !== undefined || request.query.fileName !== "")
                fetchFilesService.setFileName(request.query.fileName);
            
            const files = await fetchFilesService.handle();
    
            response
                .status(200)
                .json(files);
        } catch (error) {
            response
                .status(400)
                .json({
                    message: error.message,
                });
        }
    }
}

module.exports = FetchFilesController;