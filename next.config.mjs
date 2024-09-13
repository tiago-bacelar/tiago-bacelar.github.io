/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/minecraft-qr-code',
                destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                permanent: false,
                basePath: false
            },
        ]
    },
};


export default nextConfig;
