class ClientsService {
    constructor(logger, sequelize) {
      this.logger = logger;
      this.sequelize = sequelize;
    }

    async getBrands(filters = {}) {
      this.logger.info({ data: { filters } }, "Retrieving the list of all brands");
      const { Brand } = this.sequelize.models;
      console.log("Yaban taba");
      return Brand.findAll();
    }
  
    async getList(filters = {}) {
      this.logger.info({ data: { filters } }, "Retrieving the list of clients");
  
      const { Feature, StaffMember, GeneralInterest, Client } = this.sequelize.models;
  
      return Client.findAll({
        where: filters,
        include: [
          {
            model: StaffMember,
            as: "assignedStaffMember",
          },
          {
            model: Feature,
            as: "optionalFeature",
          },
          {
            model: GeneralInterest,
            as: "generalInterest",
          }
        ],
      });
    }
  
    async getById(id) {
      this.logger.info({ data: { id } }, "Retrieving a robot by id");
      const { Client } = this.sequelize.models;
      return Client.findOne({
        where: { id },
      });
    }
  
    async create(clientInfo) {
      this.logger.info({ data: clientInfo}, "Creating a client");
      const { Client } = this.sequelize.models;
      const client = await Client.create(clientInfo);
  
      return client;
    }

    async new() {
      this.logger.info("Initializing an empty client");
      const { Client } = this.sequelize.models;
      const client = await Client.build({});
      return client;
    }
  }
  
  module.exports = ClientsService;
  