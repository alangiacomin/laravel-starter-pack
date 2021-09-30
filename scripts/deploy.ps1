# TASK DA ESEGUIRE

$version="0.1"

$tasks = @()
$tasks += ,"clone"
$tasks += ,"check_version"
#$tasks += ,"build"
#$tasks += ,"offline"
#$tasks += ,"push_update"
#$tasks += ,"migrate"
#$tasks += ,"online"

# VARIABILI DI CONFIGURAZIONE

$deployRepository='repos'
$appFolder=$PSScriptRoot + "/.."
$deployFolder=$PSScriptRoot + "/../deploy"
$cpanelFolder=$PSScriptRoot + "/cpanel"


# NON MODIFICARE SOTTO QUESTA RIGA

function newSection {
	param ([string]$name = "NEW SECTION")
	$color = "DarkBlue"
	$trattini = "+-" + ("-" * $name.Length) + "-+"
	Write-Host $trattini -ForegroundColor $color
	Write-Host "| $name |" -ForegroundColor $color
	Write-Host $trattini -ForegroundColor $color
}

function printError {
	param ([string]$message = "An error occurred ...")
	Write-Host "`n"
	[Console]::ForegroundColor = 'red'
	[Console]::Error.WriteLine($message)
	[Console]::ResetColor()
	Write-Host "`n"
}

function checkIfError {
	param ($message)
	if (!$?) {
		printError $message
		exit 1
	}
}

function exitWithError {
	param ($message)
	printError $message
	exit 1
}

cd $deployFolder

foreach ($task in $tasks)
{
	. ($appFolder + '/scripts/deploy/deploy_' + $task + '.ps1')
	if (!$?) {
		break
	}
	else
	{
		[Console]::ForegroundColor = 'green'
		[Console]::Error.WriteLine("OK")
		[Console]::ResetColor()
	}
}

cd $appFolder
