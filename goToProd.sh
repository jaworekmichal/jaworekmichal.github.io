# lol. Kinda deployment script.

cd source
npm run build
cd ..

rm index.html favicon.ico
rm -rf css js

cp -R source/dist/* .