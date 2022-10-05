mkdir public
cd client
npm i
npm run build
mv ./dist/client/* ../public/
echo "Finish deploy on jsanoja.dev!"