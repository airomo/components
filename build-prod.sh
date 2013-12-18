#define $GIT_BRANCH variable if it false
if [ ! $GIT_BRANCH ]; then GIT_BRANCH=`git rev-parse --abbrev-ref HEAD`; fi

#define $BUILD_NUMBER variable if it false
if [ ! $BUILD_NUMBER ]; then BUILD_NUMBER="local build"; fi

if [ `echo $GIT_BRANCH | sed 's/origin\///'` != 'gh-pages' ]; then
    #build all branches except production branch

    #delete old builds
    rm -rf branch

    #create builds directory
    mkdir -p branch

    #create build directory for current branch
    echo `echo "branch/$GIT_BRANCH" | sed 's/origin\///'` | xargs mkdir -p

    #copy images from blocks
    echo `echo "branch/$GIT_BRANCH" | sed 's/origin\///'` | xargs cp -r common.blocks

    #build site
    npm i
    ./node_modules/bem/bin/bem make libs
    ./node_modules/bem/bin/bem make site

    #move build in 'branch' directory
    echo `echo "branch/$GIT_BRANCH" | sed 's/origin\///'` | xargs mv release

    #rename branch directory
    mv branch temp_branch

    #checkout production branch
    git checkout gh-pages

    #save in repository only last build
    git reset 3eb8d9660a016a919be6d4368d4e3304b36f5ca7

    #remove old build of current branch
    echo `echo "branch/$GIT_BRANCH" | sed 's/origin\///'` | xargs rm -rf

    #create 'branch' directory if it not exist
    mkdir -p branch

    #move new build from temporary directory
    mv temp_branch/* branch/
    rm -rf temp_branch

    #remove builds of not existed branches
    cd branch
    { git branch | sed 's/^[* ]*//'; ls; } | sort | uniq -u | grep "`{ git branch | sed 's/^[* ]*//'; }`" -v | xargs rm -rf
    cd ..

    #stage changes
    git add .
    if [ `git ls-files --deleted` ]; then
        git ls-files --deleted | xargs git rm
    fi

    #commit changes and update production branch in repository
    git commit -m "update site, build #$BUILD_NUMBER"
    git push origin +gh-pages

    #back on start branch
    git checkout $GIT_BRANCH

fi
