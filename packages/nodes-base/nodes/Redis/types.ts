import type { createClient } from 'redis';

export type RedisClient = ReturnType<typeof createClient>;

export type RedisCredential = {
	host: string;
	port: number;
	ssl?: boolean;
	sni?: string;
	database: number;
	user?: string;
	password?: string;
};
