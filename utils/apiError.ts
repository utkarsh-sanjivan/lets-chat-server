import status from 'http-status';

class ApiError extends Error {
	/**
	 * Creates API Error objects.
	 * @param message - {String} error message
	 * @param statusCode - {String} error status
	 * @returns {Object} the error object with provided message and status
	 */
	constructor(message?: string, statusCode: number = status.INTERNAL_SERVER_ERROR) {
		super(message);
		this.statusCode = statusCode;
		this.message = message || status[`${statusCode}_NAME`].toString();
		Error.captureStackTrace(this, this.constructor);
	}
}

// eslint-disable-next-line  no-redeclare
interface ApiError {
	message: string;
	statusCode: number;
}

export default ApiError;
