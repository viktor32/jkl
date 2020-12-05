# Jira Key Linker

Extension from Chrome Browser.

Link Jira key in GitHub requests. For example the title of request 

`[KEY-323] Some title of request` 

will be replaced to 

`[<a href="{jira-domain}/browse/KEY-323">KEY-323</a>] Some title of request`

## How to install

### Chrome

1. download the repository and unpack it
2. open [chrome://extensions/](chrome://extensions/) and click `Load unpacked`
3. select path with the extension
4. open a page with a request that has something like `[KEY-123]` in the title and try to click on it 

### Firefox

1. download the repository and unpack it
2. open [about:config](about:config) and disable `security.csp.enable`
3. open [about:debugging](about:debugging) then click `This Firefox` and click `Load Temporary Add-on...`
4. select path with the extension
5. open a page with a request that has something like `[KEY-123]` in the title and try to click on it
