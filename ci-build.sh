rm -rf release desktop.sets/*
npm i
./node_modules/bem/bin/bem make libs
./node_modules/bem/bin/bem make sets
./node_modules/bem/bin/bem make site
git checkout gh-pages
git push origin gh-pages