class FetchFilesService
{
    constructor(filesRepository)
    {
        this.filesRepository = filesRepository;
    }

    setFileName(fileName)
    {
        this.fileName = fileName;
    }

    async handle()
    {
        if (this.fileName === undefined) {
            const files = await this.filesRepository.fetchFiles();
            return files.filter(file => file.shouldShow());
        } else {
            const file = await this.filesRepository.fetchFileByFileName(this.fileName)
            return [file];
        }
    }
}

module.exports = FetchFilesService;