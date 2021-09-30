newSection "CLONE REPOSITORY"

cd $appFolder

Remove-Item $deployFolder -Recurse -Force 2> $null
mkdir $deployFolder

git clone $deployRepository $deployFolder

cd $deployFolder
