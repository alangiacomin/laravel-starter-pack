newSection "PUSH TO ORIGIN"

$somethingToCommit = (git status | Select-String ("^nothing to commit")).Matches.Count -eq 0

if ($somethingToCommit)
{
	git add .
	git commit -m "new version"

	$tagName = $version + "-rev-" + (Get-Date -Format "yyyyMMdd-HHmmss")
	$tagDesc = "Revisione del " + (Get-Date -Format "dd/MM/yyyy") + " ore " + (Get-Date -Format "HH:mm:ss")
	git tag -a $tagName -m $tagDesc

	Copy-Item ($cpanelFolder + '/.cpanel_update.yml') ($deployFolder + '/.cpanel.yml')
	git add .
	git commit -m "cpanel update"

	git push
	git push --tags
}
