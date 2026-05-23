const fs = require('fs');
const path = require('path');

const sourceDir = "C:\\Users\\andre.lindaas\\OneDrive - Made for Movement Group AS\\Documents\\New project\\public\\signs\\opplysningsskilt";
const destDir = "C:\\Users\\andre.lindaas\\Documents\\lappen-quiz-system\\public\\signs\\opplysningsskilt";

const files = [
    "skilt-508-1-kollektivfelt.jpg",
    "skilt-508-2-kollektivfelt.jpg",
    "skilt-509-sambruksfelt.jpg",
    "skilt-510-1-slutt-pa-kollektivfelt.jpg",
    "skilt-510-2-slutt-pa-kollektivfelt.jpg",
    "skilt-511-slutt-pa-sambruksfelt.jpg",
    "skilt-512-holdeplass-for-buss.jpg",
    "skilt-514-holdeplass-for-drosje.jpg",
    "skilt-518-gangveg.jpg",
    "skilt-520-sykkelveg.jpg",
    "skilt-521-sykkelfelt.jpg",
    "skilt-522-gang-og-sykkelveg.jpg",
    "skilt-526-2-envegskjoring.jpg",
    "skilt-527-2-blindveg-sideveg.jpg",
    "skilt-527-3-blindveg-apen-for-gaende-og-syklende.jpg",
    "skilt-527-4-blindveg-sideveg-apen-for-gaende-og-syklende.jpg",
    "skilt-528-valgfritt-kjorefelt.jpg",
    "skilt-530-sammenfletting.jpg",
    "skilt-531-felt-for-fartsokning.jpg",
    "skilt-532-kjorefelt-slutter.jpg",
    "skilt-534-kjorefelt-begynner.jpg",
    "skilt-538-kjorefeltinndeling.jpg",
    "skilt-540-gatetun.jpg",
    "skilt-542-slutt-pa-gatetun.jpg",
    "skilt-548-gagate.jpg"
];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

let count = 0;
files.forEach(file => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${file}`);
        count++;
    } catch (err) {
        console.error(`Error copying ${file}:`, err.message);
    }
});

console.log(`Successfully copied ${count} of ${files.length} files.`);
