# paul-mathias-realisation-ssr

## Getting started

- Clone this repository:
```sh
git clone git@github.com:thibaudpriou/paul-mathias-realisation.com-ssr.git
cd ./paul-mathias-realisation.com-ssr
```
- Image and video files are not versionned: they need to be put in the `static/imgs` and `static/videos` folders respectively. Run the following command to download them from our AWS S3 bucket:
```sh
aws s3 sync \
    --exclude "*" --include "imgs/*" --include "videos/*" \
    s3://paul-mathias-realisation.com-website \
    ./static
```

Run the following commands to install project dependencies and run development server:
```sh
yarn && yarn dev
```

## Deploy assets / code
Build the project with:
```sh
rm -rf ./build && yarn export
```

Deploy code & assets to S3 buckets with [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html). 
- for 1st time deployment, see the ["Initial setup on AWS"](./AWS_SETUP.md) documentation
- push HTML files to S3 bucket
```sh
aws s3 sync --delete \
    --exclude "*/.DS_Store" --exclude "imgs/*" --exclude "videos/*" \
    ./build \
    s3://paul-mathias-realisation.com-website
```
- [optional] push imgs files to S3 bucket
```sh
aws s3 sync --delete \
    --exclude "*/.DS_Store" --exclude "*" --include "imgs/*" \
    ./build \
    s3://paul-mathias-realisation.com-website
```
- [optional] push videos files to S3 bucket
```sh
aws s3 sync --delete \
    --exclude "*/.DS_Store" --exclude "*" --include "videos/*" \
    ./build \
    s3://paul-mathias-realisation.com-website
```

[option] If some existing assets were updated, cache will need to be invalidated:
- find distribution ID from list
    ```sh
    aws cloudfront list-distributions
    ```
- invalidate files
    ```sh
    # [recommended] only invalidate CSS / JS files
    aws cloudfront create-invalidation \
        --distribution-id <id> \
        --paths "/_app/*" "/app.css"
    ```
    ```sh
    # invalidate all files
    aws cloudfront create-invalidation \
        --distribution-id <id> \
        --paths "/*"
    ```
    Example:
    ```sh
    # invalidate all CSS / JS files for distribution=EICMTRWR64DN7
    aws cloudfront create-invalidation \
        --distribution-id EICMTRWR64DN7 \
        --paths "/_app/*" "/app.css"

    # invalidate all imgs files for distribution=EICMTRWR64DN7
    aws cloudfront create-invalidation \
        --distribution-id EICMTRWR64DN7 \
        --paths "/imgs/*"
    ```

## Progressive JPEG images
JPEG progressive images usage is prefered. To check whether or not website images are progressive, run the following script:
```sh
nb_progressive_img=0
nb_not_progressive_img=0
for image in $(ls static/**/*.(jpeg|jpg))
do
    if [[  -z $(file $image | grep progressive) ]]
    then
        nb_not_progressive_img=$((nb_not_progressive_img+1))
        echo "\e[0;31m[NOT PROGRESSIVE]\e[m\t - \e[0;31m$image\e[m"
    else
        nb_progressive_img=$((nb_progressive_img+1))
        echo "\e[0;32m[PROGRESSIVE]\e[m\t\t - $image"
    fi
done
echo "Images found: $((nb_progressive_img+nb_not_progressive_img))"
echo "Progressive JPEG Images found: \e[0;32m$nb_progressive_img\e[m"
echo "Not Progressive JPEG Images found: \e[0;31m$nb_not_progressive_img\e[m"
```
