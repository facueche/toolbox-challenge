class FetchFilesService
{
    constructor(filesRepository)
    {
        this.filesRepository = filesRepository;
    }

    async handle()
    {
        const files = await this.filesRepository.fetchFiles();
        return files.filter(file => file.shouldShow());
    }
}

module.exports = FetchFilesService;