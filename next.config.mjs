/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // pathname: "",
                hostname: "unsplash.com",
                protocol: "https",

            }
        ]
    }
};

export default nextConfig;
