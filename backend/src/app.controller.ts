// ------------------------- Packages ------------------------------

import { Controller, Get, Res, Next, Req } from '@nestjs/common'
import { join } from 'path'
import { Response, NextFunction, Request } from 'express'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

@Controller()
export class AppController {
	// ---

	@Get('*')
	get(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
		if (req.path.includes('api')) {
			return next()
		}
		res.sendFile(join(process.cwd(), '../client/public/index.html'))
	}
}

// -----------------------------------------------------------------
