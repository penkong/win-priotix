// ------------------------- Packages ------------------------------

import {
	Body,
	Controller,
	Get,
	Logger,
	Post,
	ValidationPipe
} from '@nestjs/common'

// ------------------------ Local ----------------------------------

import { TournamentsService } from './tournaments.service'
import { Tou } from './dto'

// -----------------------------------------------------------------
@Controller('auth')
export class TournamentsController {
	// -------------------- Logger --------------------------

	private logger = new Logger(TournamentsController.name)

	// -------------------- Ctor --------------------------

	constructor(private authService: AuthService) {}

	// -------- consume service functionality -------------

	@Get('/test')
	public test() {}

	// ---

	@Post('/signup')
	public async signUp(
		@Body(ValidationPipe) authSignupDto: AuthSignUpDto
	): Promise<AuthResponseDto> {
		return this.authService.signUp(authSignupDto)
	}

	// ---

	@Post('/signin')
	public async signIn(
		@Body(ValidationPipe) authSigninDto: AuthSignUpDto
	): Promise<AuthResponseDto> {
		return await this.authService.signIn(authSigninDto)
	}

	// ---

	@Post('/otp')
	public async phoneOtp(
		@Body(ValidationPipe) authSignOTPDto: AuthSignOTPDto
	): Promise<AuthResponseDto> {
		return await this.authService.phoneOtp(authSignOTPDto)
	}
}

// -----------------------------------------------------
