Airomo blocks library
=====================

How to get the library
----------------------

````
git clone git://github.com/airomo/components.git
cd components
npm i
./node_modules/bem/bin/bem make libs
./node_modules/bem/bin/bem make sets
````

Development
-----------

Start server with ``./node_modules/bem/bin/bem server`` command then navigate to [http://localhost:8080/desktop.sets/](http://localhost:8080/desktop.sets/)

Build documentation
-------------------

````
git checkout master
./node_modules/bem/bin/bem make site
git checkout gh-pages
git add .
git commit -am "update site"
git push origin gh-pages
````

Documentation url is [http://airomo.github.io/components/release/index/index.html](http://airomo.github.io/components/release/index/index.html)
