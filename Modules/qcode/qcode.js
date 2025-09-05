// QCode API User-Agent Modifier Script
// Only modify User-Agent header for https://asia.qcode.cc/api

// Check if this is the target URL
if ($request.url.includes('asia.qcode.cc/api')) {
    let headers = $request.headers;
    
    // Only modify existing User-Agent header
    if (headers['User-Agent']) {
        headers['User-Agent'] = 'claude-cli/1.0.107 (external, cli)';
    }
    if (headers['user-agent']) {
        headers['user-agent'] = 'claude-cli/1.0.107 (external, cli)';
    }
    
    console.log('QCode API User-Agent modified');
    console.log('URL:', $request.url);
    
    // Return only the modified headers (complete headers object)
    $done({headers});
} else {
    // Keep request untouched for non-matching URLs
    $done({});
}