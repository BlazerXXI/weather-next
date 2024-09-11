/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = withPWAInit({
	dest: "public",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swMinify: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
});

export default nextConfig({});
