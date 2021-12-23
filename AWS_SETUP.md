# Initial setup on AWS

## Pre-requisites
- own a domain name, the following documentation will assume we own `paul-mathias-realisation.com`

## AWS S3

Create a S3 bucket:

- name = `paul-mathias-realisation.com-website`
- public access allowed
- [after creation] edit this bucket with the following settings:
    - tab "Permission", add this bucket policy:
        ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": "*",
                    "Action": "s3:GetObject",
                    "Resource": "arn:aws:s3:::paul-mathias-realisation.com-website/*"
                }
            ]
        }
        ```
    - tab "Properties", enable "Static website hosting"
    - tab "Permissions", add this CORS configuration:
    ```json
    [
        {
            "AllowedHeaders": [],
            "AllowedMethods": [
                "GET"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": []
        }
    ]
    ```

## AWS Certificate Manager

Request a certificate.
- "public" certificate
- domain names:
    ```
    paul-mathias-realisation.com
    *.paul-mathias-realisation.com
    ```
- see certificate details and "create records in Route 53"
- wait for the certificate to be issued (you might want to refresh web page)

## AWS CloudFront

Create a CloudFront distribution for assets:
- Origin domain = choose the `paul-mathias-realisation.com-website` S3 bucket
- Name = `cdn.paul-mathias-realisation.com`
- Compress objects automatically = `Yes`
- Viewer protocol policy = `Redirect HTTP to HTTPS`
- Alternate domaine name (CNAME) = `cdn.paul-mathias-realisation.com`
- Custom SSL certificate = select the one created above previously
- write down the distribution domain name (ex: `xxxxx.cloudfront.net`) to create the DNS record in Route53 (see below)

Create another CloudFront distribution to serve website on HTTPS:
- Origin domain = enter the S3-website endpoint `paul-mathias-realisation.com-website.s3-website.eu-west-3.amazonaws.com`
- Name = `paul-mathias-realisation.com`
- Compress objects automatically = `Yes`
- Viewer protocol policy = `Redirect HTTP to HTTPS`
- Cache policy: choose `CachingDisabled`
- Alternate domaine name (CNAME) = `paul-mathias-realisation.com`
- Custom SSL certificate = select the one created above previously
- write down the distribution domain name (ex: `yyyyy.cloudfront.net`) to create the DNS record in Route53 (see below)


## AWS Route53

Create a new hosted zone:
- Domain name = `paul-mathias-realisation.com`
- Type = Public hosted zone

Create an A record for the assets:
- name = `cdn.paul-mathias-realisation.com`
- type = `A`
- value = `alias` to our CloudFront distribution domain name `xxxxx.cloudfront.net`

Create an A record for the website files:
- name = `paul-mathias-realisation.com`
- type = `A`
- value = `alias` to our CloudFront distribution domain name `yyyyy.cloudfront.net`

Create another A record for `www` subdomain:
- name = `www.paul-mathias-realisation.com`
- type = `A`
- value = `alias` to another record in our hosted zone: `paul-mathias-realisation.com`
