import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../public/images');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            const outputPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

            console.log(`Converting: ${file} -> ${path.basename(outputPath)}`);

            try {
                await sharp(fullPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                // Remove original file since user has backup
                fs.unlinkSync(fullPath);
            } catch (error) {
                console.error(`Error converting ${file}:`, error);
            }
        }
    }
}

console.log('Starting image optimization...');
processDirectory(rootDir).then(() => {
    console.log('Image optimization complete!');
}).catch(err => {
    console.error('Optimization failed:', err);
});
