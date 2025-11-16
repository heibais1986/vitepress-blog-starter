Write-Host "Cleaning VitePress cache..." -ForegroundColor Yellow

$paths = @(
    "docs\.vitepress\.temp",
    "docs\.vitepress\cache",
    "docs\.vitepress\dist"
)

foreach ($path in $paths) {
    if (Test-Path $path) {
        Remove-Item $path -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "Deleted: $path" -ForegroundColor Green
    }
}

Write-Host "Cache cleaned successfully!" -ForegroundColor Cyan
