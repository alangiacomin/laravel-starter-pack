newSection "CHECK VERSION"

"New version: {0}" -f $version | Write-Host

$tags = git tag


$tagExists = ($tags | Select-String ("^" + $version + "$")).Matches.Count -gt 0
if ($tagExists)
{
	"`nExisting:" | Write-Host
	$tags | Sort-Object -Descending | Write-Host
	exitWithError "Versione gia' esistente"
}
