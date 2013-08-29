npm i
./node_modules/bem/bin/bem make libs
./node_modules/bem/bin/bem make site
mv release temp
git checkout gh-pages
rm -rf release
mv temp release
git add .
git commit -m "update site, build #$BUILD_NUMBER"
git push origin gh-pages