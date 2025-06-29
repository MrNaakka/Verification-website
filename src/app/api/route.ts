import { readFile } from "node:fs/promises";
import path from "node:path";

import { neon } from "@neondatabase/serverless";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const filepath = path.join(
		process.cwd(),
		"./files/Verification-app-folder.zip"
	);

	const filename = "Verification-app-folder.zip";
	const version = "1.0.0";
	const ip =
		req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
	const userAgent = req.headers.get("user-agent") ?? "Unknown";
	const referrer = req.headers.get("referer") ?? "Unknown";

	try {
		const binary = await readFile(filepath);

		const sql = neon(process.env.DATABASE_URL!);

		await sql`
		INSERT INTO logs (
			file_name,
			file_version,
			ip_address,
			user_agent,
			referrer
		) VALUES (
			${filename},
			${version},
			${ip},
			${userAgent},
			${referrer}
		)
	`;

		return new Response(binary, {
			headers: {
				"Content-Type": "application/octet-stream",
				"Content-Disposition": 'attachment; filename="Verification.zip',
				"Content-Length": binary.length.toString(),
			},
		});
	} catch (error: unknown) {
		const error_message =
			error instanceof Error ? error.message : String(Error);

		const sql = neon(process.env.DATABASE_URL!);

		await sql`
		INSERT INTO logs (
			file_name,
			file_version,
			ip_address,
			user_agent,
			referrer,
			download_success,
			error_message
		) VALUES (
			${filename},
			${version},
			${ip},
			${userAgent},
			${referrer},
			${false},
			${error_message}

		)
	`;
		return new Response(`Error: ${error_message}`, { status: 500 });
	}
}
