newSection "BUILD FILES"

# definisco array
$replacePaths = @()
$replacePaths += ,"app"
$replacePaths += ,"bootstrap"
$replacePaths += ,"config"
$replacePaths += ,"database"
$replacePaths += ,"public/robots.txt"
$replacePaths += ,"resources"
$replacePaths += ,"routes"
$replacePaths += ,"scripts"
$replacePaths += ,"storage"
$replacePaths += ,"artisan"
$replacePaths += ,"composer.json"
$replacePaths += ,"composer.lock"
$replacePaths += ,"package.json"
$replacePaths += ,"package-lock.json"
$replacePaths += ,"webpack.mix.js"
# $replacePaths

foreach ($rp in $replacePaths)
{
	Remove-Item ($deployFolder + "/" + $rp) -Recurse -Force 2> $null
	Copy-Item ($appFolder + "/" + $rp) ($deployFolder + "/" + $rp) -Recurse -Force
}

npm install
npm run clean
npm run prod
Remove-Item ($deployFolder + '\public\js\app\*_test_jsx.js')

$nothingToCommit = (git status | Select-String ("^nothing to commit")).Matches.Count -gt 0

if ($nothingToCommit)
{
	exitWithError "Nulla da committare"
}
