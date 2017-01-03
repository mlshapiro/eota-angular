# Website:

in 'eota-angular' directory

Images: ‘images.json’
Shows: ‘shows.json’

- Right click on the 'eota-angular' folder, select 'New Terminal At Folder'
- type 'bash update_site.sh'
- Check to make sure changed file list looks right
- Test site (below)

## Testing

From the 'eota-angular/app' directory

- (Right click on the 'app' folder, select 'New Terminal At Folder')
- type in the terminal: $ python -m SimpleHTTPServer
	- you HAVE to be in the 'app' directory in order for this work right
- it should say '0.0.0.0 port 8000' or something like that
- go to your web browser (chrome incognito) and type in the address: 127.0.0.1:8000

## Setup s3cmd:

s3cmd --configure

Amazon AWS bucket configuration:
