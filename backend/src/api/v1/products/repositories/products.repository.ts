// -------------------------- Packages ----------------------------

import { Logger } from '@nestjs/common';

// -------------------------- Local  ----------------------------

import { Products } from '../models/';

// ----------------------------------------------------------------

// @EntityRepository(User) Repository<ClientIntegrations>
export class ProductsRepository {
	// ---------------------- Logger --------------------------------

	private logger = new Logger(ProductsRepository.name);

	// -------------------------------------------------

	public async updateClientIntegrations(): Promise<any> {}

	// ---

	public async getById(id: number): Promise<any> {}
}
