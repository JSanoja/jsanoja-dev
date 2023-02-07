echo "Making public dir"
mkdir public
echo "Enter folder project"
cd client
echo "Install dependencies"
npm i
echo "Run build project"
npm run build
echo "Moving client to public dir"
mv ./dist/client/* ../public/
echo "Finish deploy /public/ on jsanoja.dev!"