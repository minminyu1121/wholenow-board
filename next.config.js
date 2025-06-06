/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // 如果使用外部圖片，在這裡添加域名
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

module.exports = nextConfig; 